import React from 'react'
import { useSelector } from 'react-redux'
import CostBreakdown from './CostBreakdown'
import NavBar from './NavBar'
import TransactionList from './TransactionList'
import Welcome from './Welcome'

import style from '../styles/App.module.scss'

function App() {
  const categories = useSelector((globalState) => globalState.categories)

  // Example data for CostBreakdown and child components
  const totals = categories.map((item) => {
    return {
      category: item,
      amount: Math.floor(100 + Math.random() * 300),
      fill: `#${Number(Math.floor(Math.random() * 0x1000000)).toString(16)}`,
    }
  })

  return (
    <main className={style.app}>
      <NavBar />
      {true ? (
        <>
          <TransactionList />
          <CostBreakdown totals={totals} />
        </>
      ) : (
        <Welcome />
      )}
    </main>
  )
}

export default App
