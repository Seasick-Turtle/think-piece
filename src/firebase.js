import firebase from 'firebase/app';
import 'firebase/firestore';

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

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;