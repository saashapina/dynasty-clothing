import "./menu-item.scss";

export const MenuItem = ({ title, imageUrl, isLarge }) => {
  return (
    <div
      className="menu-item"
      style={{
        height: `${isLarge ? "380px" : ""}`,
      }}
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
