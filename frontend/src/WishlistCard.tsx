import React from 'react';
import './WishlistCard.css';

type WishlistCardProps = {
  villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  },
  removeFromWishlist: (villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) => void,
}
class WishlistCard extends React.PureComponent<WishlistCardProps> {
  async handleRemove(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    await this.props.removeFromWishlist(this.props.villager);
  }

  render() {
    let { name, image } = this.props.villager;
    return (
      <div className="wishlist-card my-auto">
        <div className="row no-gutters">
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <img src={image} className="wishlist-card-img" alt={`${name}`} />
          </div>
          <div className="col-lg-7 my-auto">
            <div className="card-body text-center">
              {name}
            </div>
          </div>
          <div className="col-lg-1 my-auto">
            <span className="heart-btn">
              <i className="fas fa-heart filled-in-heart"
                onClick={() => this.handleRemove(this.props.villager)}></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default WishlistCard;