import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const config = {
  apiKey: "AIzaSyD7mVfkN2eU25BJ-tJJ1A9dIUC_nNZWXM0",
  authDomain: "chat-web-app-fcc93.firebaseapp.com",
  databaseURL: "https://chat-web-app-fcc93.firebaseio.com",
  projectId: "chat-web-app-fcc93",
  storageBucket: "chat-web-app-fcc93.appspot.com",
  messagingSenderId: "200275740760",
  appId: "1:200275740760:web:d7734405fc0cbeda4b622d"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export const database = app.database();