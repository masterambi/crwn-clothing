import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAQAW2bu7ADlxRz1p3iWUGA16h3QZVAp7I',
  authDomain: 'crwn-db-a97bf.firebaseapp.com',
  projectId: 'crwn-db-a97bf',
  storageBucket: 'crwn-db-a97bf.appspot.com',
  messagingSenderId: '360886935182',
  appId: '1:360886935182:web:fb3cc58a2df493ed1db3df',
  measurementId: 'G-XF7Z1QMVFH',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
