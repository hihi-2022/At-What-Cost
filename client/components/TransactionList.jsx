import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import TransactionItem from "./TransactionItem";

function TransactionList() {

  const [ data, setData ] = useState()

  const transactionData = useSelector(globalState => globalState.transactionsList)

  useEffect(() => {
    setData(transactionData)
  }, [transactionData])

  return (
    <>
      <ul>
        {data?.map((transactionData, index) => {
          return <TransactionItem transactionData={transactionData} key={index} />
        })}
      </ul>
    </>
  )
}

export default TransactionList