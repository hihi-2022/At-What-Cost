import React from "react";
import { useDispatch } from "react-redux";
import { addFilterAction, editFilterAction, deleteFilterAction, applyFilterAction } from "../actions";

function TransactionItem({ transactionData }) {
  const dispatch = useDispatch()

  const addFilterHandler = () => {
    dispatch(addFilterAction({ code: transactionData.code, category: 'Some category' }))
    dispatch(applyFilterAction(transactionData.code, 'Some category'))
  }

  const editFilterHandler = () => {
    dispatch(editFilterAction(transactionData.code, 'A different category'))
    dispatch(applyFilterAction(transactionData.code, 'A different category'))
  }

  const deleteFilterHandler = () => {
    dispatch(deleteFilterAction(transactionData.code))
    dispatch(applyFilterAction(transactionData.code, ''))
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
