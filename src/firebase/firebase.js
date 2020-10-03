import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyByzuPUzfvLIPvMlGq0ovPGocIRF8PRvfc",
    authDomain: "alter-ego-42fd3.firebaseapp.com",
    databaseURL: "https://alter-ego-42fd3.firebaseio.com",
    projectId: "alter-ego-42fd3",
    storageBucket: "alter-ego-42fd3.appspot.com",
    messagingSenderId: "637853199136",
    appId: "1:637853199136:web:98e4a3017fb28f67618545",
    measurementId: "G-2G4B3NC6K6"
  };
  
//   export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if(!userAuth) return;

//     const userRef = firestore.doc(`users/${userAuth.uid}`);

//     const snapShot = await userRef.get();

//     if(!snapShot.exists) {
//         const { displayName,email } = userAuth;
//         const createdAt = new Date();

//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             })
//         } catch (error) {
//             console.log('error creating user', error.message);
//         }
//     }

//     return userRef;
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;