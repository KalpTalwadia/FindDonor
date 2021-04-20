import Firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAqeHgzuwz8588CsMXzX5E2qjhL36josMQ",
  authDomain: "finddonor-1b80a.firebaseapp.com",
  projectId: "finddonor-1b80a",
  storageBucket: "finddonor-1b80a.appspot.com",
  messagingSenderId: "153955495686",
  appId: "1:153955495686:web:f86c3a5b9e8f04c4b5f887"
};
const firebase= Firebase.initializeApp(firebaseConfig);

export const  db = firebase.firestore();
export const auth = firebase.auth();

export default firebase
