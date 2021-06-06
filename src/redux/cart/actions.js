import { cartActionTypes } from "./actionTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});
