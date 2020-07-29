import React from 'react';
import { MouseEvent } from 'react';
import NavBarLink from '../NavBarLink';
import './SpeciesMenu.css';


type SpeciesMenuProps = {
  openSpecies: boolean,
  handleToggle: (menu: string, toggle: string) => void,
  addSpecies: (species: string) => void,
  removeSpecies: (species: string) => void,
  handleMenuFilter: (evt: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

type SpeciesMenuState = {
  species: string[];
}

class SpeciesMenu extends React.PureComponent<SpeciesMenuProps, SpeciesMenuState> {
  constructor(props: SpeciesMenuProps) {
    super(props);
    this.state = {
      species: ['Alligator', 'Anteater', 'Bear', 'Bird', 'Bull', 'Cat',
        'Chicken', 'Cow', 'Cub', 'Deer', 'Dog', 'Duck',
        'Eagle', 'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster',
        'Hippo', 'Horse', 'Kangaroo', 'Koala', 'Lion', 'Mouse',
        'Monkey', 'Octopus', 'Ostrich', 'Penguin', 'Pig', 'Rabbit',
        'Rhino', 'Sheep', 'Squirrel', 'Tiger', 'Wolf']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(evt: MouseEvent<HTMLButtonElement>) {
    if (!this.props.openSpecies) {
      this.props.handleToggle('species', 'open');
    } else {
      this.props.handleToggle('species', 'closed');
    }
  }

  handleSubmit(evt: React.FormEvent<HTMLButtonElement>) {
    this.props.handleMenuFilter(evt);

    if (!this.props.openSpecies) {
      this.props.handleToggle('species', 'open');
    } else {
      this.props.handleToggle('species', 'closed');
    }
  }

  render() {
    let show = this.props.openSpecies ? 'show' : '';

    return (
      <div className="navbar">
        <div className="dropdown mx-auto">
          <button className="btn dropdown-s-menu-btn dropdown-toggle" type="button"
            aria-haspopup="true" aria-expanded="false"
            onClick={this.handleClick}>
            Species
          </button>

          <div className={`dropdown-menu ${show} species`} aria-labelledby="species">
            <div className="dropdown-content">
              <div className="row">
                <div className="col">
                  {this.state.species.map(s => <NavBarLink 
                    key={s}
                    item={s}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
              </div>
            </div>

            <button type="button" className="btn float-right 
            submit-species-btn" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SpeciesMenu;