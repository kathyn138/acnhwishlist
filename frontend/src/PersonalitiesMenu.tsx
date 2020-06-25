import React from 'react';
import { MouseEvent } from 'react';
import NavBarLink from './NavBarLink'; 
import './PersonalitiesMenu.css';

type PersonalitiesMenuProps = {
  openPersonalities: boolean,
  handleToggle: (menu: string, toggle: string) => void,
  addPersonality: (personality: string) => void,
  removePersonality: (personality: string) => void,
  handleMenuFilter: (evt: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

type PersonalitiesMenuState = {
  personalities: string[];
}

class PersonalitiesMenu extends React.PureComponent<PersonalitiesMenuProps, PersonalitiesMenuState> {
  constructor(props: PersonalitiesMenuProps) {
    super(props);
    this.state = {
      personalities: ['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Smug',
        'Snooty', 'Uchi'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt: MouseEvent<HTMLButtonElement>) {
    if (!this.props.openPersonalities) {
      this.props.handleToggle('personalities', 'open');
    } else {
      this.props.handleToggle('personalities', 'closed');
    }
  }

  render() {
    let show = this.props.openPersonalities ? 'show' : '';
    return (
      <div className="navbar">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button"
            id="dropdownMenu2" aria-haspopup="true" aria-expanded="false"
            onClick={this.handleClick}>
            Personalities
        </button>

          {/* refactor if possible to keep code dry */}
          <div className={`dropdown-menu ${show} personalities`} aria-labelledby="dropdownMenu2">
            <div className="dropdown-content">
              <div className="row">
                <div className="col-sm-3">
                  {this.state.personalities.slice(0, 2).map(p => <NavBarLink item={p}
                    add={this.props.addPersonality}
                    remove={this.props.removePersonality} />)}
                </div>
                <div className="col-sm-3">
                  {this.state.personalities.slice(2, 4).map(p => <NavBarLink item={p}
                    add={this.props.addPersonality}
                    remove={this.props.removePersonality} />)}
                </div>
                <div className="col-sm-3">
                  {this.state.personalities.slice(4, 6).map(p => <NavBarLink item={p}
                    add={this.props.addPersonality}
                    remove={this.props.removePersonality} />)}
                </div>
                <div className="col-sm-3">
                  <NavBarLink item={this.state.personalities[6]}
                    add={this.props.addPersonality}
                    remove={this.props.removePersonality} />
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary float-right" onClick={this.props.handleMenuFilter}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalitiesMenu;