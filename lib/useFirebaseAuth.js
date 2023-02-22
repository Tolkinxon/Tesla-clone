import { useState, useEffect } from 'react'
import firebase from './firebase'

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async () => {
    if (!authState) {
      setLoading(false)
      return
    }
    setLoading(true)
    var formattedUser = formatAuthUser(authState)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  const clear = () => {
    setAuthUser(null)
    setLoading(true)
  }
  //Login
  const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  }
  //Register
  const createUserWithEmailAndPassword = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  //Log out
  const signOut = () => {
    firebase.auth().signOut().then(clear)
  }

  useEffect(() => {}, [])
}
