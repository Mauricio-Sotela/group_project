import React from "react";
import { Link } from "react-router-dom";

const MenuTwo = () => {
  return (
    <header className="MenuTwo">
      <Link className="style-link-nav" to="/Home">
        <h3>FLUXUS</h3>
      </Link>

      <div className="text">
        {/* --------  FORM related 2 -------- */}
        <form className="form-searchfield">
          <input className="input-text" type="text" />

          {/* --- */}

          <input className="input-search" type="submit" value="search" />
        </form>

        {/* --------  FORM -------- */}
      </div>

      <nav>
        <Link className="style-link-nav" to="/product">
          <li>Product</li>
        </Link>

        <Link className="style-link-nav" to="/cart">
          <li>
            <ion-icon name="basket-outline"></ion-icon> Cart
          </li>
        </Link>
      </nav>
    </header>
  );
};

export default MenuTwo;
