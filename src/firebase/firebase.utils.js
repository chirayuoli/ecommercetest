import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCt31iFBiSRF8rrTkUzm5fzKlHaYCe1foo",
  authDomain: "petsnepaldemo.firebaseapp.com",
  databaseURL: "https://petsnepaldemo.firebaseio.com",
  projectId: "petsnepaldemo",
  storageBucket: "petsnepaldemo.appspot.com",
  messagingSenderId: "983812644887",
  appId: "1:983812644887:web:488c2ee00ca4c6ac863c52",
  measurementId: "G-0NN488KHDZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
