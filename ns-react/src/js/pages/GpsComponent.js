import React from "react";
import axios from "axios";
import "../../css/style.css";
import {Helmet} from 'react-helmet';
import logoPuls from "../../img/logo_puls.png";
import {changeCity} from "./actions";
import { connect } from "react-redux";
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
      link:'/error',
      scanning: '',
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
    if (this.props.language == 'NL'){
        this.setState({scanning: "Zoeken"});
    }
    if (this.props.language == 'ENG'){
        this.setState({scanning: "Scanning"});
    }
    if (this.props.language == 'SP'){
        this.setState({scanning: "exploración"});
    }
    if (this.props.language == 'FR'){
        this.setState({scanning: "balayage"});
    }
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
    const steden = ['Amsterdam','Haarlem','Heemstede','Leiden', 'Den Haag', 'Delft', 'Schiedam', 'Rotterdam','Dordrecht', 'Roosendaal'];
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
        })
        axios.get("https://geocode.xyz/"+ this.state.latitude +","+ this.state.longitude + "?json=1&auth=488507351523553559567x2796")
        .then(res=>{
          this.props.changeCity(res.data.city);
          for (var i = 0; i < steden.length; i++) {
            if (this.props.city == steden[i]) {
              this.setState({
                link:"/offer",
              })
            }
          }
        })
        .catch(error =>{
          console.log(error);
        });

      }, (error) => {
        this.setState({ latitude: 'error-latitude', longitude: 'error-longitude' })
      })
    }
  }
  render() {
    return (
      <div className="gps-container">
        <div className="header">
          <button className="vlaggenMenu">
            <Link to="/Language" className="vlaggenMenu-link"></Link>
          </button>
        </div>
        <div>
          <h3 className="gps-text">{this.state.scanning}...</h3>
          <h3 className="gps-text">{this.props.city}</h3>
        </div>
        <div className="pulse">
          <img
            className="logo_puls"
            src={logoPuls}
            alt="logoPuls"
            height="42"
            width="42"/>
        </div>
        <Link to={this.state.link} className="home-beginBtn--link">Start</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { city: state.city, language: state.language };
};

export default connect(mapStateToProps, {changeCity: changeCity})(GpsComponent);
