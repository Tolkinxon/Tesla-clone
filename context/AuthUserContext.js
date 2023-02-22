import { createContext, useContext } from 'react'
import useFirebaseAuth from '@/lib/useFirebaseAuth'

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: () => {},
  createUserWithEmailAndPassword: () => {},
  signOut: async () => {},
})

export function AuthUserProvider({ children }) {}
