import React from "react";
import { useDispatch } from "react-redux";
import { addFilterAction, editFilterAction, deleteFilterAction } from "../actions";

function TransactionItem({ transactionData }) {
  const dispatch = useDispatch()

  const addFilterHandler = () => {
    console.log('Add clicked with ', transactionData)
    transactionData.category = 'A new category'
    dispatch(addFilterAction({code: transactionData.code, category: 'Some category'}))
  }

  const editFilterHandler = () => {
    console.log('Edit clicked with ', transactionData)
    dispatch(editFilterAction(transactionData.code, 'A different category'))
  }

  const deleteFilterHandler = () => {
    console.log('Delete clicked with ', transactionData)
    dispatch(deleteFilterAction(transactionData.code))
  }

  return (
    <li>
    {`${transactionData.code} $${transactionData.amount * -1} `}
    {
      transactionData.category
        ?
      <>
        <button onClick={editFilterHandler}>Edit</button>
        <button onClick={deleteFilterHandler}>Delete</button>
      </>
        :
      <button onClick={addFilterHandler}>Add</button>
    }
    </li>
  )
}

export default TransactionItem
