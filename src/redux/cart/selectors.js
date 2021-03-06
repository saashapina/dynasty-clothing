import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  selectCart,
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulatedTotal, cartItem) =>
        accumulatedTotal + cartItem.price * cartItem.quantity,
      0
    )
);
