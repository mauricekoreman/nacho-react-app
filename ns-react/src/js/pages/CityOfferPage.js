/*We inporteren hier de react gerelateerde onderdelen */
import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { connect } from "react-redux";
/*We inporteren hier de css */
import "../../css/style.css";
/*We inporteren hier externe componenten */
import axios from "axios";

/* Dit is de opbouw van de pagina
1. achtergrond kleur
2. vlaggenmenu knop die terug verwijst naar keuzen van taal
3. afbeelding inladen van de stad die uit GpsComponent is gekomen
4. naam van stad die uit GpsComponent is gekomen
5. Yes en No link om voorkeur aan te geven Yes verwijst naar CityStory
   No verwijst naar GpsComponent*/
const CityOfferPage = (props) =>{
  return (
    <div className="CityOfferPage-container">
      <Helmet>{/*1*/}
        <style>{'body { background-color: #FCC63F; background-repeat: no-repeat; font-family: Montserrat}'}</style>
      </Helmet>
      <div>{/*2*/}
        <Link to="/Language" className="vlaggenMenu-link"></Link>
      </div>{/*3 en 4*/}
      <div className="CityOfferPage-keuzevlak">
        <img className="CityOfferPage-img"src={"../img/steden/" + props.city+ "1.jpg"} alt="" />
        <h1 className="CityOfferPage-text">{props.city}</h1>
      </div>
      <div>{/*5*/}
          <Link className="CityOfferPage-btn-yes-link" to="/CityStory"></Link>
          <Link className="CityOfferPage-btn-no-link" to="/GpsComponent"></Link>
      </div>
    </div>
  );
};
/*Dit is redux*/
const mapStateToProps = state => {
  return { city: state.city, language: state.language };
};
export default connect(mapStateToProps) (CityOfferPage);
