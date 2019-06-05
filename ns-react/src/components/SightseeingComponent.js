import React from "react";
import '../style/SightseeingComponent.css';

class SightseeingComponent extends React.Component {
  render() {
    return (
      <div className="img-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand" style={{ backgroundImage: `url(${this.props.resimage})`}}>
          <h2 className="mdl-card__title-text">{ this.props.actname }</h2>
        </div>
        <div className="mdl-card__supporting-text">{ this.props.acttext }</div>
        <div className="mdl-card__actions mdl-card--border">
          <a href={"https://en.wikipedia.org/wiki/" + this.props.actname  } className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            More info
          </a>
        </div>
      </div>
    );
  }
}

export default SightseeingComponent;
