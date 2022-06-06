import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyMWSrypsy9oYMpB1rhsavFt8P59nV0yA",
  authDomain: "kitchen-3b6df.firebaseapp.com",
  projectId: "kitchen-3b6df",
  storageBucket: "kitchen-3b6df.appspot.com",
  messagingSenderId: "492923623563",
  appId: "1:492923623563:web:5181c37cca89534f1d1c8e",
  measurementId: "G-VTJNJFEZ7C",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
