import React from "react";

import { CollectionPreview } from "../../components/CollectionPreview";

import { connect } from "react-redux";
import { selectCollectionsInArray } from "../../redux/shop/selectors";

const mapStateToProps = (state) => ({
  collections: selectCollectionsInArray(state),
});

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection_overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(CollectionOverview);
