import React from "react";
import { useDispatch } from "react-redux";
import { addFilterAction, editFilterAction, deleteFilterAction } from "../actions";

function TransactionItem({ transactionData }) {
  const dispatch = useDispatch()

  const addFilterHandler = () => {
    console.log('Add clicked with ', transactionData)
    transactionData.Category = 'A new category'
    dispatch(addFilterAction({code: transactionData.Code, category: 'Some category'}))
  }

  const editFilterHandler = () => {
    console.log('Edit clicked with ', transactionData)
    dispatch(editFilterAction(transactionData.Code, 'A different category'))
  }

  const deleteFilterHandler = () => {
    console.log('Delete clicked with ', transactionData)
    dispatch(deleteFilterAction(transactionData.Code, transactionData.category))
  }

  return (
    <li>
    {`${transactionData.Code} $${transactionData.Amount * -1} `}
    {
      transactionData.Category
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
