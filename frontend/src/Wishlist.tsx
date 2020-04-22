import React from 'react';
import './Wishlist.css';
import WishlistCard from './WishlistCard';

class Wishlist extends React.PureComponent {

  render() {
    return (
      <div className="wl-top">
        <div className="wl-data">
          <WishlistCard />
        </div>
        <div className="wl-bot"></div>
      </div>
    );
  }
}

export default Wishlist;