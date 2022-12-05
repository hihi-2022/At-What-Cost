import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CostBreakdown from './CostBreakdown'
import NavBar from './NavBar'
import TransactionList from './TransactionList'
import Welcome from './Welcome'

import style from '../styles/App.module.scss'
import Modal from './Modal'

function roundCents(amount) {
  return Math.round(amount * 100) / 100
}

function computeTotals(categories, colours, transactions) {
  const tally = {}
  for (let category of categories) {
    tally[category] = 0
  }
  transactions?.forEach((item) => {
    if (item.category !== '') {
      tally[item.category] += Math.abs(item.amount)
    }
  })

  const totals = categories.map((item) => {
    return {
      category: item,
      amount: roundCents(tally[item]),
      fill: colours[item]
    }
  })

  return totals.filter(item => item.amount > 0)
}

function App() {
  const categories = useSelector((globalState) => globalState.categories.list)
  const colours = useSelector((globalState) => globalState.categories.colourMap)
  const transactionsData = useSelector(globalState => globalState.transactionsList)

  const [totals, setTotals] = useState([])

  useEffect(() => {
    const newTotals = computeTotals(categories, colours, transactionsData) 
    setTotals(newTotals)
  },[transactionsData])

  return (
    <main className={style.app}>
      <NavBar />
      <Modal />
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
