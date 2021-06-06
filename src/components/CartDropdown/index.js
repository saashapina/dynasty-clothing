import "./styles.scss";
import { withRouter } from "react-router-dom";

import { CustomButton } from "../CustomButton";
import { CartItem } from "../CartItem";
import { If } from "../If";
import { ReactComponent as EmptyCartSVG } from "../../assets/empty-cart.svg";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selectors";
import { toggleCartHidden } from "../../redux/cart/actions";

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart_dropdown">
      <If
        condition={cartItems.length}
        otherwise={
          <div className="cart_dropdown-empty-message">
            <span>Your cart is empty</span>
            <EmptyCartSVG className="cart_dropdown-empty-svg" />
          </div>
        }
      >
        <div className="cart_dropdown-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </If>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To CheckOut
      </CustomButton>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
