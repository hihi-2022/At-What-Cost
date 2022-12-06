import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts'

function GraphSummary({ incomeTotal, expenseTotals }) {
  if (true) {
    return (
      <div style={{ width: '500px', height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="amount"
              nameKey="category"
              isAnimationActive={false}
              data={expenseTotals}
              cx="50%"
              cy="50%"
              outerRadius={80}
            />
            <Legend layout='vertical' align='right' verticalAlign='middle' />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default GraphSummary
