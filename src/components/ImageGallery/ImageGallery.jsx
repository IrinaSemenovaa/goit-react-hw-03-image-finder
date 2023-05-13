import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';
import NotFoundMessage from './NotFoundMessage';
import LoadMoreBtn from 'components/Button/Button';
import { GeneralLoader } from 'components/Loader/Loader';
import { containerStyles, galleryStyles } from './ImageGalleryStyles';

class ImageGallery extends Component {
  state = {
    hits: [],
    error: null,
    status: 'idle',
    page: 1,
    perPage: 12,
    totalHits: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending', error: null, page: 1, hits: [] });
      this.fetchImages();
    }
  }

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages();
      }
    );
  };

  fetchImages() {
    const { searchQuery } = this.props;
    const { page, perPage } = this.state;

    this.setState({ status: 'pending', error: null });

    axios
      .get(
        `https://pixabay.com/api/?key=34888722-f58ec8283d88d561d63a22054&q=${searchQuery}&page=${page}&per_page=${perPage}`
      )
      .then(response => {
        if (response.data.hits.length > 0) {
          this.setState(prevState => ({
            hits: [...prevState.hits, ...response.data.hits],
            status: 'resolved',
            error: null,
            totalHits: response.data.totalHits,
          }));
        } else {
          this.setState({
            status: 'rejected',
            error: 'No results found. Try again',
          });
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 404) {
          this.setState({
            status: 'rejected',
            error: 'No results found. Try again',
          });
        } else {
          this.setState({
            status: 'rejected',
            error: 'Error loading images',
          });
        }
      });
  }

  render() {
    const { hits, error, status, totalHits, perPage } = this.state;

    return (
      <div className={containerStyles}>
        <ul className={galleryStyles}>
          {hits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              webformatURL={hit.webformatURL}
              largeImageURL={hit.largeImageURL}
              tags={hit.tags}
            />
          ))}
        </ul>
        {status === 'pending' && <GeneralLoader />}
        {status === 'rejected' && <NotFoundMessage message={error} />}
        {status === 'resolved' && totalHits - hits.length >= perPage && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
