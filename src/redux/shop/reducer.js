import { shopActionTypes } from "./actionTypes";

const INITIAL_STATE = {
  collections: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.ADD_SHOP_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
