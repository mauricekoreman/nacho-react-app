/*We inporteren hier de react gerelateerde onderdelen */
import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
/*We inporteren hier de css */
import "../../css/style.css";
/*We inporteren hier interne componenten */
import logoNS from "../../img/logo.png";

/*Dit is de opbouw van de pagina
1. achtergrond kleur
2. logo van de ns en title
3. link naar de LanguagePage*/

const Home = () => {
  return(
    <div className="page1">
      <Helmet>{/*1*/}
        <style>{'body { background-color: #fcc63f; background-repeat: no-repeat;}'}</style>
      </Helmet>
      <div className="home-container">
        {/*2 en 3*/}
        <img id="logo" src={logoNS} alt=""></img>
        <h1 className="home-heading"alt="logo">NS Sightseeing</h1>
        <Link to="/language" className="home-beginBtn--link">Start</Link>
      </div>
    </div>
  );
};
export default Home;
