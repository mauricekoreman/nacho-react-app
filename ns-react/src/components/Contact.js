import React from "react";
import "../style/Contact.css";
import pijl_terug from "../img/arrow_back.png";
import vlaggenMenu from "../img/vlaggenMenu.png";

export class Contact extends React.Component{
  onArrowBackClicked = () => {
    console.log("op terug geklikt");
  };
  onVlaggenMenuClicked = () => {
    console.log("op vlaggenMenu geklikt");
  };
  render(){
    return (
      <div>
      <img
        className="back-btn"
        src={pijl_terug}
        onClick={this.onArrowBackClicked} >
      </img>
      <img
        className="vlaggenMenu"
        src={vlaggenMenu}
        onClick={this.onVlaggenMenuClicked} >
      </img>
        <h1>Contact</h1>
        <div className="url-container">
          <div id="tel">
            <i className="fa fa-mobile"></i>
            <p className="contact-text">030 751 5155</p>
          </div>
          <div id="url">
            <i className="fa fa-globe"></i>
            <p className="contact-text">www.ns.nl</p>
          </div>
          <div id="mail">
            <i className="fa fa-at"></i>
            <p className="contact-text">info@ns.nl</p>
          </div>
          <div id="social">
            <i className="fa fa-twitter"></i>
            <p className="contact-text">@NS_online</p>
          </div>
        </div>
      </div>
    );
  };
}

export default Contact;
