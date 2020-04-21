import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VillagerList from './VillagerList';

class App extends React.PureComponent {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="middle-section col-7">
            <SearchBar />
            <VillagerList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
