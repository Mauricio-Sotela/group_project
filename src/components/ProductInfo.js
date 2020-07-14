import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";

const ProductInfo = ({ addItem, store }) => {
  console.log(store);
  console.log(store.id); // undefined
  console.log(store.cart[2].id); // access item.id inside store (need bracket to select index)

  // need to change "store.id" & replace it line 13
  const selectedItem = store.cart.filter((item) => item.id == store.id);

  const moreInfo = store.cart.map((item) => {
    console.log(item);

    const {
      id,
      productName,
      url2,
      price,
      // tags,
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
            More info
          </a>
          <button
            className="button-product"
            onClick={() => {
              addItem(item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="product-info-banner"></div>

      <h1>AW/20 </h1>
      <p>All, Collection</p>

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
