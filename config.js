import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
apiKey: "AIzaSyCd9w1tVflxRWwQn7kPm-7ag9v3E7wacTE",
  authDomain: "project-71-5e2e7.firebaseapp.com",
  projectId: "project-71-5e2e7",
  storageBucket: "project-71-5e2e7.appspot.com",
  messagingSenderId: "615633264555",
  appId: "1:615633264555:web:f003df9496f191f5813cee"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
