/*We inporteren hier de react gerelateerde onderdelen */
import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
/*We inporteren hier de css */
import "../../css/style.css";
/*We inporteren hier interne componenten */
import {changeLanguage} from "./actions";
import Language from "../components/Language";
import vlagNL from "../../img/NL.png";
import vlagUK from "../../img/UK.png";
import vlagSP from "../../img/SP.png";
import vlagFK from "../../img/FK.png";

export class LanguagePage extends React.Component {
/*hier word geregiestreerd welke taal voorkeur heeft en er word door gegaan naar
 de volgende pagina*/
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
  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. title van de pagina
  3. per taal een andere achtergrond als je er op klik word dat opgeslagen hier
    boven
  4. knop die je doorstuurt naar contacten*/
  render() {
    return (
      <div>
        <Helmet>{/*1*/}
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        {/*2*/}
        <div className="language-container">
          <div className="language-content">
            <h3 className="language-title">Pick your language</h3>
            <div className="grid-container">{/*3*/}
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
          </div>

          <div>{/*4*/}
            <button className="contact-btn">
              <Link to="/Contact" className="contact-btn--link">Contact</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
/*Dit is redux*/
const mapStateToProps = state => {
  return {language: state.language};
};
export default connect(mapStateToProps, {changeLanguage: changeLanguage})(LanguagePage);
