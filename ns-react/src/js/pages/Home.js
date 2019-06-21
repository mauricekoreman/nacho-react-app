import React from "react";
import "../../css/style.css";
import logoNS from "../../img/logo.png";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import LanguagePage from "./LanguagePage";

export class Home extends React.Component {

  render(){
    return(
      <div className="page1">
        <Helmet>
          <style>{'body { background-color: #fcc63f; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="home-container">
          <img
          id="logo"
          src={logoNS}>
          </img>
          <h1 className="home-heading"alt="logo">NS Sightseeing</h1>

            <Link to="/language" className="home-beginBtn--link">Start</Link>
          
        </div>
      </div>
    );
  }
}

export default Home;
