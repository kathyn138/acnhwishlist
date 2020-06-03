import React from 'react';
import { MouseEvent } from 'react';
import NavBarLink from './NavBarLink'


type SpeciesMenuProps = {
  openSpecies: boolean,
  handleToggle: (menu: string, toggle: string) => void,
  addSpecies: (species: string) => void,
  removeSpecies: (species: string) => void
}

type SpeciesMenuState = {
  species: string[],
  menu: string
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
        'Rhino', 'Sheep', 'Squirrel', 'Tiger', 'Wolf'],
      menu: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt: MouseEvent<HTMLButtonElement>) {
    if (this.state.menu === '') {
      this.setState({ menu: 'show' });
      this.props.handleToggle('species', 'open');
    } else {
      this.setState({ menu: '' });
      this.props.handleToggle('species', 'closed');
    }
  }

  render() {
    let show = this.props.openSpecies ? 'show' : '';

    return (
      <div className="navbar">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button"
            id="dropdownMenu2" aria-haspopup="true" aria-expanded="false"
            onClick={this.handleClick}>
            Species
          </button>

          {/* refactor if possible to keep code dry */}
          <div className={`dropdown-menu ${show} species`} aria-labelledby="dropdownMenu2">
            <div className="dropdown-content">
              <div className="row">
                <div className="col">
                  {this.state.species.slice(0, 5).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
                <div className="col">
                  {this.state.species.slice(5, 10).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
                <div className="col">
                  {this.state.species.slice(10, 15).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
                <div className="col">
                  {this.state.species.slice(15, 20).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
                <div className="col">
                  {this.state.species.slice(20, 25).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
                <div className="col">
                  {this.state.species.slice(25, 30).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
                <div className="col">
                  {this.state.species.slice(30, 35).map(p => <NavBarLink item={p}
                    add={this.props.addSpecies}
                    remove={this.props.removeSpecies} />)}
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary" >Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SpeciesMenu;