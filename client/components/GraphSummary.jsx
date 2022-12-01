import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts'

// const totals = [
//   { category: 'Thing1', amount: 100, fill: 'red' },
//   { category: 'Thing2', amount: 1000, fill: 'blue' },
//   { category: 'Thing3', amount: 50, fill: 'green' },
//   { category: 'Thing4', amount: 25, fill: 'yellow' },
//   { category: 'Thing5', amount: 350, fill: 'cyan' },
// ]

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
            // fill="#8884d8"
            // labelLine={false}
            label={(item) => item.category}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphSummary
