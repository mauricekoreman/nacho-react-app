/*We inporteren hier de react gerelateerde onderdelen */
import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { connect } from "react-redux";
import {changeCity} from "./actions";
/*We inporteren hier de css */
import "../../css/style.css";
/*We inporteren hier externe componenten */
import axios from "axios";
/*We inporteren hier interne componenten */
import SightseeingComponent from '../components/SightseeingComponent';
import RestaurantComponent from '../components/RestaurantComponent';


export class SightSeeingPage extends React.Component{
  // To show a photo in our React app, we need to store the API response in state.
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }

  componentDidMount() {
    // Hier worden constanten aangemaakt. Hierdoor hoef je dit alleen hier aan te passen en niet in de API call zelf.
    const BASE_URL = "https://www.triposo.com/api/20181213/";
    const CATEGORIE_LOCATION = "location.json?";
    const CATEGORIE_POI = "poi.json?";
    const TAG_LABELS = "&tag_labels=";
    const LOCATION = "location_id=";

    const ACCOUNT = "&account=P8TOBP16";
    const API_TOKEN = "&token=v56oi7tj6zdoweync49h0h3vyddtd13x";
    const CITY = this.props.city;
    // Sightseeing

    // De API call naar triposo
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
  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. vlaggenmenu link die terug verwijst naar LanguagePage en ga terug link
     die verwijst naar de GpsComponent
  3. Hier word de actievitiet en eet locatie aangeboden per stad */
  render(){
    return (
      <div className="sightseeing-container">
        <Helmet>{/*1*/}
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>

        <div className="header sightseeing-header">{/*2*/}
          <Link to="/CityStory" className="gaTerug-link"></Link>
          <Link to="/Language" className="vlaggenMenu-link"></Link>
        </div>
        <div className="sightseeing-blok">{/*3*/}
          <h3 className="sightseeing-heading">Activity:</h3>
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
/*Dit is redux*/
const mapStateToProps = state => {
  return { city: state.city };
};
export default connect(mapStateToProps)(SightSeeingPage);
