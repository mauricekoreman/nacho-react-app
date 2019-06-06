import React from "react";
import "../style/App.css";
import "../style/Home.css";
import logoNS from "../img/logo.jpg";

export class Home extends React.Component {

  render(){
    return(
      <div className="home-container">
        <div className="home-container-page--1">
          <h1 id="ns-sightseeing" alt="logo">NS Sightseeing</h1>
          <img
            id="logo"
            src={logoNS}>
          </img>
        </div>
      </div>
    );
  }
}

export default Home;
