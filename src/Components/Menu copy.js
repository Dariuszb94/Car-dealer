import React, {Component} from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleChange() {

  }

  render() {
    return (
      <div className="menuContainer">
        <ul className="menuList">
          <li><NavLink exact to="/Car-dealer" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/offers" activeClassName="active">Offers</NavLink></li>
          <li><a href="/#">About us</a></li>
        </ul>
      </div>
    );
  }
}