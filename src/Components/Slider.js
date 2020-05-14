import React, {Component} from 'react';
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
          <section><h2>Good prices</h2></section>
          <section><h3>Accident-free cars</h3></section>
          <section><h3>Guaranties</h3></section>
          <section><button className="moreButton">See more</button></section>
        </div>
      </div>
    );
  }
}