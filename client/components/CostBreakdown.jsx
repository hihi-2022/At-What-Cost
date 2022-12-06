import React from 'react'
import CostSummary from './CostSummary'
import GraphSummary from './GraphSummary'
import { useSelector } from 'react-redux'
import style from '../styles/CostBreakdown.module.scss'

function CostBreakdown({ totals }) {
  const filters = useSelector(globalState => globalState.filter)

  const expenseTotals = totals.filter(item => item.category !== 'Income' && item.category !== 'Transfer')
  const incomeTotal = totals.filter(item => item.category === 'Income')

  if(filters.length !== 0) {
    return (
      <div className={style.container}>
        <div className={style.graphSummary}>
          <GraphSummary incomeTotal={incomeTotal} expenseTotals={expenseTotals} />
        </div>
        <div>
          <CostSummary totals={expenseTotals} />
        </div>
      </div>
    )
  }
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Add categories to see your spending breakdown graph</h2>
    </div>
  )
}

export default CostBreakdown
