import React from "react";
import axios from "axios";
import {Helmet} from 'react-helmet';
import SightseeingComponent from '../components/SightseeingComponent';
import RestaurantComponent from '../components/RestaurantComponent';
import {changeCity} from "./actions";
import { connect } from "react-redux";
import "../../css/style.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

export class SightSeeingPage extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }

  componentDidMount() {
    const BASE_URL = "https://www.triposo.com/api/20181213/";
    const CATEGORIE_LOCATION = "location.json?";
    const CATEGORIE_POI = "poi.json?";
    const TAG_LABELS = "&tag_labels=";
    const LOCATION = "location_id=";

    const ACCOUNT = "&account=P8TOBP16";
    const API_TOKEN = "&token=v56oi7tj6zdoweync49h0h3vyddtd13x";
    const CITY = this.props.city;
    // Sightseeing
    axios.all([
      axios.get(BASE_URL + CATEGORIE_POI + LOCATION + CITY + "&order_by=-score&fields=name,score,images,snippet&count=1" + ACCOUNT + API_TOKEN),
      axios.get(BASE_URL + CATEGORIE_POI + LOCATION + CITY + TAG_LABELS + "eatingout" + "&order_by=-score&fields=name,coordinates,score,images,snippet" + ACCOUNT + API_TOKEN)
    ])
    .then(axios.spread((activityRes, restaurantRes) => {
      this.setState({
        name: activityRes.data.results[0].name,
        text: activityRes.data.results[0].snippet,
        image: activityRes.data.results[0].images[0].sizes.thumbnail.url
      });
      this.setState({
        nameEst: restaurantRes.data.results[0].name,
        textEst: restaurantRes.data.results[0].snippet,
        imageEst: restaurantRes.data.results[0].images[0].sizes.thumbnail.url,
      });
    }));
  };


  render(){
    return (
      <div className="sightseeing-container">
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="sightseeing-header">
          <h3 className="sightseeing-heading">Activity:</h3>
          <button className="vlaggenMenu">
            <Link to="/Language" className="vlaggenMenu-link"></Link>
          </button>
        </div>
        <div>
          <SightseeingComponent
            actname={ this.state.name }
            acttext={ this.state.text }
            actimage={ this.state.image }
          />
          <h3 className="sightseeing-heading">Restaurant/café:</h3>
          <RestaurantComponent
            name={ this.state.nameEst }
            text={ this.state.textEst }
            image={ this.state.imageEst }
          />
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => {
  return { city: state.city };
};
export default connect(mapStateToProps)(SightSeeingPage);
