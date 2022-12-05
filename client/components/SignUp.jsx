import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import style from '../styles/SignUp.module.scss'
import { app } from '../../firebase'

function SignUp() {
  const auth = getAuth(app)
  const [userDetails, setUserDetails] = useState({
    userEmail: '',
    userPassword: '',
  })

  const { userEmail: email, userPassword: password } = userDetails

  const handleChange = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(credentials.user)
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
        <button type="submit">Sign Up</button>
      </form>
    </main>
  )
}
export default SignUp
