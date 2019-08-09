import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1_jVfUv0rqMW5TCbpO_ES-czRkzLsiO8",
  authDomain: "cropchatapp-72643.firebaseapp.com",
  databaseURL: "https://cropchatapp-72643.firebaseio.com",
  projectId: "cropchatapp-72643",
  storageBucket: "cropchatapp-72643.appspot.com",
  messagingSenderId: "99736954813"
};

firebase.initializeApp(config);
const storage = firebase.storage();
const database = firebase.database();

export default {
  database,
  storage
};
