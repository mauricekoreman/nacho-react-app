import React from "react";
import axios from "axios";
import "../../css/style.css";
import {Helmet} from 'react-helmet';
import logoPuls from "../../img/logo_puls.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class GpsComponent extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
      city:'',
    }

    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()

  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        axios.get("https://geocode.xyz/"+ this.state.latitude +","+ this.state.longitude + "?json=1&auth=708506218534296685130x2493")
        .then(res=>{
          this.setState({city: res.data.city});
          var naam_stad = this.setState({city: res.data.city});
          return naam_stad;
        })
        .catch(error =>{
          console.log(error);
        });

      }, (error) => {
        this.setState({ latitude: 'error-latitude', longitude: 'error-longitude' })
      })
    }
    // return naam_stad;
  }
  render() {
    const { latitude, longitude, city} = this.state
    return (
      <div className="gps-container">
        <div className="gps-header">
          <button className="vlaggenMenu">
            <Link to="/Language" className="vlaggenMenu-link"></Link>
          </button>
        </div>
        <div>
          <h3 className="gps-text">Scanning...</h3>
          <h3 className="gps-text">{city}</h3>
        </div>
        <div className="pulse">
          <img
            className="logo_puls"
            src={logoPuls}
            alt=""
            height="42"
            width="42"/>
        </div>
      </div>
    );
  }
}

export default GpsComponent;
export var naam_stad = naam_stad;
