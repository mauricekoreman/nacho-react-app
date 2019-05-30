import React from "react";

import {Router, Route, BrowserRouter} from "react-router-dom";

import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import SightSeeingPage from "./components/SightseeingPage";
import GpsComponent from "./components/GpsComponent";
import LanguagePage from "./components/LanguagePage";

import "./style/App.css";


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/error" component={ErrorPage} />
          <Route path="/sightseeing" component={SightSeeingPage} />
          <Route path="/language" component={LanguagePage} />
        </div>
      </BrowserRouter>

        // <div class="page1">
        // <h1 id="ns-sightseeing"alt="logo">NS Sightseeing</h1>
        // <img id="logo" src="/img/logo.jpg"></img>
        //
        // </div>
      // </div>

    );
  }
};

export default App;
