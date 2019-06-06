import React from "react";
import "../css/style.css";
import SwipeableViews from 'react-swipeable-views';
import {Helmet} from 'react-helmet';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

const CityOfferPage = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
      </Helmet>
      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
      </SwipeableViews>
    </div>

  );
}
export default CityOfferPage;
