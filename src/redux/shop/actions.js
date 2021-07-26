import { shopActionTypes } from "./actionTypes";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/utils";

//used in sagas
export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsObj) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsObj,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

//Thunk Function Fetch
// export const fetchCollectionsAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());
//     collectionRef
//       .get()
//       .then((collectionsSnapshot) => {
//         const collectionsObj = convertCollectionsSnapshotToMap(
//           collectionsSnapshot
//         );
//         dispatch(fetchCollectionsSuccess(collectionsObj));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
