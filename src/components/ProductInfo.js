import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";
const ProductInfo = (state) => {
  const selectedItem = state.store.cart.filter((item) => item.id == state.id);
  const moreInfo = selectedItem.map((item) => {
    //
    //
    //
    const {
      id,
      productName,
      url2,
      price,
      inventory,
      tags,
      label,
      link,
      descriptionLong,
      delivery,
    } = item;
    //
    //
    //

    return (
      <div key={id} className="box-quote">
        {/* box 1 */}
        <div className="productInfo-boxImg">
          <img className="img-box" src={url2} alt={label} />
        </div>
        {/* box 2 */}
        <div className="productInfo-boxDescription">
          <h3 className="headline-productName">{productName}</h3>
          <h4>{inventory}</h4>
          <h5>&euro; {price}</h5>
          <h6>{label}</h6>
          <p>{descriptionLong}</p>
          <span>{delivery}</span>
          <a href={link}>More info</a>
          <button
            className="button-product"
            onClick={() => {
              state.addItem(item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      //
    );
  });
  return (
    <React.Fragment>
      {/* <div className="product-info-banner"></div> */}
      <h1 className='product-aw'>AW/20 </h1>
      <p className='product-collection'>All, Collection</p>
      <div className="product-info">{moreInfo}</div>
      <div className="footer-product-info">
        <p> &#169; 2020</p>
        <div className="insta">
          <div className="dot"></div>
          <p>facebook</p>
        </div>
        <ol>
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
