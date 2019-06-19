import React from "react";
import '../../css/style.css';
import {Helmet} from 'react-helmet';
class RestaurantComponent extends React.Component {
  render() {
    return (
      <div className="img-card mdl-card mdl-shadow--2dp">
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="mdl-card__title mdl-card--expand" style={{ backgroundImage: `url(${this.props.image })`}}>
          <h2 className="mdl-card__title-text">{ this.props.name }</h2>
        </div>
        <div className="mdl-card__supporting-text">{ this.props.text }</div>
        <div className="mdl-card__actions mdl-card--border">
          <a href={"https://en.wikipedia.org/wiki/" + this.props.name } className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            More info
          </a>
        </div>
      </div>
    );
  }
}

export default RestaurantComponent;
