import React from 'react'
import CostBreakdown from './CostBreakdown'
import NavBar from './NavBar'
import TransactionList from './TransactionList'
import Welcome from './Welcome'

import NavBar from './NavBar' 

function App() {
  return (
    <>
      <NavBar />
      <header className="header">
        <h1>App component: At what cost</h1>
      </header>
      <section className="main">
        {
          true ? 
            <>
              <TransactionList />
              <CostBreakdown />
            </>
            :
          <Welcome />
        }
      </section>
    </>
  )
}

export default App
