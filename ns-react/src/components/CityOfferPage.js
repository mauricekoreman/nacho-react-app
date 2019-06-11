import React from "react";
import axios from "axios";
import "../css/style.css";
import SwipeableViews from 'react-swipeable-views';
import {Helmet} from 'react-helmet';
import Language from './Language';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class CityOfferPage extends React.Component{

  constructor(props){
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

    axios.all([
      axios.get(BASE_URL + CATEGORIE_POI + LOCATION + "Amsterdam" + "&order_by=-score&fields=name,score,images,snippet&count=1" + ACCOUNT + API_TOKEN )
    ])
    .then(axios.spread((cityImg)=> {
      this.setState({
        name: cityImg.data.results[0].name,
        image: cityImg.data.results[0].images[2].sizes.thumbnail.url
      });
    }));
  }

  render(){
    return (
      <div className="sightseeing-container">
        <Helmet>
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div>
          <button className="vlaggenMenu">
            <Link to="/Language" className="vlaggenMenu-link"></Link>
          </button>
        </div>
          <div className="mdl-card__title mdl-card--expand" style={{ backgroundImage: `url(${this.props.image})`}}>
            <h2 className="mdl-card__title-text">{ this.props.name}</h2>
          </div>
          <div className="mdl-card__supporting-text">{ this.props.name}</div>
          <div className="mdl-card__actions mdl-card--border">
            <a href={"https://en.wikipedia.org/wiki/" + this.props.actname} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              More info
            </a>
          </div>
      </div>
    );
  };
}
export default CityOfferPage;
