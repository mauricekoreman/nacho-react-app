/*We importeren hier de react gerelateerde onderdelen */
import React from "react";
import {Helmet} from 'react-helmet';
/*We inporteren hier de css */
import "../../css/style.css";

export class Language extends React.Component {
  /*Deze knop verwijst door naar de StartPage.js*/
  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  };
  /* Dit is de opbouw van de pagina
  1. achtergrond kleur
  2. dit is de talenknop.
  */
  render(){
    return(
      <div>
        <Helmet>{/*1*/}
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        {/*2*/}
        <button
          className="language-btn"
          style={{ backgroundImage: `url(${this.props.background})` }}
          onClick={this.onCardClicked} >
        </button>
      </div>
    );
  }
}

export default Language;
