import { Component } from 'react';
import NotFoundMessage from './NotFoundMessage';
import LoadMoreBtn from 'components/Button/Button';
import { GeneralLoader } from 'components/Loader/Loader';
import { containerStyles, galleryStyles } from './ImageGalleryStyles';

class ImageGallery extends Component {
  render() {
    const { hits, error, status, totalHits, perPage, handleLoadMore } =
      this.props;

    return (
      <div className={containerStyles}>
        <ul className={galleryStyles}>{hits}</ul>
        {status === 'pending' && <GeneralLoader />}
        {status === 'rejected' && <NotFoundMessage message={error} />}
        {status === 'resolved' && totalHits - hits.length >= perPage && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
