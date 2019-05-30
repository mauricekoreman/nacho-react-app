import React from "react";
import axios from "axios";
import SightseeingComponent from './SightseeingComponent';

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

    const API_TOKEN = "&token=v56oi7tj6zdoweync49h0h3vyddtd13x";
    const ACCOUNT = "&account=P8TOBP16";
    const LOCATION = "location_id=";

    // Sightseeing
    axios.get(BASE_URL + CATEGORIE_POI + LOCATION + "Amsterdam" + "&order_by=-score&fields=name,coordinates,score,images,snippet" + ACCOUNT + API_TOKEN)
    .then(res => {
      console.log(res.data.results);
      this.setState({ name: res.data.results[0].name});
      this.setState({ text: res.data.results[0].snippet})
      this.setState({ image: res.data.results[0].images[2].sizes.thumbnail.url });
    })
    .catch(error => {
      console.log(error);
    });
  };

  render(){
    const { name } = this.state;
    const { text } = this.state;
    const { image } = this.state;

    return (
      <SightseeingComponent
        name={ name }
        text={ text }
        image={ image }
      />
    );
  };
}

export default SightSeeingPage;
