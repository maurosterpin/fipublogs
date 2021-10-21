import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrXf4mUt0G7JDwAUWdrHX0Hb3kVsCeFCw",
    authDomain: "fipublogs.firebaseapp.com",
    projectId: "fipublogs",
    storageBucket: "fipublogs.appspot.com",
    messagingSenderId: "256188845712",
    appId: "1:256188845712:web:103629ec239417989b5215"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();