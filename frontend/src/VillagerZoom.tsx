import React from 'react';
import { MouseEvent } from 'react';
import './VillagerZoom.css';


type VillagerZoomProps = {
  openSpecies: boolean,
  handleToggle: (menu: string, toggle: string) => void,
  addSpecies: (species: string) => void,
  removeSpecies: (species: string) => void,
  handleMenuFilter: (evt: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

type VillagerZoomState = {
  species: string[];
}

class VillagerZoom extends React.PureComponent<{}> {
  constructor(props: {}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt: MouseEvent<HTMLButtonElement>) {

  }

  render() {
    return (
      <React.Fragment>
        <div className="modal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VillagerZoom;