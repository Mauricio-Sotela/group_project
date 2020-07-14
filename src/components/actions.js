export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const addItem = (id) => {
  return { type: ADD, id };
};
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
