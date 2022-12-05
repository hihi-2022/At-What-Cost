import React from "react";
import { useDispatch } from "react-redux";
import style from "../styles/Button.module.scss"
import { showCsvModal } from '../actions'

function TheButton ({buttonWord}) {
  const dispatch = useDispatch()
  
  function buttonClicked (e) {
    e.preventDefault()
    if(buttonWord === "Upload Csv") {
      dispatch(showCsvModal())
    }
  }

  return (
    <button onClick={buttonClicked} className={style.TheButton}>
      {buttonWord}
    </button>
  )
}

export default TheButton