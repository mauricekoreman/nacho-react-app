import React from "react";
import "../../css/style.css";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import stad from "../../img/Leiden2.jpg";

export class CityStory extends React.Component{

  render(){
    return (
      <div className="CityStory--container">
        <Helmet>
          <style>{'body {background: white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div>
          <img className="CityStory-img"src={stad} alt="" />
          <h2>NAAM</h2>
          <p className="CityStory-text">Lorem ipsum dolor sit amet, consecteturadipiscing elit. Suspendisse
            vehicula, erat vel ultricies egestas, elit libero finibus diam, mattis
            viverra mauris turpis vitae elit. Nulla eleifend leo nec ipsum
            tincidunt, at mattis orci efficitur.Suspendisse viverra elit vel ante
            iaculis placerat.Aenean nec purus eu ante faucibus iaculis. Ut iaculis
             interdum nisi at varius. Sed lacus tellus,semper at vestibulum id,
             malesuada at lorem.Sed imperdiet est eu mollis convallis. Maurishendrerit
              lacinia magna non finibus. Pellentesque pretium et tellus quis
              semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div>
          <button className="contact-btn">
            <Link to="/Sightseeing" className="contact-btn--link">More</Link>
          </button>
        </div>
      </div>
    );
  };
}

export default CityStory;
