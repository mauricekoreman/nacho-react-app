import React from "react";
import "../../css/style.css";
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Helmet} from 'react-helmet';
import Language from '../components/Language';
import { connect } from "react-redux";
import CityStory from '../pages/CityStory';
import {naam_stad} from './GpsComponent';
import GpsComponent from '../pages/GpsComponent';
import stad from "../../img/steden/Leiden1.jpg";


class CityOfferPage extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor() {
    super()
    this.state = {
      image:''
    }
  }

  componentDidMount() {
    const CITY = this.props.city;
  };

render() {
  return (
    <div className="CityOfferPage-container">
      <Helmet>
        <style>{'body { background-color: #FCC63F; background-repeat: no-repeat; font-family: Montserrat}'}</style>
      </Helmet>
      <div>
        <button className="vlaggenMenu">
          <Link to="/Language" className="vlaggenMenu-link"></Link>
        </button>
      </div>
      <div className="CityOfferPage-keuzevlak">
        <img className="CityOfferPage-img"src={stad} alt="" />
        <h1 className="CityOfferPage-text">{this.props.city}</h1>
      </div>
      <div>
        <button className="CityOfferPage-btn-yes">
          <Link className="CityOfferPage-btn-yes-link" to="/CityStory"></Link>
        </button>
        <button className="CityOfferPage-btn-no">
          <Link className="CityOfferPage-btn-no-link" to="/GpsComponent"></Link>
        </button>
      </div>
    </div>

  );
}
}
const mapStateToProps = state => {
  return { city: state.city, language: state.language };
};
export default connect(mapStateToProps) (CityOfferPage);
