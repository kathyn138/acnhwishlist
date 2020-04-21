import React from 'react';
import './App.css';
import VillagerList from './VillagerList';

class App extends React.PureComponent {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <VillagerList />
        </div>
    </div>
    );
  }
}

export default App;
