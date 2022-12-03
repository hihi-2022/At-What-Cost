import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TransactionItem from './TransactionItem'
import style from '../styles/TransactionList.module.scss'

function TransactionList() {
  const [data, setData] = useState()

  const transactionData = useSelector(
    (globalState) => globalState.transactionsList
  )

  useEffect(() => {
    transactionData.sort((item1, item2) => item1.date - item2.date)
    setData(transactionData)
  }, [transactionData])

  return (
    <ul className={style.list}>
      {data?.map((transactionData, index) => {
        return <TransactionItem transactionData={transactionData} key={index} />
      })}
    </ul>
  )
}

export default TransactionList
