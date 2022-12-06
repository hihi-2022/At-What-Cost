import React, { useState, useEffect } from 'react'
import style from '../styles/NavBar.module.scss'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import TheButton from './TheButton'
import { useDispatch } from 'react-redux'
import { receieveUserFiltersThunk } from '../actions'

const logos = [
  {
    name: "AWS"
  },
  {
    name: "Actual Working Code"
  },
  {
    name: "Anti Working Culture"
  },
  {
    name: "Any Way Cuz"
  },
  {
    name: "At What Cost"
  },
  {
    name: "AWC"
  },
  {
    name: "Avocado With Cheese"
  },
  {
    name: "Ashley Welcomes Camels"
  },
]

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [color, setcolor] = useState('#F2F2F2')
  const [ logo, setLogo ] = useState("AWC")
  const [ arrNum, setArrNum ] = useState(randomArrayNumber())

  function randomArrayNumber()  {
    const number = Math.floor(Math.random() * logos.length)
    return number
  }

  function setLogoName(number) {
     if(number === arrNum) {
      if(logos.length - 1 === number) {
        setArrNum(0)
      } else {
      setArrNum(number + 1)
      }
    } else {
      setArrNum(number)
    }
    setLogo(logos[arrNum].name)
  }

  function changeColor () {
    let number = randomArrayNumber()

    setLogoName(number)
    
    let maxVal = 0xFFFFFF
    let randomNumber = Math. random() * maxVal
    randomNumber = Math. floor(randomNumber)
    randomNumber = randomNumber. toString(16)
    let randColor = randomNumber. padStart(6, 0)
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
        <h1 onClick={changeColor} style={{color: `${color}`, cursor: 'pointer'}}>{logo}</h1>
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
