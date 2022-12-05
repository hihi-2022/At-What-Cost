import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TransactionItem from './TransactionItem'
import style from '../styles/TransactionList.module.scss'

function TransactionList() {
  const [data, setData] = useState()
  const [selection, setSelection] = useState('all')

  const transactionData = useSelector(
    (globalState) => globalState.transactionsList.sort((item1, item2) => item1.date - item2.date)
  )
  const colours = useSelector((globalState) => globalState.categories.colourMap)

  useEffect(() => {
    let selectedData = transactionData
    if (selection === 'unfiltered') {
      selectedData = selectedData.filter(item => item.category === '')
    } else if (selection === 'filtered') {
      selectedData = selectedData.filter(item => item.category !== '')
    }

    setData(selectedData)
  }, [transactionData, selection])

  const handleSelectionChange = (e) => {
    setSelection(e.target.value)
  }

  return (
    <div>
      <ul className={style.list}>
        {data?.map((transactionData, index) => {
          return <TransactionItem transactionData={transactionData} colours={colours} key={index} />
        })}
      </ul>
      <form>
        <input type="radio" id='all' name='all' value='all' checked={selection === 'all'} onChange={handleSelectionChange} />
        <label htmlFor='all'> all </label>
        <input type="radio" id='unfiltered' name='unfiltered' value='unfiltered' checked={selection === 'unfiltered'} onChange={handleSelectionChange} />
        <label htmlFor='unfiltered'> unfiltered </label>
        <input type="radio" id='filtered' name='filtered' value='filtered' checked={selection === 'filtered'} onChange={handleSelectionChange} />
        <label htmlFor='filtered'> filtered </label>
      </form>
    </div>
  )
}

export default TransactionList
