import React, {Component} from "react";
import "../Navbar/Style.css";


const Navbar = props => (

  <nav className="navbar navbar-toggler navbar-light">
  
  <ul>
    <li className="Left">Score: {props.score}</li>
    <li className="Left">highScore: {props.highScore}</li>
  </ul>
  </nav>
);

export default Navbar;

