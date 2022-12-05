import React, { useState } from 'react'
import style from '../styles/NavBar.module.scss'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import TheButton from './TheButton'
import { Link } from 'react-router-dom'

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
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        <div className={style.navBarList}>
          <TheButton buttonWord={'Upload Csv'} />
        </div>
      </div>
    </nav>
  )
}
export default NavBar
