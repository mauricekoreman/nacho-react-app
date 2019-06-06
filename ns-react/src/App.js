import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import SightSeeingPage from "./components/SightseeingPage";
import GpsComponent from "./components/GpsComponent";
import LanguagePage from "./components/LanguagePage";
import CityOfferPage from "./components/CityOfferPage";
import Home from "./components/Home";

import "./style/App.css";


const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/language" component={LanguagePage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/sightseeing" component={SightSeeingPage} />
          <Route path="/offer" component={CityOfferPage} />
          <Route path="/Gps" component={GpsComponent} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
