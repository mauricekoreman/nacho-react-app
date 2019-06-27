/*We importeren hier de react gerelateerde onderdelen */
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { connect } from "react-redux";
/*We inporteren hier de css */
import "../../css/style.css";
/*We inporteren hier externe componenten */
import axios from "axios";
/*We importerne hier interne componenten*/
import logoPuls from "../../img/logo_puls.png";
import {changeCity} from "./actions";


class GpsComponent extends React.Component{
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
    //Hier zetten we de scanning tekst om naar de taal die eerder geselecteerd is
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
    //Hier haalt geolocation de locatie van de gebruiker op
    const location = window.navigator && window.navigator.geolocation
    //Deze array wordt gebruikt om naar de error pagina geleid te worden wanneer de stad die gescant word nog niet in de api staat
    const steden = ['Amsterdam','Haarlem','Heemstede','Leiden', 'Den Haag', 'Delft', 'Schiedam', 'Rotterdam','Dordrecht', 'Roosendaal'];
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
        })
        //Deze api zet de coördinaten om naar een stad naam
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
            <Link to="/Language" className="vlaggenMenu-link"></Link>
        </div>
        <h3 className="gps-text gps-text--loading">{this.state.scanning}...</h3>
        <div className="pulse">
          <div className="pulse-animation">
            <img
              className="pulse-animation-logo"
              src={logoPuls}
              alt="logoPuls"
              height="42"
              width="42"/>
          </div>
          <h3 className="gps-text gps-text--city">{this.props.city}</h3>
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
