import "./styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon";
import { CartDropdown } from "../CartDropdown";
import { If } from "../If";

import { auth } from "../../firebase/utils";
import { connect } from "react-redux";

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  cartHidden: hidden,
});

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav">
        <Link className="nav-item" to="/shop">
          Shop
        </Link>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
        <If
          condition={currentUser}
          otherwise={
            <Link className="nav-item" to="/sign-in">
              Sign In
            </Link>
          }
        >
          <div className="nav-item" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        </If>
        <CartIcon />
      </div>
      <If condition={!cartHidden}>
        <CartDropdown />
      </If>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
