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

class CityOfferPage extends React.Component{
  /* we vragen hier de stad op die is gevonden bij de GpsComponent. */
  componentDidMount() {
    const CITY = this.props.city;
  };

  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. vlaggenmenu knop die terug verwijst naar keuzen van taal
  3. afbeelding inladen van de stad die uit GpsComponent is gekomen
  4. naam van stad die uit GpsComponent is gekomen
  5. Yes en No button om voorkeur aan te geven Yes verwijst naar CityStory
     No verwijst naar GpsComponent*/
render() {
  return (
    <div className="CityOfferPage-container">
      <Helmet>/*1.*/
      <style>{'body { background-color: #FCC63F; background-repeat: no-repeat; font-family: Montserrat}'}</style>
      </Helmet>
      <div>/*2.*/
        <button className="vlaggenMenu">
          <Link to="/Language" className="vlaggenMenu-link"></Link>
        </button>
      </div>
      <div className="CityOfferPage-keuzevlak">
        <img className="CityOfferPage-img"src={"../img/steden/" + this.props.city+ "1.jpg"} alt="" />/*3.*/
        <h1 className="CityOfferPage-text">{this.props.city}</h1>/*4*/
      </div>
      <div>/*5.*/
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
/*Dit is redux*/
const mapStateToProps = state => {
  return { city: state.city, language: state.language };
};
export default connect(mapStateToProps) (CityOfferPage);
