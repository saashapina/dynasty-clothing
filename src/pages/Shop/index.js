import "./styles.scss";
import React from "react";
import { Route } from "react-router-dom";

import { WithSpinner } from "../../components/WithSpinner";
import CollectionOverview from "../CollectionOverview";
import Collection from "../Collection";

import { connect } from "react-redux";
import { addShopCollections } from "../../redux/shop/actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/utils";

const mapDispatchToProps = (dispatch) => ({
  setShopCollections: (collectionData) =>
    dispatch(addShopCollections(collectionData)),
});

const CollectionOverviewWithSpinnner = WithSpinner(CollectionOverview);
const CollectionWithSpinnner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    //get firestore collection data and store into redux reducer
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((collectionsSnapshot) => {
      this.props.setShopCollections(
        convertCollectionsSnapshotToMap(collectionsSnapshot)
      );
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinnner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinnner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Shop);
