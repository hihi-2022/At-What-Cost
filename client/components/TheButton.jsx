import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import style from '../styles/Button.module.scss'
import { showCsvModalAction } from '../actions'

function TheButton({ buttonWord, clickFn }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function buttonClicked(e) {
    e.preventDefault()
    if (buttonWord === 'Upload') {
      return dispatch(showCsvModalAction())
    }
    if (buttonWord === 'Sign In') {
      return navigate('/signin')
    }
    if (buttonWord === 'Sign Up') {
      return navigate('/signup')
    }
    if (buttonWord === 'Logout') {
      return clickFn()
    }
    if (buttonWord === 'Example Csv') {
      return clickFn()
    }
    if (buttonWord === 'CLEAR Firestore') {
      return clickFn()
    }
  }

  return (
    <button onClick={buttonClicked} className={style.TheButton}>
      {buttonWord}
    </button>
  )
}

export default TheButton
