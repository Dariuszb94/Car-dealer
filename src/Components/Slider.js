import React, {Component} from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
export default class Slider extends Component {
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
      <div className="slider">
        <div className="sliderContainer">
          <section>
            <article>
              <h2>Good prices</h2>
            </article>
            <article>
              <h3>Accident-free cars</h3>
            </article>
            <article>
              <h3>Guaranties</h3>
            </article>
          </section>
          <section className="slideButton">
            <article><NavLink to="/offers" activeClassName="active"><button className="moreButton">See more</button></NavLink></article>
          </section>
        </div>
      </div>
    );
  }
}