import "./style.scss";

export const CartItem = ({ imageUrl, price, name, quantity }) => {
  return (
    <div className="cart_item">
      <img src={imageUrl} alt={name} />
      <div className="cart_item-details">
        <div className="cart_item-name">{name}</div>
        <div className="cart_item-price">
          {quantity} X ${price}
        </div>
      </div>
    </div>
  );
};
