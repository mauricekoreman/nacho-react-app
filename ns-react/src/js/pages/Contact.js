/*We importeren hier de react gerelateerde onderdelen */
import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
/*We inporteren hier de css */
import "../../css/style.css";


export class Contact extends React.Component {
  /*Hier zorgen we er voor dat wanneer je op de icons of text drukt je naar de
  vervolg stap word gestuurd */
  onMobileClicked = () => {
    window.open('tel:+31307515155');
  };
  onUrlClicked = () => {
    window.location.href = 'http://www.ns.nl';
  };
  onMailClicked = () => {
    window.location.href = "mailto:info@ns.nl";
  };
  onTwitterClicked = () => {
    window.location.href = 'https://twitter.com/ns_online';
  };
  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. vlaggenmenu link die terug verwijst naar LanguagePage
  3. title van de pagina
  4. telefoon, website, mail en twitter functionaliteit ophalen
  */
  render() {
    return (
      <div>
        <Helmet>{/*1*/}
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>

        <div className="header contact-header">{/*2*/}
            <Link to="/Language" className="gaTerug-link"></Link>
          <span className="contact-heading-primary">Contact</span>
        </div>
        {/*3 en 4*/}

        <div className="contact-container">
          <div className="contact-container-tel">
            <i className="fa fa-mobile" onClick={this.onMobileClicked}></i>
            <p className="contact-container-text" onClick={this.onMobileClicked}>030 751 5155</p>
          </div>
          <div className="contact-container-url">
            <i className="fa fa-globe" onClick={this.onUrlClicked}></i>
            <p className="contact-container-text" onClick={this.onUrlClicked}>www.ns.nl</p>
          </div>
          <div className="contact-container-mail">
            <i className="fa fa-at" onClick={this.onMailClicked}></i>
            <p className="contact-container-text" onClick={this.onMailClicked}>info@ns.nl</p>
          </div>
          <div className="contact-container-social">
            <i className="fa fa-twitter" onClick={this.onTwitterClicked}></i>
            <p className="contact-container-text" onClick={this.onTwitterClicked}>@NS_online</p>
          </div>
        </div>
      </div>
    );
  };
}

export default Contact;
