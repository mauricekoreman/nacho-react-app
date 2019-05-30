import React from "react";
import "./ErrorPage.css";

class ErrorPage extends React.Component{

  toHomePage = () => {
    console.log("Er is geklikt");
  }

  render(){
    return (
      <div>
        <h1>404</h1>
        <h2>Error</h2>
          <button onClick={this.toHomePage}>Homepage</button>
      </div>
    );
  };
}

export default ErrorPage;
