import "./styles.scss";
import React from "react";
import { Route } from "react-router-dom";

import { CollectionOverviewContainer } from "../CollectionOverview/container";
import { CollectionContainer } from "../Collection/container";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/actions";

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Shop);
