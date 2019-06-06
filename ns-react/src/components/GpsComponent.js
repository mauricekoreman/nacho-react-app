import React from "react";
import axios from "axios";
import "../style/GpsComponent.css";
import {Helmet} from 'react-helmet';
import logoPuls from "../img/logo_puls.png";

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
    const { latitude, longitude, city} = this.state
    return (
      <div className="gps-container">
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
          <h3 className="gps-text gps-text--heading">
           Scanning...
          </h3>
          <h3 className="gps-text gps-text--city">{city}</h3>
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
