import React from 'react';
import './VillagerCard.css';
import VillagerModal from '../VillagerModal';

type VillagerCardProps = {
  villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  },
  wishlist: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[],
  addToWishlist: (villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) => void,
  removeFromWishlist: (villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) => void,
}

type VillagerCardState = {
  zoomIntoImage: boolean;
}

class VillagerCard extends React.PureComponent<VillagerCardProps, VillagerCardState> {
  constructor(props: VillagerCardProps) {
    super(props);
    this.state = {
      zoomIntoImage: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  async handleAdd(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    await this.props.addToWishlist(this.props.villager);
  }

  async handleRemove(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    await this.props.removeFromWishlist(this.props.villager);
  }

  handleImageClick() {
    this.setState({ zoomIntoImage: !this.state.zoomIntoImage });
  }

  render() {
    let { name, image } = this.props.villager;

    let onWishlist = false;

    if (this.props.wishlist.filter(villager => villager.name === name).length === 1) {
      onWishlist = true;
    } else {
      onWishlist = false;
    }

    let heart = onWishlist ? <i className="fas fa-heart filled-in-heart"
      onClick={() => this.handleRemove(this.props.villager)}
    ></i>
      : <i className="far fa-heart"
        onClick={() => this.handleAdd(this.props.villager)}
      ></i>;

    return (
      <React.Fragment>
        {this.state.zoomIntoImage ? <VillagerModal 
        cardToggle={this.handleImageClick} image={image} /> : ''}

        <div className="card my-auto">
          <div className="row no-gutters">
            <div className="col-lg-2 d-flex align-items-center 
              justify-content-center">
              <img src={image} className="card-img" alt={`${name}`} 
                onClick={this.handleImageClick} />
            </div>
            <div className="col-lg-8 my-auto">
              <div className="card-body text-center">
                {name}
              </div>
            </div>
            <div className="col-lg-2 my-auto">
              <span className="heart-btn">
                {heart}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VillagerCard;