import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

// import SimpleImageSlider from "react-simple-image-slider";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-banner">
          <div className="home-banner-container">
            <div className="box1-banner"></div>
            <div className="box2-banner">
              <h1>
                LUXUS Market is back and better than before! Our Trends 2020
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

// class Home extends React.Component {
//   render() {
//     const images = [
//       { url: "images/Arc_table.jpg" },
//       { url: "images/WANDSEKRETÄR.jpg" },
//       { url: "images/fordite.jpg" },
//     ];

//     return (
//       <div className="slider-containerr">
//         <SimpleImageSlider width={896} height={504} images={images} />
//       </div>
//     );
//   }
// }

// export default Home;
