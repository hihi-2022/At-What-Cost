import React, { useState, useEffect } from "react";

import style from '../styles/Welcome.module.scss'
import { doseOfWisdom } from "../doseOfWisdom";

function Welcome() {
  const [wisdom, setWisdom] = useState({})

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * doseOfWisdom.length)
    setWisdom(doseOfWisdom[randomIndex])
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * doseOfWisdom.length)
      setWisdom(doseOfWisdom[randomIndex])
    }, 5000)
    
    return () => clearInterval(intervalId)
  }, [])
 
  return (
    <div className={style.page}>
      <img className={style.welcomePageImage} src="/assets/welcomePageImage.jpg" alt="money" />
      <h2>AT WHAT COST!</h2>
      <p>
        At What Cost is a financial tracking website they can visualise your bank transactions and sort them into categories.
        It's so easy to use, just go to the upload button and give us a csv file from your bank and watch the magic happen.
        If you want us to hold your saved categories, just sign up and we'll do it for you.
      </p>
      <p>{wisdom.quote} - {wisdom.author}</p>
    </div>
  )
  
}

export default Welcome