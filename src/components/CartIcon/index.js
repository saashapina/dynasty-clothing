import "./styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart_icon-container" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart_icon" />
      <span className="cart_icon-item-count">0</span>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CartIcon);
