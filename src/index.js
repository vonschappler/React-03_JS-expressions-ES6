import React from "react";
import ReactDOM from "react-dom";

const fName = 'Manoel'
const lName = 'Viturino'
//const number = 7

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Your lucky number is {Math.round(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
)
