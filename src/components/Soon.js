import React, { Component } from "react";
import { Link } from "react-router-dom";

const Soon = () => {
  return (
    <React.Fragment>
      {/* <div className="soon-banner">
        <h1>home</h1>
      </div> */}

      <div className="soon-banner">
        <div className="home-banner-container">
          <h1>SOON</h1>
        </div>
        {/* ----------- */}

        <div className="footer-home">
          <p> &#169; 2020</p>

          <div className="insta">
            <div className="dot"></div>
            <p>facebook</p>
          </div>

          <ul>
            <li>ONLINE CATALOGUE 2019</li>
            <li>TERMS &amp; CONDITIONS </li>
            <li>PRIVACY POLICY</li>
          </ul>
          <ul>
            <li>OUR STORY</li>
            <li>CAREERS</li>
            <li>SALES</li>
          </ul>
          <ul>
            <li>CLAIMS</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Soon;
