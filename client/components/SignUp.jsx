import React from 'react'
import style from '../styles/SignUp.module.scss'

function SignUp() {
  return (
    <main className={style.container}>
      <form className={style.form}>
        <h1 className={style.heading}>Sign Up Below:</h1>
        <div className={style.form_control}>
          <label htmlFor="user-email">Email:</label>
          <input id="user-email" type="email" required />
        </div>
        <div className={style.form_control}>
          <label htmlFor="user-password">Password:</label>
          <input id="user-password" type="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  )
}
export default SignUp
