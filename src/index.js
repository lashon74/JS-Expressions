import React from "react";
import ReactDOM from "react-dom";

const lucky_number = 69;

const fName = "Lashon";

const lName = "Hudson";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}</h1>
    <p>Your lucky namuber is {lucky_number * Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
