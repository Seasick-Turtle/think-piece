import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwb0lAiCJfXU14nuD-CBZX4yGdgajpN2Y",
  authDomain: "think-piece-94b7a.firebaseapp.com",
  databaseURL: "https://think-piece-94b7a.firebaseio.com",
  projectId: "think-piece-94b7a",
  storageBucket: "think-piece-94b7a.appspot.com",
  messagingSenderId: "244291724793"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;