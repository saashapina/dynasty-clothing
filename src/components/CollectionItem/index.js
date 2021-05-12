import "./styles.scss";

export const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className="collection_item">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <button>Add To Cart</button> */}
      <div className="item-footer">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
      </div>
    </div>
  );
};
