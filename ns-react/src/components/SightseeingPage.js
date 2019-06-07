import React from "react";
import axios from "axios";
import {Helmet} from 'react-helmet';
import SightseeingComponent from './SightseeingComponent';
import RestaurantComponent from './RestaurantComponent';
import "../css/style.css";

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

    // Sightseeing
    axios.all([
      axios.get(BASE_URL + CATEGORIE_POI + LOCATION + "Amsterdam" + "&order_by=-score&fields=name,score,images,snippet&count=1" + ACCOUNT + API_TOKEN),
      axios.get(BASE_URL + CATEGORIE_POI + LOCATION + "Amsterdam" + TAG_LABELS + "eatingout" + "&order_by=-score&fields=name,coordinates,score,images,snippet" + ACCOUNT + API_TOKEN)
    ])
    .then(axios.spread((activityRes, restaurantRes) => {
      // console.log(activityRes.data.results[0]);
      // console.log(restaurantRes.data.results[0]);

      this.setState({ actname: activityRes.data.results[0].name});
      this.setState({ acttext: activityRes.data.results[0].snippet})
      this.setState({ resimage: restaurantRes.data.results[0].images[1].sizes.thumbnail.url });

      // this.setState({ resname: restaurantRes.data.results[0].name});
      // this.setState({ restext: restaurantRes.data.results[0].snippet})
      // this.setState({ resimage: restaurantRes.data.results[0].images[2].sizes.thumbnail.url });

    }));
  };

  render(){
    const { actname } = this.state;
    const { acttext } = this.state;
    const { resimage } = this.state;

    return (
      <div className="sightseeing-container">
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <h4 className="sightseeing-heading">Activity:</h4>
        <SightseeingComponent
          name={ actname }
          text={ acttext }
          image={ resimage }
        />
        <h4 className="sightseeing-heading">Restaurant/café:</h4>
        <RestaurantComponent
          name={ actname }
          text={ acttext }
          image={ resimage }
        />
      </div>
    );
  };
}

export default SightSeeingPage;
