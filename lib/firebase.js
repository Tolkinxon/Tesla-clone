import firebase from 'firebase/app'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAx0uPbx70rq4CWw9iwpKP04VOrDl_6Wys',
  authDomain: 'tesla-98a23.firebaseapp.com',
  projectId: 'tesla-98a23',
  storageBucket: 'tesla-98a23.appspot.com',
  messagingSenderId: '951104953353',
  appId: '1:951104953353:web:e8d383f86bfc693dc76cd8',
  measurementId: 'G-NDF02X67KQ',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
