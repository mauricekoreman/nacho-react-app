import React from "react";
import "../css/style.css";
import vlaggenMenu from "../img/vlaggenMenu.png";
import {Helmet} from 'react-helmet';
import Language from './Language';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

export class Contact extends React.Component {
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

  render() {
    return (
      <div>
        <Helmet>
          <style>
            {'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>

        <div>
        <button className="vlaggenMenu">
            <Link to="/Language" className="vlaggenMenu-link"></Link>
          </button>
        </div>

        <h1 className="contact-heading-primary">Contact</h1>
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
        <Switch>
          <Route path="/language" exact="exact" component={Language}/>
        </Switch>

    </div>
  );
  };
}

export default Contact;
