import React from 'react'
import style from '../styles/NavBar.module.scss'

import NavBar from './Dashboard'


import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function Login () {

   const { user, logout, loginWithRedirect } = useAuth0()

   const handleLogOff = (e) => {
     e.preventDefault()
     logout()
   }
 
   const handleSignIn = (e) => {
     e.preventDefault()
     loginWithRedirect()
   }
 
 
 

  return (
    <nav className={style.nav}>
    <div className={style.container}></div>
    <>
   
    <IfAuthenticated>
          <NavBar to="/" onClick={handleLogOff}>
            Log off
          </NavBar>
          <p>{user?.nickname}</p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavBar to="/" onClick={handleSignIn}>
            Sign In
          </NavBar>
        </IfNotAuthenticated>
  </>
  </nav>
  )
}
export default Login
