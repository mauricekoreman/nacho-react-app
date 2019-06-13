import React from "react";
import "../css/style.css";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./Home";

export class ErrorPage extends React.Component{

  render(){
    return (
      <div className="error-page--container">
        <Helmet>
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <h1 className="error-page--code">404</h1>
        <h2 className="error-page--code-explanation">Page not found</h2>
          <button className="error-page--btn"><Link to="/Home" className="error-page-btn--link">Homepage</Link></button>
      </div>
    );
  };
}

export default ErrorPage;
