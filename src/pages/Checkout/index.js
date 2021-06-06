import "./styles.scss";

import CheckoutItem from "../../components/CheckoutItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

const headerTitles = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = ({ cartItems, cartItemsTotal }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        {headerTitles.map((headerTitle) => (
          <div className="checkout-header-block" key={headerTitle}>
            {headerTitle}
          </div>
        ))}
      </div>
      <div className="checkout-cart-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <div className="checkout-cart-total">Total: ${cartItemsTotal}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Checkout);
