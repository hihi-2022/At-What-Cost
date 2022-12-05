import React, { useState } from 'react'
import style from '../styles/NavBar.module.scss'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import TheButton from './TheButton'

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const auth = getAuth(app)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  })

  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <h1>AWC</h1>
        {isLoggedIn ? (
          <div className={style.navlinks}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className={style.navlinks}>
            <TheButton buttonWord="Sign In" />
            <TheButton buttonWord="Sign Up" />
            <TheButton buttonWord={'Upload'} />
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
