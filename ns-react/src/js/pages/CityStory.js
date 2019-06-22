import React from "react";
import "../../css/style.css";
import {Helmet} from 'react-helmet';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import stad from "../../img/Leiden2.jpg";

export class CityStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    }
  }
  componentDidMount(){
    axios.get("http://95.179.178.130/api/SP/Leiden")
    .then(res=>{
      console.log(res);
      this.setState({info: res.data[0].info});

    })
  }
  render(){
    return (
      <div className="CityStory--container">
        <Helmet>
          <style>{'body {background: white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div>
          <img className="CityStory-img"src={stad} alt="" />
          <h2>NAAM</h2>
          <p className="CityStory-text">{this.state.info}</p>
        </div>
        <div>
          <button className="contact-btn">
            <Link to="/Sightseeing" className="contact-btn--link">More</Link>
          </button>
        </div>
      </div>
    );
  };
}

export default CityStory;
