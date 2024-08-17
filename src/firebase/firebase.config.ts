// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCpCp93CGOEzNydBFokZyrJR33X1tONWEE",
	authDomain: "bdit-643f8.firebaseapp.com",
	projectId: "bdit-643f8",
	storageBucket: "bdit-643f8.appspot.com",
	messagingSenderId: "922799030818",
	appId: "1:922799030818:web:786e733f16d348da6d007b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;