import React, {Component} from 'react';
import Search from './Search';
import {NavLink} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <section className="title">
          <NavLink exact to="/Car-dealer" activeClassName="active">
            <h1>Lux-cars</h1>
          </NavLink>
        </section>
        <Search/>
      </div>
    );
  }
}