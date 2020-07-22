import React from 'react';
import './VillagerCard.css';
import VillagerZoom from './VillagerZoom';

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
    this.setState({ zoomIntoImage: true });
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
        {/* {this.state.zoomIntoImage ? <VillagerZoom /> : ''} */}

        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
      </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-auto">
          <div className="row no-gutters">
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
              <img src={image} className="card-img" alt={`${name}`} data-toggle="modal" data-target="#exampleModal" />
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