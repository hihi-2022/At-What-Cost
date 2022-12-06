import React from 'react'
import CostSummary from './CostSummary'
import GraphSummary from './GraphSummary'
import Example from './Example'
import { useSelector } from 'react-redux'
import style from '../styles/CostBreakdown.module.scss'

function CostBreakdown({ totals }) {
  const filters = useSelector(globalState => globalState.filter)

  if(filters.length !== 0) {
    return (
      <div className={style.container}>
        <div className={style.graphSummary}>
          {/* <GraphSummary totals={totals} /> */}
          <Example />
        </div>
        <div>
          <CostSummary totals={totals} />
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
