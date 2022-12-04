import React from "react";
import { useDispatch } from "react-redux";

import style from '../styles/transactionItem.module.scss'
import { deleteFilterAction, applyFilterAction, modalAddAction, modalEditAction } from "../actions";

function TransactionItem({ transactionData }) {
  const dispatch = useDispatch()

  const addFilterHandler = () => {
    dispatch(modalAddAction(transactionData.code))
  }

  const editFilterHandler = () => {
    dispatch(modalEditAction(transactionData.code))
  }

  const deleteFilterHandler = () => {
    dispatch(deleteFilterAction(transactionData.code))
    dispatch(applyFilterAction(transactionData.code, ''))
  }

  return (
    <li>
      <div>
        {transactionData.code}
      </div>
      <div>
        ${transactionData.amount * -1} 
      </div>
    {
      transactionData.category
        ?
      <div>
        <button className={style.editButton} onClick={editFilterHandler}>Edit</button>
        <button className={style.deleteButton} onClick={deleteFilterHandler}>Delete</button>
      </div>
        :
      <button className={style.addButton} onClick={addFilterHandler}>Add</button>
    }
    </li>
  )
}

export default TransactionItem
