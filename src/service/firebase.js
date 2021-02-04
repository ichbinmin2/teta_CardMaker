import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DPMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
