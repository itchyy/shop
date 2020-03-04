import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1EW7iW0K5bYNLRCfTjPo-JJ06giTEssg",
  authDomain: "shop-db-3fa4f.firebaseapp.com",
  databaseURL: "https://shop-db-3fa4f.firebaseio.com",
  projectId: "shop-db-3fa4f",
  storageBucket: "shop-db-3fa4f.appspot.com",
  messagingSenderId: "1060518352909",
  appId: "1:1060518352909:web:431b0d30b651ad96e19d44",
  measurementId: "G-T1EQFGF1BW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
