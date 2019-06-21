import React from "react";
import "../../css/style.css";
import "../../sass/CityOfferPage.scss";
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Helmet} from 'react-helmet';
import Language from '../components/Language';
import CityStory from '../pages/CityStory';
import {naam_stad} from './GpsComponent';
import GpsComponent from '../pages/GpsComponent';

class CityOfferPage extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor() {
    super()
    this.state = {
      image:''
    }
  }

  componentDidMount() {
  //   const BASE_URL = "http://95.179.178.130/api/";
  //   // Sightseeing
  //   axios.all([
  //     axios.get(BASE_URL+CITY),
  //     console.log(BASE_URL+CITY)
  //   ])
  //   .then(axios.spread((activityRes) => {
  //     this.setState({
  //       name: activityRes.data.stad
  //       // image: activityRes.merk_naam
  //     });
  //   }));
  };

render() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #FCC63F; background-repeat: no-repeat; font-family: Montserrat}'}</style>
      </Helmet>
      <div>
        <button className="vlaggenMenu">
          <Link to="/Language" className="vlaggenMenu-link"></Link>
        </button>
      </div>
      <div className="CityOfferPage-keuzevlak">
        <img className="CityOfferPage-img"src="../img/Leiden.jpg" alt="" />
        <h1 className="CityOfferPage-text">{this.state.name}</h1>
      </div>
      <div>
        <button className="CityOfferPage-btn-no">
          <Link className="CityOfferPage-btn-no-link" to="/GpsComponent"></Link>
        </button>
        <button className="CityOfferPage-btn-yes">
          <Link className="CityOfferPage-btn-yes-link" to="/CityStory"></Link>
        </button>
      </div>
    </div>

  );
}
}
export default CityOfferPage;
