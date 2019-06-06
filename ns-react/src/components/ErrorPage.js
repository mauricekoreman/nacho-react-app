import React from "react";
import "../css/style.css";
import {Helmet} from 'react-helmet';
export class ErrorPage extends React.Component{

  toHomePage = () => {
    console.log("Er is geklikt");
  }

  render(){
    return (
      <div className="error-page--container">
        <Helmet>
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <h1 className="error-page--code">404</h1>
        <h2 className="error-page--code-explanation">Page not found</h2>
          <button className="error-page--btn" onClick={this.toHomePage}>Homepage</button>
      </div>
    );
  };
}

export default ErrorPage;
