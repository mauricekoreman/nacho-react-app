/* We importeren hier de react gerelateerde onderdelen */
import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
/* We inporteren hier de css */
import "../../css/style.css";

export class StartPage extends React.Component {
  /* Hier maken we info aan */
  constructor() {
    super()
    this.state = {
      zin: '',
      knop: ''
    }
  }
  componentDidMount() {
    /*Hier veranderen we de tekst zodat je de tekst in de juiste taal ziet
    Door middel van de states wordt de taal gekozen die moet worden getoont.*/
    if (this.props.language === 'NL') {
      this.setState({zin: "Welkom in Nederland!"});
      this.setState({knop: "Begin"});
    }
    if (this.props.language === 'ENG') {
      this.setState({zin: "Welcome to the Netherlands!"});
      this.setState({knop: "Get started"});
    }
    if (this.props.language === 'SP') {
      this.setState({zin: "Bienvenidos a Holanda!"});
      this.setState({knop: "Empezar"});
    }
    if (this.props.language === 'FR') {
      this.setState({zin: "Bienvenue aux Pays-Bas!"});
      this.setState({knop: "Commencer"});
    }
  }
  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. vlaggenmenu link die terug verwijst naar LanguagePage
  3. afbeelding inladen van de achtergrond
  4. Welkomsbericht in de goede taal
  5. knop om naar GpsComponent pagina te gaan en met in de knop tekst in de goede taal
  */
  render() {
    return (<div>
      <Helmet>{/*1*/}
        <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
      </Helmet>
      <div className="header"/>{/*2*/}
        <Link to="../Language" className="vlaggenMenu-link"></Link>
      <div className="startPage-img"/>{/*3*/}
    <div className="tekstBlok">{/*4 en 5*/}
        <p className="introductie">{this.state.zin}</p>
        <Link to="/GpsComponent" className="start_knop">{this.state.knop}</Link>
      </div>
    </div>
    );
  };
}
/*Dit is redux*/
const mapStateToProps = state => {
  return {language: state.language};
};
export default connect(mapStateToProps)(StartPage);
