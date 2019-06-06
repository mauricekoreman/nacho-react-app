import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Language from "./Language";
import "../style/LanguagePage.css";
import Contact from "./Contact"

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
      <div>
        <button className="Contact-btn">
        <Link to="/Contact" className="Contact">Contact</Link></button>
      </div>
      </div>
    );
  }
}
export default LanguagePage;
