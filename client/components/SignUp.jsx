import React from 'react'

function SignUp() {
  return (
    <main>
      <form>
        <label htmlFor="user-email">Email:</label>
        <input id="user-email" type="email" required />
        <label htmlFor="user-password">Password:</label>
        <input id="user-password" type="password" required />
      </form>
    </main>
  )
}
export default SignUp
