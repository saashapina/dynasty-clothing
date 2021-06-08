import "./styles.scss";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/actions";
import { decreaseItemQuantity } from "../../redux/cart/actions";
import { removeItem } from "../../redux/cart/actions";

const mapDispatchToProps = (dispatch) => ({
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

const CheckoutItem = ({ item, decreaseItemQuantity, removeItem, addItem }) => {
  return (
    <div className="checkout_item">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="name">{item.name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => decreaseItemQuantity(item)}>
          &#10094;
        </div>
        <div className="quantity-value">{item.quantity}</div>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </div>
      <div className="price">${item.price}</div>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
