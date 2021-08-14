import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyCWUI0_d0PWo8hYaKMBI9xMda2gTgApNhw",
  authDomain: "project-71-e894d.firebaseapp.com",
  projectId: "project-71-e894d",
  storageBucket: "project-71-e894d.appspot.com",
  messagingSenderId: "656529621712",
  appId: "1:656529621712:web:2c2feedd96574f960654d5"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

