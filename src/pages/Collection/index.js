import "./styles.scss";

import CollectionItem from "../../components/CollectionItem";

import { connect } from "react-redux";
import { selectCollectionByCategory } from "../../redux/shop/selector";

const mapStateToProps = (state, ownProps) => {
  const collectionCategory = ownProps.match.params.collectionId;
  return {
    collection: selectCollectionByCategory(collectionCategory)(state),
  };
};

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((collectionItem) => (
          <CollectionItem key={collectionItem.id} item={collectionItem} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Collection);
