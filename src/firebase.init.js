import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,

    apiKey: "AIzaSyCeVCZk_BYgIqD4n_2JRgX04jA-E2k3oHE",
    authDomain: "recipe-blogs-3c7ee.firebaseapp.com",
    projectId: "recipe-blogs-3c7ee",
    storageBucket: "recipe-blogs-3c7ee.appspot.com",
    messagingSenderId: "682053342424",
    appId: "1:682053342424:web:3395822baf5d77152273ad"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;