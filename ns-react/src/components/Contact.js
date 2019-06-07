import React from "react";
import "../css/style.css";
import vlaggenMenu from "../img/vlaggenMenu.png";
import {Helmet} from 'react-helmet';

export class Contact extends React.Component{
  onArrowBackClicked = () => {
    console.log("op terug geklikt");
  };
  onVlaggenMenuClicked = () => {
    console.log("op vlaggenMenu geklikt");
  };
 
  render() {
    return (<div>
      <Helmet>
        <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
      </Helmet>
      <img className="vlaggenMenu" src={vlaggenMenu} onClick={this.onVlaggenMenuClicked}></img>
      <h1 className="contact-heading-primary">Contact</h1>
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
