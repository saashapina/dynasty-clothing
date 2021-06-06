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
      <span className="name">{item.name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => decreaseItemQuantity(item)}>
          &#10094;
        </span>
        {item.quantity}
        <span className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
