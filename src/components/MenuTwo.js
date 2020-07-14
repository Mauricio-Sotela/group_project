import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MenuTwo = (state) => {
  return (
    <header className="MenuTwo">
      <Link className="style-link-nav" to="/">
        <h3>FLUXUS</h3>
      </Link>

      <div className="text">
        <form className="form-searchfield">
          <input className="input-text" type="text" />
          <input className="input-search" type="submit" value="search" />
        </form>
      </div>

      <nav>
        <Link className="style-link-nav" to="/product">
          <li>Product</li>
        </Link>

        <Link className="style-link-nav" to="/cart">
          <li>
            <ion-icon name="basket-outline"></ion-icon> Cart{" "}
            <strong>{state.state.selectedItem.length}</strong>
          </li>
        </Link>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(MenuTwo);
