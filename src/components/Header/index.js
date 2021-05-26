import "./styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/utils";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="nav-item" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="nav-item" to="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
