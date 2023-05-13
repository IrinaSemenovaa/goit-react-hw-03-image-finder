import { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  headerStyles,
  combinedViewStyles,
  buttonStyles,
  inputStyles,
  iconStyles,
  focusedIconStyles,
} from './SearchbarStyles';

class Searchbar extends Component {
  state = {
    searchQuery: '',
    isFocused: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.info('Please enter a search query', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleHitsChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleInputFocus = () => {
    this.setState({ isFocused: true });
  };

  handleInputBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    return (
      <header className={headerStyles}>
        <form onSubmit={this.handleSubmit} className="form">
          <div className={combinedViewStyles}>
            <button type="submit" className={buttonStyles}>
              <RiSearchLine
                className={`${iconStyles} ${
                  this.state.isFocused ? focusedIconStyles : ''
                }`}
                width="2em"
              />
            </button>
            <input
              className={inputStyles}
              type="text"
              autoComplete="off"
              placeholder="Search images and photos"
              onChange={this.handleHitsChange}
              onFocus={this.handleInputFocus} 
              onBlur={this.handleInputBlur} 
              value={this.state.searchQuery}
            />
          </div>
        </form>
      </header>
    );
  }
}

export default Searchbar;
