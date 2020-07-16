import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="main-banner1">
            <div className="sliceText">
              <h1 className="h1">Up to</h1>
              <h2 className="h2">40% off</h2>

              <p className="p">
                Discover MADE Ideas. Where you can explore inspiring interiors,
                and get helpful tips and style advice to transform your space.
                Come on in.
              </p>

              {/* <button className="button">More Details</button> */}
            </div>
          </div>

          <div className="main-banner2">
            <div className="sliceText">
              <h1 className="h1">Up to</h1>
              <h2 className="h2">40% off</h2>

              <p className="p">
                Discover MADE Ideas. Where you can explore inspiring interiors,
                and get helpful tips and style advice to transform your space.
                Come on in.
              </p>

              {/* <button className="button">More Details</button> */}
            </div>
          </div>
          <div className="main-banner3">
            <div className="sliceText">
              <h1 className="h1">Up to</h1>
              <h2 className="h2">40% off</h2>

              <p className="p">
                Discover MADE Ideas. Where you can explore inspiring interiors,
                and get helpful tips and style advice to transform your space.
                Come on in.
              </p>

              {/* <button className="button">More Details</button> */}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
