import "./styles.scss";
import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview";
import Collection from "../Collection";

export const Shop = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};
