import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VillagerList from './VillagerList';
import Wishlist from './Wishlist';

class App extends React.PureComponent {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="middle-section col-7">
            <SearchBar />
            <VillagerList />
          </div>
          <div className="col-5">
          <Wishlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
