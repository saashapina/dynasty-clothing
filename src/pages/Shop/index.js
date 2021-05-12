import "./style.scss";
import React from "react";
import { SHOP_DATA } from "./data.js";
import { CollectionPreview } from "../../components/CollectionPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        <h1>This is shop</h1>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
