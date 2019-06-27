/*We inporteren hier de react gerelateerde onderdelen */
import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { connect } from "react-redux";
/*We inporteren hier de css */
import "../../css/style.css";
/*We inporteren hier externe componenten */
import axios from "axios";

export class CityStory extends React.Component{
/*Hier maken we info aan*/
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    }
  }
  componentDidMount(){
    /*Hier halen we city en language op uit de LanguagePage en GpsComponent. Die
     worden in de url geplaatst en stoppen het reseltaat in info. */
    const CITY = this.props.city;
    const LANGUAGE =this.props.language;

    axios.get("http://95.179.178.130/api/" + LANGUAGE + "/" + CITY)
    .then(res=>{
      this.setState({info: res.data[0].info});
    })
  }
  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. vlaggenmenu link die terug verwijst naar LanguagePage en ga terug link
     die verwijst naar de GpsComponent
  3. afbeelding inladen van de stad die uit GpsComponent is gekomen
  4. naam van de stad en de informatie in de goede taal laten zien
  5. knop voor meer informatie wat er te doen is in de stad
  */
  render(){
    return (
      <div className="cityStory--container">
        <Helmet>{/*1*/}
          <style>{'body {background: white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="header">{/*2*/}
            <Link to="/GpsComponent" className="gaTerug-link"></Link>
            <Link to="/Language" className="vlaggenMenu-link"></Link>
        </div>
        <div>{/*3 en 4*/}
          <img className="cityStory-img"src={"../img/steden/" + this.props.city+ "2.jpg"} alt="" />
          <div className="cityStory-text">
            <h2 className="cityStory-title">{this.props.city}</h2>
            <hr/>
            <p className="cityStory-story">{this.state.info}</p>
          </div>
          <button className="cityStory-btn">{/*5*/}
            <Link to="/Sightseeing" className="contact-btn--link">More</Link>
          </button>
        </div>
      </div>
    );
  };
}
/*Dit is redux*/
const mapStateToProps = state => {
  return { city: state.city,language: state.language };
};
export default connect(mapStateToProps) (CityStory);
