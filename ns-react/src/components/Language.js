import React from "react";
import {Helmet} from 'react-helmet';
import "../style/Language.css";

export class Language extends React.Component {
  onCardClicked = () => {
    this.props.cardClicked(this.props.id);
  };

  render(){
    return(
      <div>
        <Helmet>
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
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
