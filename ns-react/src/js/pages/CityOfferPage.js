import React from "react";
import "../../css/style.css";
import "../../sass/CityOfferPage.scss";
import axios from "axios";
import SwipeableViews from 'react-swipeable-views';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Helmet} from 'react-helmet';
import Language from '../components/Language';
import GpsComponent from './GpsComponent';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 150,
    borderRadius: 25,
    color: '#212B5C',
  },
  slide1: {
    backgroundColor: '#fff',
    // paddingLeft: 100,
  },
  slide2: {
    backgroundColor: '#fff',
    // paddingLeft: 100,
  },
  text: {
    paddingTop: 10,
    paddingBottom:-10,
    fontSize: 30,
  }
  // slide3: {
  //   backgroundColor: '#fff',
  // },
};

class CityOfferPage extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor() {
    super()
    this.state = {
      image:''
    }

  }

  componentDidMount() {
  //   const BASE_URL = "http://95.179.178.130/api/";
  //   // Sightseeing
  //   axios.all([
  //     axios.get(BASE_URL+CITY),
  //     console.log(BASE_URL+CITY)
  //   ])
  //   .then(axios.spread((activityRes) => {
  //     this.setState({
  //       name: activityRes.data.stad
  //       // image: activityRes.merk_naam
  //     });
  //   }));
  };


render() {
// const CityOfferPage = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #FCC63F; background-repeat: no-repeat; font-family: Montserrat}'}</style>
      </Helmet>
      <div>
        <button className="vlaggenMenu">
          <Link to="/Language" className="vlaggenMenu-link"></Link>
        </button>
      </div>

      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <img className="city" src="../img/Leiden.jpg" alt="" />
          <h1 style={Object.assign({}, styles.text)}>{this.state.name}</h1>
          </div>

        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <img className="city" src="../img/Amsterdam.jpg" alt="" />
          <h1 style={Object.assign({}, styles.text)}>{this.state.name}</h1>
        </div>
      </SwipeableViews>
    </div>

  );
}
}
export default CityOfferPage;
