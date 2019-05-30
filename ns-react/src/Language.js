import React from "react";

import "./Language.css";

class Language extends React.Component {
  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  };

  render(){
    return(
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
          style={{ backgroundImage: `url(${this.props.background})` }}
          onClick={this.onCardClicked} >
        </button>
    );
  }
}

export default Language;
