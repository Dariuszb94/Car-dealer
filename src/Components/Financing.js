import React, {Component} from 'react';
import BuildIcon from '@material-ui/icons/Build';
export default class Financing extends Component {
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
      <div className="financingContainer">
        <section className="credits">Free service</section>
        <section className="percent"><BuildIcon/></section>
      </div>
    );
  }
}