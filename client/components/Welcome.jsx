import React, { useState, useEffect } from 'react'

import style from '../styles/Welcome.module.scss'
import { doseOfWisdom } from '../bestAndWorstFinancialAdvice'
import { badWisdom } from '../badWisdom'

function Welcome() {
  const [wisdom, setWisdom] = useState({})
  const [badWisdomNum, setBadWisdomNum] = useState(0)
  const [goodWisdomNum, setGoodWisdomNum] = useState(0)
  const [incrementNum, setIncrementNum] = useState(0)

  function randomArrNum(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  function checkNumber() {
    if (incrementNum % 2 === 0 ){
      setWisdom(doseOfWisdom[randomArrNum(doseOfWisdom)])
    } else if (incrementNum % 2 !== 0) {
      setWisdom(badWisdom[randomArrNum(badWisdom)])
    }
    setIncrementNum(incrementNum+1)
    console.log(incrementNum)
  }

  // useEffect(() => {
  //   setIncrementNum(incrementNum + 1)
  //   console.log(incrementNum)
  // }, [wisdom])

  useEffect(() => {
    setWisdom(doseOfWisdom[0]) 
    
    const intervalId = setInterval(() => {
      checkNumber()
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])



  return (
    <div className={style.page}>
      <img
        className={style.welcomePageImage}
        src="/assets/welcomePageImage.jpg"
        alt="money"
      />
      <h2>AT WHAT COST!</h2>
      <p>
        At What Cost is a financial tracking website they can visualise your
        bank transactions and sort them into categories. It's so easy to use,
        just go to the upload button and give us a csv file from your bank and
        watch the magic happen. If you want us to hold your saved categories,
        just sign up and we'll do it for you.
      </p>
      <div>
          <h3>Quotes</h3>
          <p>
            {wisdom.quote} - {wisdom.author}
          </p>
        </div>
    </div>
  )
}

export default Welcome
