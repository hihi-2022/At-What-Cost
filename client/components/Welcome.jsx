import React, { useState, useEffect } from 'react'

import style from '../styles/Welcome.module.scss'
import { doseOfWisdom } from '../bestAndWorstFinancialAdvice'
import { badWisdom } from '../badWisdom'

function Welcome() {
  const [wisdom, setWisdom] = useState({
    quote:
      'You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in wonderland and I show you how deep the rabbit-hole goes.',
    author: 'Morpheus',
  })
  const [incrementNum, setIncrementNum] = useState(0)
  const [nothing, setId] = useState(null)
  const [quote, setQuote] = useState(0)

  function randomArrNum(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  function checkNumber(number) {
    if (number % 2 === 0) {
      setWisdom(badWisdom[randomArrNum(badWisdom)])
    } else if (number % 2 !== 0) {
      setWisdom(doseOfWisdom[randomArrNum(doseOfWisdom)])
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIncrementNum((inc) => {
        checkNumber(inc)
        return inc + 1
      })
      setQuote((inc) => {
        return inc + 1
      })
    }, 8000)

    setId(intervalId) // idk - but its important??

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
        At What Cost is a financial tracking website you can use to visualise
        your bank transactions and sort them into categories. It&apos;s so easy
        to use, just go to the upload button and give us a csv file from your
        bank and watch the magic happen. If you want us to save your filters,
        just sign up and we&apos;ll do that for you. You can also try out this
        site using sample data, just click on the &quot;Example CSV&quot; button
        to download a csv file of sample data.
      </p>
      <div className={style.matrix}>
        {quote % 2 === 0 ? <h3>Red Pill</h3> : <h3>Blue Pill</h3>}
        <p>
          {wisdom.quote} - {wisdom.author}
        </p>
      </div>
    </div>
  )
}

export default Welcome
