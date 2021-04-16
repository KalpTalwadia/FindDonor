import Firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyAqeHgzuwz8588CsMXzX5E2qjhL36josMQ",
  authDomain: "finddonor-1b80a.firebaseapp.com",
  projectId: "finddonor-1b80a",
  storageBucket: "finddonor-1b80a.appspot.com",
  messagingSenderId: "153955495686",
  appId: "1:153955495686:web:f86c3a5b9e8f04c4b5f887"
};
const firebase= Firebase.initializeApp(firebaseConfig);

const  db = firebase.firestore();

export {db}
export default firebase
