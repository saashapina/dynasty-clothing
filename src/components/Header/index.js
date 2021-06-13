import {
  HeaderContainer,
  NavContainer,
  LinkedNavItem,
  NavItem,
} from "./styles";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { If } from "../If";

import { auth } from "../../firebase/utils";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const Header = ({ currentUser, cartHidden }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <NavContainer>
        <LinkedNavItem to="/shop">Shop</LinkedNavItem>
        <LinkedNavItem to="/contact">Contact</LinkedNavItem>
        <If
          condition={currentUser}
          otherwise={<LinkedNavItem to="/sign-in">Sign In</LinkedNavItem>}
        >
          <NavItem onClick={() => auth.signOut()}>Sign Out</NavItem>
        </If>
        <CartIcon />
      </NavContainer>
      <If condition={!cartHidden}>
        <CartDropdown />
      </If>
    </HeaderContainer>
  );
};

export default connect(mapStateToProps)(Header);
