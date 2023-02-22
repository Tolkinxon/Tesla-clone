import { useState, useEffect } from 'react'
import firebase from './firebase'

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
})

export default function useFirebaseAuth() {}
