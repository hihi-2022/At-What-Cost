import React, { useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'
import style from '../styles/GraphSummary.module.scss'

function constructBarChartData(incomeTotal, expenseTotals) {
  expenseTotals.sort((item1, item2) => item2.amount - item1.amount)
  const dataItem = {
    name: 'Income vs expenses',
    income: incomeTotal[0].amount,
    'prev-0': incomeTotal[0].amount
  }

  const bars = [
    {dataKey: 'income', stackId: '0', fill: incomeTotal[0].fill}
  ]

  for (let i = 0; i < expenseTotals.length; i++) {
    const expenseItem = expenseTotals[i]
    dataItem[`prev-${i + 1}`] = dataItem[`prev-${i}`] - expenseItem.amount
    dataItem[expenseItem.category] = expenseItem.amount

    bars.push({ dataKey: `prev-${i + 1}`, stackId: `${i + 1}`, fill: 'none' })
    bars.push({ dataKey: expenseItem.category, stackId: `${i + 1}`, fill: expenseItem.fill })
  }

  return [[dataItem], bars]
}

function GraphSummary({ incomeTotal, expenseTotals }) {
  const [graph, setGraph] = useState('pie')
  const [barChartData, bars] = constructBarChartData(incomeTotal, expenseTotals)

function GraphSummary({ expenseTotals }) {
  return (
    <div style={{ width: '500px', height: '200px' }}>
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
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphSummary
