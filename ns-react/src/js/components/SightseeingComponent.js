import React from "react";
import '../../css/style.css';
import {Helmet} from 'react-helmet';
class SightseeingComponent extends React.Component {
  render() {
    return (
      <div className="img-card mdl-card mdl-shadow--2dp">
        <Helmet>
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="mdl-card__title mdl-card--expand" style={{ backgroundImage: `url(${this.props.actimage})`}}>{/*De achtergrond van het kaartje wordt hier naar binnen gehaald vanuit de API*/}
          <h2 className="mdl-card__title-text">{ this.props.actname }</h2>
        </div>
        <div className="mdl-card__supporting-text">{ this.props.acttext }</div>{/*Kleine snippet*/}
        <div className="mdl-card__actions mdl-card--border">
          <a href={"https://en.wikipedia.org/wiki/" + this.props.actname  } className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{/*Knop die naar wikipedia gaat*/}
            More info
          </a>
        </div>
      </div>
    );
  }
}

export default SightseeingComponent;
