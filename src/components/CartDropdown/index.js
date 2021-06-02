import "./styles.scss";

import { CustomButton } from "../CustomButton";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart_dropdown">
      <div className="cart_dropdown-items">
        {cartItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <CustomButton>Check Out</CustomButton>
    </div>
  );
};

export default connect(mapStateToProps, null)(CartDropdown);
