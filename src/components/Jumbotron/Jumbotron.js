// always import react first
import React from "react";
import "../Jumbotron/Style.css";
import hellokittyBanner from './hellokittyBanner.jpg';

console.log(hellokittyBanner);


function Jumbotron (props) {
  
  return (
  <div className="jumbotronImage header">
  <h1>
    {props.printResult}</h1>
    <h2>Chehlsee's Clicky Game!</h2>
    <h3>Rules: Click on each image only once!</h3>
    </div>
);
}

// need to export or else it will not render
export default Jumbotron;




// how to import an image
// import React from 'react';
// import logo from './logo.png'; // Tell Webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }

// export default Header;