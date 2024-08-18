// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta,
	appId: "1:922799030818:web:786e733f16d348da6d007b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

VITE_APIKEY=AIzaSyCpCp93CGOEzNydBFokZyrJR33X1tONWEE
VITE_AUTHDOMAIN=bdit-643f8.firebaseapp.com
VITE_PROJECTID=bdit-643f8
VITE_STORAGEBUCKET=bdit-643f8.appspot.com
VITE_MESSAGINGSENDERID=922799030818
VITE_APPID=1:922799030818:web:786e733f16d348da6d007b