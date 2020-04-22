import React from 'react';
import './SearchBar.css';

class SearchBar extends React.PureComponent {

  render() {
    return (
      <form className="form-inline my-5">
        <input className="form-control col-7" id="search-input" type="search" placeholder="Search"
          aria-label="Search" name="search" 
         />
      </form>
    );
  }
}

export default SearchBar;