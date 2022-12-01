import React from 'react'
import CostBreakdown from './CostBreakdown'
import NavBar from './NavBar'
import TransactionList from './TransactionList'
import Welcome from './Welcome'

// Example data for CostBreakdown and child components
const totals = [
  { category: 'Thing1', amount: 100, fill: 'red' },
  { category: 'Thing2', amount: 1000, fill: 'blue' },
  { category: 'Thing3', amount: 50, fill: 'green' },
  { category: 'Thing4', amount: 25, fill: 'yellow' },
  { category: 'Thing5', amount: 350, fill: 'cyan' },
]

function App() {
  return (
    <>
      <NavBar />
      <header className="header">
        <h1>App component: At what cost</h1>
      </header>
      <section className="main">
        {true ? (
          <>
            <TransactionList />
            <CostBreakdown totals={totals} />
          </>
        ) : (
          <Welcome />
        )}
      </section>
    </>
  )
}

export default App
