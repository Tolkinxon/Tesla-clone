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
      return;
    }
  }
}
