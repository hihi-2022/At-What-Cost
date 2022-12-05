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
    setData(transactionData)
  }, [transactionData])

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
      <form onChange={handleSelectionChange}>
        <input type="radio" id='all' name='all' value='all' checked={selection === 'all'} />
        <label htmlFor='all'> all </label>
        <input type="radio" id='filtered' name='filtered' value='filtered' checked={selection === 'filtered'} />
        <label htmlFor='filtered'> filtered </label>
        <input type="radio" id='unfiltered' name='unfiltered' value='unfiltered' checked={selection === 'unfiltered'} />
        <label htmlFor='unfiltered'> unfiltered </label>
      </form>
    </div>
  )
}

export default TransactionList
