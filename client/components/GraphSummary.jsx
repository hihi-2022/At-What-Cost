import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts'

function GraphSummary({ totals }) {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <h3>The GraphSummary component</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="amount"
            nameKey="category"
            isAnimationActive={false}
            data={totals}
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={(item) => item.category}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphSummary
