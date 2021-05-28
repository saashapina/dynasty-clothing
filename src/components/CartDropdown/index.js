import "./styles.scss";

import { CustomButton } from "../CustomButton";

export const CartDropdown = () => {
  return (
    <div className="cart_dropdown">
      <div className="cart_dropdown-items">
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
      </div>
      <CustomButton>Check Out</CustomButton>
    </div>
  );
};
