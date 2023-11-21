// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyA-FivXn82uJmPHUeinOubifmJhqxksK10",
//     authDomain: "bistro-boss-5d3d3.firebaseapp.com",
//     projectId: "bistro-boss-5d3d3",
//     storageBucket: "bistro-boss-5d3d3.appspot.com",
//     messagingSenderId: "306229928857",
//     appId: "1:306229928857:web:e8b1aee125d46660332908"
// };

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);