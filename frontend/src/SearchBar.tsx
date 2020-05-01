import React from 'react';
import './SearchBar.css';
import wishlistApi from './wishlistApi';

type SearchBarProps = {
  search: (query: string) => void;
};

type SearchBarState = {
  query: string;
};

class SearchBar extends React.PureComponent<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [evt.target.name]: evt.target.value
    } as SearchBarState);
  }

  handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    this.props.search(this.state.query);
  }

  render() {
    return (
      <form className="form-inline my-5" onSubmit={this.handleSubmit}>
        <input className="form-control col-7" id="search-input" type="search" placeholder="Search for your favorite villager!"
          aria-label="Search" name="query" value={this.state.query} onChange={this.handleChange}
         />
      </form>
    );
  }
}

export default SearchBar;