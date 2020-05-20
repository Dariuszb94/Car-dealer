import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <div className="menuContainer">
        <ul className="menuList">
          <li><NavLink exact to="/Car-dealer" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/offers" activeClassName="active">Offers</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
        </ul>
      </div>
    );
  }
}