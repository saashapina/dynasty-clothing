import "./styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemQuantity } from "../../redux/cart/selectors";

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => {
  return {
    cartItemQuantity: selectCartItemQuantity(state),
  };
};

const CartIcon = ({ toggleCartHidden, cartItemQuantity }) => {
  return (
    <div className="cart_icon-container" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart_icon" />
      <span className="cart_icon-item-count">{cartItemQuantity}</span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
