import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDo6PJki4Q6rtZ9aM4fZVeXGkTLiviyck0",
    authDomain: "alphazino-photo.firebaseapp.com",
    projectId: "alphazino-photo",
    storageBucket: "alphazino-photo.appspot.com",
    messagingSenderId: "863526263648",
    appId: "1:863526263648:web:e3f60dd98d0c849cc0dc05"
  };
  // Initialize Firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }



  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore , timestamp  };