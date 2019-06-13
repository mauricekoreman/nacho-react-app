import React from "react";
import "../css/style.css";
import logoNS from "../img/logo.jpg";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import LanguagePage from "../components/LanguagePage";

export class Home extends React.Component {

  render(){
    return(
      <div class="page1">
        <Helmet>
          <style>{'body { background-color: #fcc63f; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <h1 className="home-heading"alt="logo">NS Sightseeing</h1>
        <img
          id="logo"
          src={logoNS}>
        </img>
        <p>
          <Link to="/language">Click here to begin</Link>
        </p>
      </div>
    );
  }
}

export default Home;
