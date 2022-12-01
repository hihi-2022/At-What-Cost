import React from 'react'
import CostSummary from './CostSummary'
import GraphSummary from './GraphSummary'

function CostBreakdown({ totals }) {
  return (
    <div>
      <h2>The CostBreakdown component</h2>
      <GraphSummary totals={totals} />
      <CostSummary totals={totals} />
    </div>
  )
}

export default CostBreakdown
