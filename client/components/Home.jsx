import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TransactionList from './TransactionList'
import CostBreakdown from './CostBreakdown'
import Welcome from './Welcome'

function Home() {
  const categories = useSelector((globalState) => globalState.categories)
  const transactionsData = useSelector(
    (globalState) => globalState.transactionsList
  )

  const [totals, setTotals] = useState([])

  useEffect(() => {
    const newTotals = computeTotals(categories, transactionsData)
    setTotals(newTotals)
  }, [transactionsData])
  return (
    <>
      {transactionsData.length !== 0 ? (
        <>
          <TransactionList />
          <CostBreakdown totals={totals} />
        </>
      ) : (
        <Welcome />
      )}
    </>
  )
}
export default Home

function computeTotals(categories, transactions) {
  const tally = {}
  for (let category of categories.list) {
    tally[category] = 0
  }
  transactions?.forEach((item) => {
    if (item.category !== '') {
      tally[item.category] += Math.abs(item.amount)
    }
  })

  const totals = categories.list.map((item) => {
    return {
      category: item,
      amount: roundCents(tally[item]),
      fill: categories.colourMap[item]
    }
  })

  return totals.filter((item) => item.amount > 0 || item.category === 'Income')
}

function roundCents(amount) {
  return Math.round(amount * 100) / 100
}
