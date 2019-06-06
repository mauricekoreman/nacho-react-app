import React from "react";
import Language from "./Language";
import "../style/LanguagePage.css";
import vlagNL from "../img/NL.png";
import vlagUK from "../img/UK.png";
import vlagSP from "../img/SP.png";
import vlagFK from "../img/FK.png";

export class LanguagePage extends React.Component{

  cardClicked = id => {
    console.log("je klikt op taal: " + id);
  };

  render() {
    return (
      <div>
      <h3 className="language-title" >Pick your language</h3>
      <div className="grid-container">
        <div className="grid-item">
          <Language
            id="Nederlands"
            cardClicked={this.cardClicked}
            background={vlagNL}
          />
        </div>
        <div className="grid-item">
          <Language
            id="Engels"
            cardClicked={this.cardClicked}
            background={vlagUK}
          />
        </div>
        <div className="grid-item">
          <Language
            id="Spaans"
            cardClicked={this.cardClicked}
            background={vlagSP}
          />
        </div>
        <div className="grid-item">
          <Language
            id="Frans"
            cardClicked={this.cardClicked}
            background={vlagFK}
          />
        </div>
      </div>
      </div>
    );
  }
}
export default LanguagePage;
