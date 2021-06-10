import "./style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl, isLarge, history, match }) => {
  return (
    <div
      className="menu_item"
      style={{
        height: `${isLarge ? "380px" : ""}`,
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
