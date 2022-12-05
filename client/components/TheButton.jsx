import React from "react";
import { useDispatch } from "react-redux";
import style from "../styles/Button.module.scss"
import { showCsvModalAction } from '../actions'

function TheButton ({buttonWord}) {
  const dispatch = useDispatch()
  
  function buttonClicked (e) {
    e.preventDefault()
    if(buttonWord === "Upload Csv") {
      dispatch(showCsvModalAction())
    }
  }

  return (
    <button onClick={buttonClicked} className={style.TheButton}>
      {buttonWord}
    </button>
  )
}

export default TheButton