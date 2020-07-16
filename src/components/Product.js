import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Footer from "./Footer";

import { connect } from "react-redux";
import { addItem } from "../redux/actions";

const Product = (state) => {
  const items = state.state.cart.map((item) => {
    const { id, productName, url, price, tags } = item;

    return (
      <Link key={id} to={`/product/${id}`}>
        <li className="quote" key={id}>
          <h1>{productName}</h1>
          <img className="img-box" src={url} alt={tags} />
          <p>{tags}</p>
          <h5>&euro; {price}</h5>
          <button className="btn-addToCart">More Info</button>
        </li>
      </Link>
    );
  });

  return (
    <React.Fragment>
      <div className="wrapper-product">
       
        <Slider />
        {/* <div className="product-banner">
          <div className="box1-banner"></div>
          <div className="box2-banner">
            <h1>Up to</h1>
            <h2>40% off</h2>
            <p>
              Discover MADE Ideas. Where you can explore inspiring interiors,
              and get helpful tips and style advice to transform your space.
              Come on in.
            </p>
            <Link to="/soon">
              <button>More Details</button>
            </Link>
          </div>
        </div> */}
        <h1>AW/20 </h1>
        <p>All, Collection</p>
        <ul className="container-products">{items}</ul>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapActionsToProps = {
  addItem,
};

export default connect(mapStateToProps, mapActionsToProps)(Product);
