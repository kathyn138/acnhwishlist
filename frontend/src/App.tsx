import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VillagerList from './VillagerList';
import Wishlist from './Wishlist';
import wishlistApi from './wishlistApi';

type appState = {
  villagers: {
    id: string, 
    name: string, 
    image: string, 
    personality: string
  }[], 
  wishlist: {
    id: string, 
    name: string, 
    image: string, 
    personality: string
  }[];
}
class App extends React.PureComponent<{}, appState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      villagers: [],
      wishlist: []
    };
    this.searchVillagers = this.searchVillagers.bind(this);
  }

  async searchVillagers(query: string) {
    let result = await wishlistApi.searchVillagers(query);
    this.setState({ villagers: result });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="middle-section col-7">
            <SearchBar search={this.searchVillagers} />
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
