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

const data = [
  {
      "Country": "Nigeria",
      "Population": "200m",
      "Continent": "Africa",
      "Official Language(s)": "English"
  },
  {
      "Country": "India",
      "Population": "1b",
      "Continent": "Asia",
      "Official Language(s)": "Hindi, English"
  },
  {
      "Country": "United States of America",
      "Population": "328m",
      "Continent": "North America",
      "Official Language": "English"
  },
  {
      "Country": "United Kingdom",
      "Population": "66m",
      "Continent": "Europe",
      "Official Language": "English"
  },
  {
      "Country": "Brazil",
      "Population": "209m",
      "Continent": "South America",
      "Official Language": "Portugese"
  }
]

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

  // download csv
  const download = function (data) {
 
    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([data], { type: 'text/csv' });
 
    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
 
    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')
 
    // Passing the blob downloading url
    a.setAttribute('href', url)
 
    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'download.csv');
 
    // Performing a download with click
    a.click()
}
 
const csvmaker = function (data) {
 
    // Empty array for storing the values
    const csvRows = [];
    
    const headers = Object.keys(data[0]);
 
    // As for making csv format, headers
    // must be separated by comma and
    // pushing it into array
    csvRows.push(headers.join(','));
 
    // Pushing Object values into array
    // with comma separation
    const values = Object.values(data.map(object => {return object})).join(',');
    csvRows.push(values)
 
    // Returning the array joining with new line
    return csvRows.join('\n')
}
 
const get = async function () {
 
  //get data
 
    const csvdata = csvmaker(data);
    download(csvdata);
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
            <TheButton buttonWord="Download" clickFn={get}/>
            <TheButton buttonWord="Sign In" />
            <TheButton buttonWord="Sign Up" />
            <TheButton buttonWord={'Upload'}/>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
