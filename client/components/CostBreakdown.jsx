import React from 'react'
import CostSummary from './CostSummary'
import GraphSummary from './GraphSummary'

import style from '../styles/CostBreakdown.module.scss'

function CostBreakdown({ totals }) {
  return (
    <div className={style.container}>
      <h2>The CostBreakdown component</h2>
      <GraphSummary totals={totals} />
      <CostSummary totals={totals} />
    </div>
  )
}

export default CostBreakdown
