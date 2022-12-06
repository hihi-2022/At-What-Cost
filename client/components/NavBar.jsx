import React, { useState } from 'react'
import style from '../styles/NavBar.module.scss'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import TheButton from './TheButton'
import { useDispatch } from 'react-redux'
import { receieveUserFiltersThunk } from '../actions'
import { useEffect } from 'react'

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [color, setcolor] = useState('#F2F2F2')

  function changeColor () {
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math. random() * maxVal;
    randomNumber = Math. floor(randomNumber);
    randomNumber = randomNumber. toString(16);
    let randColor = randomNumber. padStart(6, 0);
    console.log("hello", randColor)
    setcolor(`#${randColor}`)
  }

  const auth = getAuth(app)
  const dispatch = useDispatch()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
      dispatch(receieveUserFiltersThunk(user.uid))
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
        <h1 onClick={changeColor} style={{color: `${color}`, cursor: 'pointer'}}>AWC</h1>
        {isLoggedIn ? (
          <div className={style.navlinks}>
            <TheButton buttonWord={'Upload'} />
            <TheButton buttonWord={'Logout'} clickFn={handleLogout} />
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
