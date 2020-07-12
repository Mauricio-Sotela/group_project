import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  ADD,
} from "./actions";
import Data from "../data.json";

const initialStore = {
  cart: Data,
  total: 0,
  amount: 0,
};
function reducer(state = initialStore, action) {
  if (action.type === ADD) {
    return;
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: state.cart.filter((dataItem) => dataItem.id == action.payload.id),
    };
  }
  if (action.type === DECREASE) {
    console.log('ggggggg');
    
    let tempCart = state.cart.map((dataItem) => {
      if (dataItem.id === action.payload.id) {
        dataItem = { ...dataItem, inventory: dataItem.inventory - 1 };
      }
      return dataItem;
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    console.log("jjjjj");

    let tempCart = state.cart.map((dataItem) => {
      if (dataItem.id === action.payload.id) {
        dataItem = { ...dataItem, inventory: dataItem.inventory + 1 };
      }
      console.log(dataItem);

      return dataItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((dataItem) => dataItem.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, dataItem) => {
        const { price, amount } = dataItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        inventory: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((dataItem) => {
        if (dataItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (dataItem = { ...dataItem, inventory: dataItem.inventory + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (dataItem = { ...dataItem, inventory: dataItem.inventory - 1 });
          }
        }
        return dataItem;
      }),
    };
  }
  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
