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
