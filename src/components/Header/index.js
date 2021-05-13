import "./styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav">
        <Link className="nav-item" to="/shop">
          SHOP
        </Link>
        <Link className="nav-item" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
