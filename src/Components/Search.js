import React, {Component} from 'react';
import SearchIcon from '@material-ui/icons/Search';
export default class Search extends Component {
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
      <div className="searchContainer">
        <section>
          <input className="searchInput"
            type="text"
            placeholder="Search"
          />
        </section>
        <section>
          <button className="searchButton"><SearchIcon fontSize="small" /></button>
        </section>
      </div>
    );
  }
}