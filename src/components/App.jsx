import { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class App extends Component {
  state = {
    hits: [],
    error: null,
    status: 'idle',
    page: 1,
    perPage: 12,
    totalHits: 0,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: 'pending', error: null, page: 1, hits: [] });
      this.fetchImages();
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

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
    const { searchQuery, page, perPage } = this.state;

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
    const { hits, error, status, totalHits, perPage, searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          hits={hits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              webformatURL={hit.webformatURL}
              largeImageURL={hit.largeImageURL}
              tags={hit.tags}
            />
          ))}
          error={error}
          status={status}
          totalHits={totalHits}
          perPage={perPage}
          handleLoadMore={this.handleLoadMore}
          searchQuery={searchQuery}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
