import { cartActionTypes } from "./actionTypes";
import { addItemToCart } from "./utils";
import { removeCartItem } from "./utils";
import { decreaseCartItemQuantity } from "./utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseCartItemQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
