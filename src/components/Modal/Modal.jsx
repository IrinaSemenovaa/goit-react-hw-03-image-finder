import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LoaderImg } from 'components/Loader/Loader';
import {
  ModalBackdropStyles,
  ModalContentStyles,
  ModalImageStyles,
} from './ModalStyles';

// class Modal extends Component {
//   state = {
//     isLoader: true,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   handleImageLoad = () => {
//     this.setState({ isLoader: false });
//   };

//   render() {
//     const { isLoader } = this.state;
//     const { largeImageURL } = this.props;

//     return ReactDOM.createPortal(
//       <div
//         className={ModalBackdropStyles}
//         onClick={event => {
//           this.handleBackdropClick(event);
//           this.handleKeyDown(event);
//         }}
//       >
//         {isLoader ? (
//           <LoaderImg />
//         ) : (
//           <div className={ModalContentStyles}>
//             <img
//               src={largeImageURL}
//               alt="img"
//               className={ModalImageStyles}
//               onLoad={this.handleImageLoad}
//             />
//           </div>
//         )}
//       </div>,
//       document.getElementById('root')
//     );
//   }
// }

// export default Modal;



// ---------------------------------temporary solution
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageLoading: true,
      useLoader: true,
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.loadImage();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
    console.log('click');
  };

  loadImage = () => {
    const image = new Image();
    image.onload = this.handleImageLoad;
    image.onerror = this.handleImageError;
    image.src = this.props.largeImageURL;
  };

  handleImageLoad = () => {
    this.setState({ isImageLoading: false });
  };

  handleImageError = () => {
    this.setState({ useLoader: false });
  };

  render() {
    const { isImageLoading, useLoader } = this.state;
    const { largeImageURL } = this.props;

    return ReactDOM.createPortal(
      <div className={ModalBackdropStyles} onClick={this.handleBackdropClick}>
        <div className={ModalContentStyles}>
          {useLoader && isImageLoading && <LoaderImg />}
          {!isImageLoading && (
            <img
              ref={this.imageRef}
              src={largeImageURL}
              alt="img"
              className={ModalImageStyles}
            />
          )}
        </div>
      </div>,
      document.getElementById('root')
    );
  }
}

export default Modal;
