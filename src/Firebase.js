import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpyOMVNxogjk2EKx0iFk0DJIeU9k7JsoQ",
    authDomain: "react-1a38c.firebaseapp.com",
    projectId: "react-1a38c",
    storageBucket: "react-1a38c.appspot.com",
    messagingSenderId: "452553616861",
    appId: "1:452553616861:web:2ffb5bee001f6988035a34",
    measurementId: "G-91HQPK00QD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };