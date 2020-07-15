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
      pauseOnHover: true
    };
    return (
      <div>
       <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        <Slider {...settings}>
       
          

          <div className="box2-banner">
            <h1>Up to</h1>
            <h2>40% off</h2>

            <p>
              Discover MADE Ideas. Where you can explore inspiring interiors,
              and get helpful tips and style advice to transform your space.
              Come on in.
            </p>
            
              <button>More Details</button>
            
          </div>
       
          <div>
          <img className='ban' src='https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' width='30%'/>
          </div>
          <div>
           <img className='ban' src='https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1328&q=80' width='30%'/>
          </div>
          <div>
            <img className='ban' src='https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' width='30%'/>
          </div>
          <div>
            <img className='ban' src='https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80' width='30%'/>
          </div>
          <div>
            <img className='ban' src='https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' width='30%'/>
          </div>
        </Slider>
      </div>
    );
  }
}