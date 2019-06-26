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
import stad from "../../img/steden/Leiden2.jpg";

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

    axios.get("https://nssightseeingapi.tk/api/" + LANGUAGE + "/" + CITY)
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
          <img className="CityStory-img"src={stad} alt="" />
          <h2 className="CityStory-title">{this.props.city}</h2>
          <p className="CityStory-text">{this.state.info}</p>
        </div>
        <div>
          <button className="CityStory-btn">
            <Link to="/Sightseeing" className="contact-btn--link">More</Link>
          </button>
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => {
  return { city: state.city,language: state.language };
};
export default connect(mapStateToProps) (CityStory);
