import { COLLECTION_DATA } from "./data";

const INITIAL_STATE = {
  collections: COLLECTION_DATA,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
