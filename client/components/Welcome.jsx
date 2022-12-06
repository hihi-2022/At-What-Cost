import React from "react";

import style from '../styles/welcome.module.scss'

function Welcome() {
  return (
    <div className={style.page}>
      <img className={style.welcomePageImage} src="/assets/welcomePageImage.jpg" alt="money" />
      <h2>AT WHAT COST!</h2>
      <p>
        At What Cost is a financial tracking website they can visualise your bank transactions and sort them into categories.
        It's so easy to use, just go to the upload button and give us a csv file from your bank and watch the magic happen.
        If you want us to hold your saved categories, just sign up and we'll do it for you.
      </p>
    </div>
  )
  
}

export default Welcome