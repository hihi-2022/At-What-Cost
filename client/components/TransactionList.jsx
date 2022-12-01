import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

function TransactionList() {

  const [ data, setData ] = useState()

  const transactionData = useSelector(globalState => globalState.transactionsList)

  useEffect(() => {
    setData(transactionData)
  }, [transactionData])

  return (
    <>
      <ul>
        {data?.map((dataObj, index) => {
          return <li key={index}>{`${dataObj.Code} $${dataObj.Amount * -1}`}</li> 
        })}
      </ul>
    </>
  )
}

export default TransactionList