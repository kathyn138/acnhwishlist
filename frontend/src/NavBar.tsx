import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.PureComponent {
render() {
    return (
      <nav className="nav nav-pills justify-content-center">
        <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/cranky">Cranky</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/jock">Jock</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/lazy">Lazy</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/normal">Normal</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/peppy">Peppy</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/smug">Smug</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/snooty">Snooty</NavLink>
        <NavLink className="nav-item nav-link" exact to="/villagers/uchi">Uchi</NavLink>
      </nav>
    );
  }
}

export default NavBar;