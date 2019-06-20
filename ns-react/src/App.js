import React from "react";
import { store } from "./js/pages/store";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


import ErrorPage from "./js/pages/ErrorPage";
import Contact from "./js/pages/Contact";
import SightSeeingPage from "./js/pages/SightseeingPage";
import GpsComponent from "./js/pages/GpsComponent";
import LanguagePage from "./js/pages/LanguagePage";
import CityOfferPage from "./js/pages/CityOfferPage";
import StartPage from "./js/pages/StartPage";
import Home from "./js/pages/Home";

import "./css/style.css";


const App = (props) => {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Switch>
            <Route path="/language" component={LanguagePage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/sightseeing" component={SightSeeingPage} />
            <Route path="/offer" component={CityOfferPage} />
            <Route path="/GpsComponent" component={GpsComponent} />
            <Route path="/StartPage" component={StartPage} />
            <Route path="/" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
      </Provider>
      </div>
    </Router>
  );
};

export default App;
