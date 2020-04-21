import React from 'react';
import './VillagerList.css';
import VillagerCard from './VillagerCard';

class Home extends React.PureComponent {

  render() {
    return (
      <div className="vl-top">
        <div className="vl-data">
          <VillagerCard />
        </div>
        <div className="vl-bot"></div>
      </div>
    );
  }
}

export default Home;