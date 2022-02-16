import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC5o0C12uFBqEONedk-x_RbMMlow5gfGeE",
    authDomain: "algoders-community-image-saver.firebaseapp.com",
    projectId: "algoders-community-image-saver",
    storageBucket: "algoders-community-image-saver.appspot.com",
    messagingSenderId: "175202292765",
    appId: "1:175202292765:web:7d2191340c1a6d716ea2f4"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
  export {storage,firebase as default};