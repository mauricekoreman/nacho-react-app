import React from "react";

import "../style/Language.css";

export class Language extends React.Component {
  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  };

  render(){
    return(
        <button
          className="language-btn"
          style={{ backgroundImage: `url(${this.props.background})` }}
          onClick={this.onCardClicked} >
        </button>
    );
  }
}

export default Language;
