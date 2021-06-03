import "./styles.scss";

import { CustomButton } from "../CustomButton";
import { CartItem } from "../CartItem";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selectors";

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const CartDropdown = ({ cartItems }) => {
  console.log("rendered cartItems", cartItems);
  return (
    <div className="cart_dropdown">
      <div className="cart_dropdown-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CustomButton>Check Out</CustomButton>
    </div>
  );
};

export default connect(mapStateToProps, null)(CartDropdown);
