import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { auth } from './firebase-config'

import Home from '../client/components/Home'

import styleNav from './styles/NavBar.module.scss'
import style from './styles/App.module.scss'

function App() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <main className={style.app}>
      <nav className={styleNav.nav}>
        <div className={styleNav.container}>
          <h1>AWC</h1>
          <div>
            <h3>Register User</h3>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value)
              }}
            />
            <input
              placeholder="Password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value)
              }}
            />
            <button onClick={register}> Create User</button>
          </div>

          <div>
            <h3>Login</h3>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value)
              }}
            />
            <input
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value)
              }}
            />
            <button onClick={login}>Login</button>
          </div>

          <h4> User Logged In/Hello:</h4>
          {user?.email}
          <button onClick={logout}> Sign Out</button>
        </div>
      </nav>
      <Home />
    </main>
  )
}

export default App
