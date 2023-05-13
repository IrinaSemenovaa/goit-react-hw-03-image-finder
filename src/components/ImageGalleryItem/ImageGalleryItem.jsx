import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { itemStyles, imageStyles } from './ImageGalleryItemStyles';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props;
    const { isOpen } = this.state;

    return (
      <li className={itemStyles}>
        <a href={largeImageURL} onClick={this.openModal}>
          <img className={imageStyles} src={webformatURL} alt={tags} />
        </a>
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.closeModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
