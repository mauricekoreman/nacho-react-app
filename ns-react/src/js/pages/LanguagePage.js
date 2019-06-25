import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Language from "../components/Language";
import "../../css/style.css";
import Contact from "./Contact"
import vlagNL from "../../img/NL.png";
import vlagUK from "../../img/UK.png";
import vlagSP from "../../img/SP.png";
import vlagFK from "../../img/FK.png";
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {changeLanguage} from "./actions";

export class LanguagePage extends React.Component {

//hier word geregiestreerd welke taal voorkeur heeft en er word door gegaan naar de volgende pagina
  cardNLClicked = () => {
    this.props.changeLanguage("NL");
    this.props.history.push('/startpage');
  };
  cardENClicked = () => {
    this.props.changeLanguage("ENG");
    this.props.history.push('/startpage');
  };
  cardSPClicked = () => {
    this.props.changeLanguage("SP");
    this.props.history.push('/startpage');
  };
  cardFRClicked = () => {
    this.props.changeLanguage("FR");
    this.props.history.push('/startpage');
  };

  render() {
    return (<div>
      <Helmet>
        <style>
          {
            'body { background-color: white; background-repeat: no-repeat;}'
          }</style>
      </Helmet>
      <h3 className="language-title">Pick your language</h3>
      <div className="grid-container">
        <div className="grid-item">
          <Language id="Nederlands" cardClicked={this.cardNLClicked} background={vlagNL}/>
        </div>
        <div className="grid-item">
          <Language id="Engels" cardClicked={this.cardENClicked} background={vlagUK}/>
        </div>
        <div className="grid-item">
          <Language id="Spaans" cardClicked={this.cardSPClicked} background={vlagSP}/>
        </div>
        <div className="grid-item">
          <Language id="Frans" cardClicked={this.cardFRClicked} background={vlagFK}/>
        </div>
      </div>
      <div>
        <button className="contact-btn">
          <Link to="/Contact" className="contact-btn--link">Contact</Link>
        </button>
      </div>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {language: state.language};
};

export default connect(mapStateToProps, {changeLanguage: changeLanguage})(LanguagePage);
