import React, {Component} from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

export default class About extends Component {
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
      <section className="aboutSection">
        <article className="aboutContent">
        <article className="aboutImageContainer"><img className="aboutImage"  src={require(`../Assets/about.jpg`)}></img></article>
        <article className="aboutTextContainer">
          <div className="aboutQuestion"><h2>Got a question?</h2></div>
          <div className="aboutContact"><h2>Contact us!</h2></div>
          <div className="aboutCallMail">
            <div className="aboutCall">
              <button className="aboutCallButton">
                <a href="tel:123-456-7890">
                  <CallIcon className="callIcon"/>
                </a>
              </button>
            </div>
            <div className="aboutMail"><button className="aboutMailButton"><a href="mailto:EMAILADDRESS"><MailOutlineIcon className="mailIcon"/></a></button></div>
          </div>
          <div>
            <span>Lux-Cars Sp z o. o.</span>
            <span>ul. Luksusowa 28</span>
            <span>43-100 Tychy, Poland</span>
          </div>
        </article>
        </article>
      </section>
    );
  }
}