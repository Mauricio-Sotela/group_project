import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  ADD,
} from "./actions";

import Data from "../data.json";

const initialStore = {
  cart: Data,
  total: 0,
  amount: 0,
  selectedItem: [],
};

function reducer(state = initialStore, action) {
  // ===== ADD ===
  if (action.type === ADD) {
    let addedItem = state.cart.find((item) => item.id === action.item.id);
    // check if the action id exists in the selectedItem
    let existed_item = state.selectedItem.find(
      (item) => action.item.id === item.id
    );
    if (existed_item) {
      addedItem.inventory += 1;
      return {
        ...state,
      };
    } else {
      addedItem.inventory = 1;
      return {
        ...state,
        selectedItem: [...state.selectedItem, addedItem],
      };
    }
  }

  // ===== CLEAR CART ===
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      selectedItem: [],
    };
  }

  // ===== DECREASE ===
  if (action.type === DECREASE) {
    let tempCart = state.selectedItem.map((dataItem) => {
      if (dataItem.id === action.payload.id) {
        dataItem = { ...dataItem, inventory: dataItem.inventory - 1 };
      }
      return dataItem;
    });
    return { ...state, selectedItem: tempCart };
  }

  // ===== INCREASE ===
  if (action.type === INCREASE) {
    let tempCart = state.selectedItem.map((dataItem) => {
      if (dataItem.id === action.payload.id) {
        dataItem = { ...dataItem, inventory: dataItem.inventory + 1 };
      }
      return dataItem;
    });
    return { ...state, selectedItem: tempCart };
  }

  // ===== REMOVE ===
  if (action.type === REMOVE) {
    return {
      ...state,
      selectedItem: state.selectedItem.filter(
        (dataItem) => dataItem.id !== action.payload.id
      ),
    };
  }

  // ===== TOTAL ===
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
