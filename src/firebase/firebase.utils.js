import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyCV2VXgWgX6s6dYNMxDJqzyPYbYuovChm8",
    authDomain: "crwn-db-47c5f.firebaseapp.com",
    projectId: "crwn-db-47c5f",
    storageBucket: "crwn-db-47c5f.appspot.com",
    messagingSenderId: "207168321837",
    appId: "1:207168321837:web:e964a9bbe7fdd098da3ba4"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return //if null then don't do it
  const userRef = firestore.doc(`users/${userAuth.uid}`); //we get Reference
  const snapShot = await userRef.get(); //it has exist property which will tell us if the user exists or not
  
  if(!snapShot.exists){
    const { displayName , email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    }catch(error){
        console.log('error creating user' , error.message);
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    //console.log(newDocRef)
    batch.set(newDocRef , obj);
  });

 //returns promise

  return await batch.commit();
}

export const converCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => { 
    const { title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
 