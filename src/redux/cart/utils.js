export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  //if cartItemToAdd already exists, return cart items array with an increase of quantity
  //on the item
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  //else return cart items, with addition cart item while initiating quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  console.log("this is remove func");
  return cartItems.filter((item) => item.id !== cartItemToRemove.id);
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
