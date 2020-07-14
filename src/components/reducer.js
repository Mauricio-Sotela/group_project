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
  selectedItem:[]
};
function reducer(state = initialStore, action) {
  if (action.type === ADD) {
    return {
      ...state,
      selectedItem: state.cart.map(item =>
        item.id == action.id ? {...state, selectedItem:item} : item,
      ),
    };
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      selectedItem: [],
    };
  }
  if (action.type === DECREASE) {
    let tempCart = state.selectedItem.map((dataItem) => {
      if (dataItem.id === action.payload.id) {
        dataItem = { ...dataItem, inventory: dataItem.inventory - 1 };
      }
      return dataItem;
    });

    return { ...state, selectedItem: tempCart };
  }
  if (action.type === INCREASE) {
    let tempCart = state.selectedItem.map((dataItem) => {
      if (dataItem.id === action.payload.id) {
        dataItem = { ...dataItem, inventory: dataItem.inventory + 1 };
      }
      return dataItem;
    });
    return { ...state, selectedItem: tempCart };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      selectedItem: state.selectedItem.filter((dataItem) => dataItem.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, inventory } = state.selectedItem.reduce(
      (cartTotal, dataItem) => {
        const { price, inventory } = dataItem;
        const itemTotal = price * inventory;

        cartTotal.total += itemTotal;
        cartTotal.inventory += inventory;

        return cartTotal;
      },
      {
        total: 0,
        inventory: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, inventory };
  }

  return state;
}

export default reducer;

