import React from 'react'
import { useSelector } from 'react-redux'
import CostBreakdown from './CostBreakdown'
import NavBar from './NavBar'
import TransactionList from './TransactionList'
import Welcome from './Welcome'

import style from '../styles/App.module.scss'
import { transactions } from '../../sample_data/transactions'

function computeTotals(categories, transactions) {
  const tally = {}
  for (let category of categories) {
    tally[category] = 0
  }
  transactions.forEach((item) => {
    tally[item.category] += item.amount
  })

  const totals = categories.map((item) => {
    return {
      category: item,
      amount: tally[item],
      fill: `#${Number(Math.floor(Math.random() * 0x1000000)).toString(16)}`,
    }
  })

  return totals
}

function App() {
  const categories = useSelector((globalState) => globalState.categories)

  const totals = computeTotals(categories, transactions)

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
