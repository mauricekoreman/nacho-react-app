import React from "react";
import "../../css/style.css";
import {Helmet} from 'react-helmet';
import { connect } from "react-redux";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export class CityStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    }
  }
  componentDidMount(){
    const CITY = this.props.city;
    const LANGUAGE =this.props.language;

    axios.get("http://95.179.178.130/api/" + LANGUAGE + "/" + CITY)
    .then(res=>{
      this.setState({info: res.data[0].info});
    })
  }
  render(){
    return (
      <div className="CityStory--container">
        <Helmet>
          <style>{'body {background: white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="header">
          <button className="gaTerug">
            <Link to="/GpsComponent" className="gaTerug-link"></Link>
          </button>
          <button className="vlaggenMenu">
            <Link to="/Language" className="vlaggenMenu-link"></Link>
          </button>
        </div>


        <div>
<<<<<<< HEAD
          <img className="cityStory-img"src={"../img/steden/" + this.props.city+ "2.jpg"} alt="" />
          <div className="cityStory-text">
            <h2 className="cityStory-title">{this.props.city}</h2>
            <hr />
            <p className="cityStory-story">{this.state.info}</p>
          </div>
          
         
        <button className="cityStory-btn">
          <Link to="/Sightseeing" className="contact-btn--link">More</Link>
        </button>
=======
          <img className="CityStory-img"src={stad} alt="" />
          <h2 className="CityStory-title">{this.props.city}</h2>
          <p className="CityStory-text">{this.state.info}</p>
        </div>
        <div>
          <button className="CityStory-btn">
            <Link to="/Sightseeing" className="contact-btn--link">More</Link>
          </button>
        </div>
>>>>>>> parent of 7f515e3... citystory: zijkanten een beetje meer ademruimte geven, tussen leiden stad en tekst een leuk lijntje
      </div>
    );
  };
}
const mapStateToProps = state => {
  return { city: state.city,language: state.language };
};
export default connect(mapStateToProps) (CityStory);
