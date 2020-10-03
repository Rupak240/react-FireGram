  import * as firebase from 'firebase/app'
  import 'firebase/storage'
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZuC6ujVAHzitNAS8mjvlt41Z-ApLpKz4",
    authDomain: "react-firegram-538e0.firebaseapp.com",
    databaseURL: "https://react-firegram-538e0.firebaseio.com",
    projectId: "react-firegram-538e0",
    storageBucket: "react-firegram-538e0.appspot.com",
    messagingSenderId: "471602256364",
    appId: "1:471602256364:web:69d114bd363612d21ac8c9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   Services
  export const projectStorage = firebase.storage()
  export const projectFirestore = firebase.firestore()
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp