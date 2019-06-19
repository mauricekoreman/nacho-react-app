import React from "react";
import "../../css/style.css";
import vlaggenMenu from "../../img/vlaggenMenu.png";
import {
  Helmet
} from 'react-helmet';
import Language from '../components/Language';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

export class StartPage extends React.Component {

    render() {
        return (
          <div>
            <Helmet>
              <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
            </Helmet>
            <div className = "gps-container" />
            <div className = "gps-header" />
            <button className = "vlaggenMenu" >
              <Link to = "../Language" className = "vlaggenMenu-link"></Link>
            </button>
          </div>
        );
      };
    }
      export default StartPage;
