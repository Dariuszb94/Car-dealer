import React, {Component} from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SpeedIcon from '@material-ui/icons/Speed';
export default class Why extends Component {
  render() {
    return (
      <div className="whySection">
        <section>
          <article><LocalGasStationIcon className="whyIcon"> </LocalGasStationIcon></article>
          <article className="whyText">Good fuel economy</article>
        </section>
        <section>
          <article><AirportShuttleIcon className="whyIcon"> </AirportShuttleIcon></article>
          <article className="whyText">Spaceous</article>
        </section>
        <section>
          <article><SpeedIcon className="whyIcon"></SpeedIcon></article>
          <article className="whyText">Speed and power</article>
        </section>
      </div>
    );
  }
}