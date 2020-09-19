import * as firebase from "firebase";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBBrN22i3TKvdL4FKMejyQ1fPkeSpADQao",
  authDomain: "e-commerce-57b0b.firebaseapp.com",
  databaseURL: "https://e-commerce-57b0b.firebaseio.com",
  projectId: "e-commerce-57b0b",
  storageBucket: "e-commerce-57b0b.appspot.com",
  messagingSenderId: "435230046012",
  appId: "1:435230046012:web:f2683f5996fea6c1411039",
  measurementId: "G-QDF9Z5RQK0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
