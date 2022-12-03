import React from 'react'
import { useSelector } from 'react-redux'
// import CostBreakdown from './CostBreakdown'
import Login from './Login'
// import TransactionList from './TransactionList'
import Welcome from './Welcome'

import style from '../styles/App.module.scss'

function App() {


  return (
    <main className={style.app}>
      <Login />
      <Welcome />
      {/* {true ? (
        <>
          <TransactionList />
          <CostBreakdown totals={totals} />
        </>
      ) : (
        <Welcome />
      )} */}
    </main>
  )
}

export default App
