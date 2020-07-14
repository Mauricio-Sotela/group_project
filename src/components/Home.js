import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
              <button>More Details</button>
            </div>
          </div>

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
