import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-banner">
          <div className="home-banner-container">
            <div className="box1-banner"></div>
            <div className="box2-banner">
              <h1>
                FLUXUS Market is back and better than before! Our Trends 2020
                features more new and innovation products
              </h1>
              <Link to="/soon">
                <button>More Details</button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
