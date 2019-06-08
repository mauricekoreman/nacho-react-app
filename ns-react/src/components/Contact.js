import React from "react";
import "../css/style.css";
import vlaggenMenu from "../img/vlaggenMenu.png";
import {Helmet} from 'react-helmet';
import Language from "./Language";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export class Contact extends React.Component{
  render() {
    return (
    <div>
      <Helmet>
        <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
      </Helmet>
      <div>
        <button className="vlaggenMenu-btn">
        <Link to="/Language" className="vlaggenMenu">Links</Link></button>
      </div>
      <h1>Contact</h1>
      <div className="contact-container">

        <div className="contact-container-tel">
          <i className="fa fa-mobile"></i>
          <p className="contact-container-text">030 751 5155</p>
        </div>
        <div className="contact-container-url">
          <i className="fa fa-globe"></i>
          <p className="contact-container-text">www.ns.nl</p>
        </div>
        <div className="contact-container-mail">
          <i className="fa fa-at"></i>
          <p className="contact-container-text">info@ns.nl</p>
        </div>
        <div className="contact-container-social">
          <i className="fa fa-twitter"></i>
          <p className="contact-container-text">@NS_online</p>
        </div>
      </div>
    </div>);
  };
}

export default Contact;
