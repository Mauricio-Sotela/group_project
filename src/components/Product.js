import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "./actions";
const Product = (state) => {
  console.log(state);

  const items = state.state.cart.map((item) => {
    const { id, productName, delivery, url, price, tags } = item;

    return (
      <React.Fragment>
        <Link key={id} to={`/product/${id}`}>
          {/*  */}

          <li className="quote" key={id}>
            <h1>{productName}</h1>

            {/* ---- img -----*/}

            <img className="img-box" src={url} alt={tags} />

            {/* ---- img -----*/}
            <p>{tags}</p>
            <h5>&euro; {price}</h5>

            {/* ---- Btn ----- */}
          </li><button className="btn-addToCart" onClick={(id)=> state.addItem(id)}>
          More Info
        </button>
        </Link>
        
      </React.Fragment>
      //
      // ------------------
    );
  });

  return (
    <React.Fragment>
      <div className="wrapper-product">
        <div className="product-banner">
          <div className="box1-banner"></div>

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
        </div>
        <h1>AW/20 </h1>
        <p>All, Collection</p>
        <ul className="container-products">{items}</ul>

        <div className="footer-product-info">
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


const mapStateToProps = (state) => {
  return { state };
};
const mapActionsToProps = {
  addItem,
};

export default connect(mapStateToProps, mapActionsToProps)(Product);
