import React from "react";

import {Router, Route, BrowserRouter} from "react-router-dom";

import Home from "./components/Home";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import SightSeeingPage from "./components/SightseeingPage";
import GpsComponent from "./components/GpsComponent";
import LanguagePage from "./components/LanguagePage";

import "./style/App.css";


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/sightseeing" component={SightSeeingPage} />
          <Route path="/language" component={LanguagePage} />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
