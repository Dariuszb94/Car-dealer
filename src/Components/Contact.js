import React, {Component} from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SpeedIcon from '@material-ui/icons/Speed';
export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.mailSend = this.mailSend.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleChange() {

  }
  mailSend() {
    alert("Mail was sent. Wait for reply.")
  }

  render() {
    return (
      <div className="sellerContact">
      <h3>Contact</h3>
      <div>


      <form>
<div className="contacts">
<div className="mailContact"><label>Phone number</label>
<input type="text" name="phone" className="phoneInput"></input>
</div>
<div className="mailContact">
<label>Email</label>
<input type="text"  name="mail" ></input>

</div>
</div>
<div className="contactTextArea">
<label className="contactTextAreaLabel">Message text</label>
<textarea  name="subject" placeholder="Write something.." ></textarea>
</div>


</form>

<button className="contactButton" type="submit" value="Submit" onClick={this.mailSend}>Send</button>
      </div>
    </div>
    );
  }
}