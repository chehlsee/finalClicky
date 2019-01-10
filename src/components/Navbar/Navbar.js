import React, {Component} from "react";
import "../Navbar/Style.css";


const Navbar = props => (

  <nav className="navbar navbar-toggler navbar-light">
  
  <ul>
    <li className="Right">Score: {props.score}</li>
    <li className="Right">highScore: {props.highScore}</li>
  </ul>
  </nav>
);

export default Navbar;

