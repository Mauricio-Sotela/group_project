import React from "react";

import { connect } from "react-redux";
import { addItem } from "../redux/actions";

const ProductInfo = (state) => {
  const year = () => {
    var d = new Date();
    var n = d.getFullYear();
    return n;
  };

  const selectedItem = state.store.cart.filter((item) => item.id == state.id);
  const moreInfo = selectedItem.map((item) => {
    const {
      id,
      productName,
      url2,
      price,
      label,
      link,
      descriptionLong,
      delivery,
    } = item;

    return (
      <div key={id} className="box-quote">
        <div className="productInfo-boxImg">
          <img className="img-box" src={url2} alt={label} />
        </div>

        <div className="productInfo-boxDescription">
          <h3 className="headline-productName">{productName}</h3>
          <h5>&euro; {price}</h5>
          <h6>{label}</h6>
          <p>{descriptionLong}</p>
          <span>{delivery}</span>
          <a className="button-product" href={link}>
            More Info
          </a>
          <button
            className="button-product"
            onClick={() => {
              state.addItem(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h1 className="product-aw">AW/20 </h1>
      <p className="product-collection">All, Collection</p>
      <div className="product-info">{moreInfo}</div>

      <div className="footer-product-info">
        <p> &#169; 2020</p>
        <div className="insta">
          <div className="dot"></div>
          <p>facebook</p>
        </div>
        <ol>
          <div className="footer-ol">
            <ul>
              <li>
                <a href="/group_project/product">ONLINE CATALOGUE {year()}</a>
              </li>
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
        </ol>
      </div>
    </React.Fragment>
  );
};

const mapActionsToProps = {
  addItem,
};

const mapStateToProps = (store) => {
  return { store };
};

export default connect(mapStateToProps, mapActionsToProps)(ProductInfo);
