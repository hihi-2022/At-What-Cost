import React from 'react'
import CostSummary from './CostSummary'
import GraphSummary from './GraphSummary'

import style from '../styles/CostBreakdown.module.scss'

function CostBreakdown({ totals }) {
  return (
    <div className={style.container}>
      <div className={style.graphSummary}>
        <GraphSummary totals={totals} />
      </div>
      <div>
        <CostSummary totals={totals} />
      </div>
    </div>
  )
}

export default CostBreakdown
