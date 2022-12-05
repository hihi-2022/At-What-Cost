import React from 'react'

import style from '../styles/CostBreakdown.module.scss'

function getTopExpenses(totals, maxItems) {
  totals.sort((item1, item2) => item2.amount - item1.amount)
  return totals.slice(0, maxItems)
}

function CostSummary({ totals }) {
  const topExpenses = getTopExpenses(totals, 5)

  return (
    <div>
      <h2 className={style.topExpenses}>Top 5 expenses</h2>
      <ol>
        {topExpenses.map((item, index) => (
          <li className={style.itemList} key={item.category}>{`${index + 1}. ${item.category}: $${item.amount}`}</li>
        ))}
      </ol>
    </div>
  )
}

export default CostSummary
