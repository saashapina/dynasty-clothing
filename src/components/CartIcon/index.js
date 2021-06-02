import "./styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems.length,
});

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <div className="cart_icon-container" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart_icon" />
      <span className="cart_icon-item-count">{cartItems}</span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
