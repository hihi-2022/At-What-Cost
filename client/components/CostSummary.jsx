import React from "react";
// import { useSelector } from "react-redux";

const totals = [{ category: 'Thing1', amount: 100 },
  { category: 'Thing2', amount: 1000 },
  { category: 'Thing3', amount: 50 },
  { category: 'Thing4', amount: 1.99 },
  { category: 'Thing5', amount: 350 },
]

function getTopExpenses(totals, maxItems) {
  totals.sort((item1, item2) => item2.amount - item1.amount)
  return totals.slice(0, maxItems)
}

function CostSummary() {
  // const totals = useSelector((globalState) => globalState.totals)
  const topExpenses = getTopExpenses(totals, 5)
  // console.log(topExpenses)
  return (
    <div>
      <h3>Top 5 expenses</h3>
      <ol>
        {topExpenses.map(item => <li key={item.category}>{`${item.category}: $${item.amount}`}</li>)}
      </ol>
    </div>
  )
}

export default CostSummary