//3 stappen om react werkend te krijgen

//1) React zelf importeren
import React from "react";

//2) React renderen in het DOM
import ReactDOM from "react-dom";

//2)2.5 Importeer je componenten
import App from "./App";

//3) App in het DOM schieten
ReactDOM.render(<App />, document.querySelector("#root"));
