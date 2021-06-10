import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  selectCollections,
  (collection) => Object.keys(collection).map((key) => collection[key])
);

export const selectCollectionByCategory = memoize((categoryName) =>
  createSelector(
    [selectCollections],
    (collections) => collections[categoryName]
  )
);
