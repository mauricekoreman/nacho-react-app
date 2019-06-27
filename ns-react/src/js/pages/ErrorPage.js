/*We importeren hier de react gerelateerde onderdelen */
import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
/*We inporteren hier de css */
import "../../css/style.css";

/* Dit is de opbouw van de pagina
1. achtergrond kleur
2. Informatie over error
3. link verwijst door naar GpsComponent op opnieuw te scannen */
const ErrorPage = () =>{
    return (
      <div className="error-page--container">
        <Helmet>{/*1*/}
          <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
        </Helmet>
        {/*2*/}
        <h1 className="error-page--code">404</h1>
        <h2 className="error-page--code--explanation">Page not found</h2>
        <h3 className="error-page--code--explanation--text">Sorry! This city has not yet been added.</h3>
        {/*3*/}
        <Link to="/GpsComponent" className="error-page--btn--link">Scanner</Link>
      </div>
    );
  };

/*Dit is redux*/
const mapStateToProps = state => {
  return {language: state.language};
};
export default connect(mapStateToProps) (ErrorPage);
