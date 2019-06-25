import React from "react";
import "../../css/style.css";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import GpsComponent from "./GpsComponent";

export class ErrorPage extends React.Component{

  render(){
    return (
      <div className="error-page--container">
        <Helmet>
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <h1 className="error-page--code">404</h1>
        <h2 className="error-page--code--explanation">Page not found</h2>

        <h3 className="error-page--code--explanation--text">sorry! this city has not yet been added.</h3>

        <Link to="/GpsComponent" className="error-page--btn--link">Scanner</Link>
      </div>
    );
  };
}

export default ErrorPage;
