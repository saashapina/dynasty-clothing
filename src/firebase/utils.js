import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnJ5yC_wP8_nMcCliqhl6v6rhE3zfLLvE",
  authDomain: "dynasty-db.firebaseapp.com",
  projectId: "dynasty-db",
  storageBucket: "dynasty-db.appspot.com",
  messagingSenderId: "1074668166761",
  appId: "1:1074668166761:web:81efef1a19aa7d5d3f4cf8",
  measurementId: "G-8Y887G3MZL",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  //check if user is already exisiting in firestore
  //if not create user in firestore
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionName,
  objectsToAddArray
) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();

  objectsToAddArray.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//shopCollectionsToMap
export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollectionArray = collectionsSnapshot.docs.map((doc) => {
    const docData = doc.data();

    return {
      routeName: encodeURI(docData.title.toLowerCase()),
      id: doc.id,
      ...docData,
    };
  });

  return transformedCollectionArray.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
