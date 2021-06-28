import { shopActionTypes } from "./actionTypes";

const INITIAL_STATE = {
  isFetchingCollection: false,
  collections: null,
  errorMessage: "",
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetchingCollection: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetchingCollection: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetchingCollection: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
