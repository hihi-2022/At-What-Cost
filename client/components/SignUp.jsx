import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import style from '../styles/SignUp.module.scss'
import { app } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    userEmail: '',
    userPassword: '',
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return navigate('/')
      }
    })
  }, [])

  const { userEmail: email, userPassword: password } = userDetails

  const handleChange = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <main className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.heading}>Sign Up Below:</h1>
        <div className={style.form_control}>
          <label htmlFor="userEmail">Email:</label>
          <input onChange={handleChange} id="userEmail" type="email" required />
        </div>
        <div className={style.form_control}>
          <label htmlFor="userPassword">Password:</label>
          <input
            onChange={handleChange}
            id="userPassword"
            type="password"
            required
          />
        </div>
        <button style={{ cursor: 'pointer' }} type="submit">
          Sign Up
        </button>
      </form>
    </main>
  )
}
export default SignUp
