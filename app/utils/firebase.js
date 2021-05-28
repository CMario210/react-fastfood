import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCM-H4Bi1dtzjBJxhxjJVD9xnYlq2jX5dM",
    authDomain: "react-fastfood-c11d1.firebaseapp.com",
    projectId: "react-fastfood-c11d1",
    storageBucket: "react-fastfood-c11d1.appspot.com",
    messagingSenderId: "955525957440",
    appId: "1:955525957440:web:f541d561bfdc29c911dca5"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
