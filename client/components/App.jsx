import React from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'

import style from '../styles/App.module.scss'
import Home from './Home'
import Modal from './Modal'

function roundCents(amount) {
  return Math.round(amount * 100) / 100
}

function computeTotals(categories, colours, transactions) {
  const tally = {}
  for (let category of categories) {
    tally[category] = 0
  }
  transactions?.forEach((item) => {
    if (item.category !== '') {
      tally[item.category] += Math.abs(item.amount)
    }
  })

  const totals = categories.map((item) => {
    return {
      category: item,
      amount: roundCents(tally[item]),
      fill: colours[item]
    }
  })

  return totals.filter(item => item.amount > 0)
}

function App() {
  const categories = useSelector((globalState) => globalState.categories.list)
  const colours = useSelector((globalState) => globalState.categories.colourMap)
  const transactionsData = useSelector(globalState => globalState.transactionsList)

  const [totals, setTotals] = useState([])

  useEffect(() => {
    const newTotals = computeTotals(categories, colours, transactionsData) 
    setTotals(newTotals)
  },[transactionsData])

  return (
    <main className={style.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Modal />
    </main>
  )
}

export default App
