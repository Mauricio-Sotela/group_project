import React from "react";
import { connect } from "react-redux";
import {
  INCREASE,
  DECREASE,
  REMOVE,
  TOGGLE_AMOUNT,
  removeItem,
} from "./actions.js";
const Cart = (states) => {
  return (
    <div className="cart-item">
      <img src={states.url} alt={states.productName} />
      <div>
        <h4>{states.productName}</h4>
        <h4 className="item-price">€{states.price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => states.remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => states.increase()}>
        <i class="fas fa-chevron-up"></i>
        </button>
        {/* amount */}
        <p className="amount">{states.inventory}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (states.inventory === 1) {
              return states.remove();
            } else {
              return states.decrease();
            }
          }}
        >
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    toggle: (toggle) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};
const mapStateToProps = (states) => {
  const { selectedItem } = states;
  return { states };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
