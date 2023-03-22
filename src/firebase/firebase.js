// import firebase.
import firebase from "firebase";
// initialize firebase app in the application.
const app = firebase.initializeApp({
  apiKey: "AIzaSyBNOIVC63FLTb7voXRwDF8bvjQMl5Amdkc",
  authDomain: "netflix-clone-1d471.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://netflix-clone-1d471-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "netflix-clone-1d471.appspot.com",
});
// create firebase database.
const firebaseDatabase = app.database();
// create firebase auth.
const firebaseAuth = app.auth();
// export firebase database and firebase auth for later use.
export { firebaseDatabase, firebaseAuth };