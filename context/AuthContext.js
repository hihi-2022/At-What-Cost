import { createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import { auth } from '../firebase-config'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <UserContext.Provider value={createUser}>{children}</UserContext.Provider>
  )
}

export const UserAuth = () => {
  return UserContext(UserContext)
}
