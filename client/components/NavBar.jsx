/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import style from '../styles/NavBar.module.scss'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import TheButton from './TheButton'
import { useDispatch } from 'react-redux'
import { receieveUserFiltersThunk } from '../actions'

import logos from '../logos'

const colours = ['#f69301', '#2c993e', '#8e01e6', '#e500b3', '#37a6cc', '#4c5efe', '#f51a1c', '#257f61']

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [color, setcolor] = useState('#F2F2F2')
  const [ logo, setLogo ] = useState("At What Cost")
  const [ arrNum, setArrNum ] = useState(randomArrayNumber())

  function randomArrayNumber() {
    const number = Math.floor(Math.random() * logos.length)
    return number
  }

  function setLogoName(number) {
    if (number === arrNum) {
      if (logos.length - 1 === number) {
        setArrNum(0)
      } else {
        setArrNum(number + 1)
      }
    } else {
      setArrNum(number)
    }
    setLogo(logos[arrNum].name)
  }

  function changeLogo() {
    changeColor()
    setLogoName(arrNum)
  }

  function changeColor() {
    const randomIdx = Math.floor(Math.random() * colours.length)
    setcolor(colours[randomIdx])
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
        <h1 onClick={changeLogo} style={{ color: `${color}`, cursor: 'pointer' }}>AWC - {logo}</h1>
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
