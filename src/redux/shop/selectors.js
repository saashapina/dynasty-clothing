import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollectionsInArray = createSelector(
  selectCollections,
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);

export const selectCollectionByCategory = memoize((categoryName) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[categoryName] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetchingCollection
);

export const selectIsCollectionLoaded = createSelector([selectShop], (shop) =>
  Boolean(shop.collections)
);
