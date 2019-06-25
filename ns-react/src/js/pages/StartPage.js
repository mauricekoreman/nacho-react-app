import React from "react";
import "../../css/style.css";
import vlaggenMenu from "../../img/vlaggenMenu.png";
import {
  Helmet
} from 'react-helmet';
import Language from '../components/Language';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

export class StartPage extends React.Component {
  constructor() {
    super()
    this.state = {
      zin: '',
    }
  }
  componentDidMount(){
    if (this.props.language == 'NL'){
        this.setState({zin: "Welkom in Nederland !!"});
    }
    if (this.props.language == 'ENG'){
        this.setState({zin: "Welcome to the Netherlands !!"});
    }
    if (this.props.language == 'SP'){
        this.setState({zin: "Bienvenidos a Holanda !!"});
    }
    if (this.props.language == 'FR'){
        this.setState({zin: "Bienvenue aux Pays-Bas !!"});
    }
  }

    render() {
        return (
          <div>
            <Helmet>
              <style>{'body {background: linear-gradient(#fcc63f, white); background-repeat: no-repeat;}'}</style>
            </Helmet>
            <div className = "header" />
            <button className = "vlaggenMenu" >
              <Link to = "../Language" className = "vlaggenMenu-link"></Link>
            </button>

            <div className="startPage-img" />
            <div className="tekstBlok">
              <p className="introductie">{this.state.zin}</p>
              <Link to="/GpsComponent" className="start_knop">Get started</Link>
            </div>
          </div>
        );
      };
    }
    const mapStateToProps = state => {
      return { language: state.language };
    };
export default connect(mapStateToProps)(StartPage);
