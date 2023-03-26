// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//1. npm i firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIjnunxlgczjdRALYeFbiawNY35kabsP0",
  authDomain: "twitter-clone-92882.firebaseapp.com",
  projectId: "twitter-clone-92882",
  storageBucket: "twitter-clone-92882.appspot.com",
  messagingSenderId: "99968406375",
  appId: "1:99968406375:web:28fb3f95ad3a9bc5c1d5c2",
  measurementId: "G-6L3T22PGN1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

//1. npm i firebase

// useEffect(() => {
//   db.collection("posts").onSnapshot((snapshot) =>
//     setPosts(snapshot.docs.map((doc) => doc.data()))
//   );
// }, [post]);

// db refers database
// docs->refers posts collection
// snapshort refers collections (same as docs) at an instance of time
// doc refers a single doc
// doc.data() refer all datas inside a doc ie displayName, userName, verified, text, image, avatar

///////////////////////////////

// npm install -g firebase-tools
// firebase login

// firebase importts have changed so use updated import respect to in the video

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

//
// add to db
// db.collection("posts").add({
//   displayName: "Numan Ali",
//   userName: "numan@431",
//   verified: true,
//   text: tweetMessaage,
//   image: tweetImage,
//   avatar:
//     "https://lh3.googleusercontent.com/ogw/AAEL6sjEqCDRg2sGx4z_o_BzDUIsUoIFV1ZCYyDzOWchPw=s32-c-mo",
// });

// flip mode to anmate tweets

// deploy

// 1.firebase init
// yes,hosting,current project,twitter clone

//  What do you want to use as your public directory?
// Answer---> build--->folder for buildy file

// ? Configure as a single-page app (rewrite all urls
// to /index.html)? (y/N) y

// login authorize
// 2.npm run build---Creating an optimized production build
// 3.firebase deploy

// urls
// Project Console: https://console.firebase.google.com/project/twitter-clone-92882/overview
// Hosting URL: https://twitter-clone-92882.web.app
