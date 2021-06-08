export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseCartItemQuantity = (cartItems, cartItemToDecrease) => {
  return cartItems
    .map((item) =>
      item.id === cartItemToDecrease.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity >= 1);
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((item) => item.id !== cartItemToRemove.id);
};
