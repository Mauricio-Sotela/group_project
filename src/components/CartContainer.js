import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../components/actions";
const CartContainer = ({ cart = [], total, selectedItem = [], dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [selectedItem, dispatch]);
  if (selectedItem.length === 0) {
    return (
      <section className="cart">
        <div className="empty-cart">
          <img
            src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png"
            alt="empty-cart"
          />
          <h2>You cart is empty!</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}

      <h2>your bag</h2>

      {/* cart items */}
      <div className="articles">
        {selectedItem.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>€{total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total, selectedItem } = store;
  return { cart, total, selectedItem };
}
export default connect(mapStateToProps)(CartContainer);
