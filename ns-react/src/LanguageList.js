import React from "react";
import Language from "./Language";
import "./LanguageList.css";

class LanguageList extends React.Component{
  cardClicked = id => {
    this.props.cardClicked(id);
  };

  render() {
    return (
      <div className="grid-container">
        <div className="grid-item">
          <Language
            id="Nederlands"
            cardClicked={this.cardClicked}
            background="/img/NL.png"
          />
        </div>
        <div className="grid-item">
          <Language
            id="Engels"
            cardClicked={this.cardClicked}
            background="/img/UK.png"
          />
        </div>
        <div className="grid-item">
          <Language
            id="Spaans"
            cardClicked={this.cardClicked}
            background="/img/SP.png"
          />
        </div>
        <div className="grid-item">
          <Language
            id="Frans"
            cardClicked={this.cardClicked}
            background="/img/FK.png"
          />
        </div>
      </div>
    );
  }
}
export default LanguageList;
