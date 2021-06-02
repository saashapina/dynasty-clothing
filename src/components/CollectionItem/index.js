import "./styles.scss";

import { CustomButton } from "../CustomButton";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

const CollectionItem = ({ addItemToCart, item }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection_item">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        Add To Cart
      </CustomButton>
      <div className="item-footer">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
