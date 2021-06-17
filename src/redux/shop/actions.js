import { shopActionTypes } from "./actionTypes";

export const addShopCollections = (collectionData) => ({
  type: shopActionTypes.ADD_SHOP_COLLECTIONS,
  payload: collectionData,
});
