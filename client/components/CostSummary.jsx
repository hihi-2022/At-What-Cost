import React from 'react'

function getTopExpenses(totals, maxItems) {
  totals.sort((item1, item2) => item2.amount - item1.amount)
  return totals.slice(0, maxItems)
}

function CostSummary({ totals }) {
  const topExpenses = getTopExpenses(totals, 5)

  return (
    <div>
      <h3>Top 5 expenses</h3>
      <ol>
        {topExpenses.map((item) => (
          <li key={item.category}>{`${item.category}: $${item.amount}`}</li>
        ))}
      </ol>
    </div>
  )
}

export default CostSummary
