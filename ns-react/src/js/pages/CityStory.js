import React from "react";
import "../css/style.css";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export class CityStory extends React.Component{

  render(){
    return (
      <div className="CityStory--container">
        <Helmet>
          <style>{'body {background: white); background-repeat: no-repeat;}'}</style>
        </Helmet>
      </div>
    );
  };
}

export default CityStory;
