import React from 'react'

import style from '../styles/CostSummary.module.scss'

function getTopExpenses(totals, maxItems) {
  totals.sort((item1, item2) => item2.amount - item1.amount)
  return totals.slice(0, maxItems)
}

function CostSummary({ totals }) {
  const topExpenses = getTopExpenses(totals, 5)

  return (
    <div className={style.container}>
      <h2 className={style.title}>Top Expenses</h2>
      <ol className={style.summaryList}>
        {topExpenses.map((item, index) => (
          <li className={style.itemList} key={item.category}>{`${index + 1}. ${
            item.category
          }: $${item.amount}`}</li>
        ))}
      </ol>
    </div>
  )
}

export default CostSummary
