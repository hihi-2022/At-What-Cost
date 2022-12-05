import React from "react";
import { useDispatch, useSelector } from "react-redux";

import style from '../styles/transactionItem.module.scss'
import { deleteFilterAction, applyFilterAction, modalAddAction, modalEditAction } from "../actions";

function TransactionItem({ transactionData, colours }) {
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
      <div className={style.date}>
        {transactionData.date.toLocaleDateString('en-NZ', {})}
      </div>
      <div className={style.code}>
        {transactionData.code}
      </div>
      <div className={style.category}>
        {
          transactionData.category
          ?
            <div className={style.categoryLabel} style={{backgroundColor: colours[transactionData.category]}}>
            {transactionData.category}
          </div>
          :
          <div></div>
        }
      </div>
      <div className={style.amount}>
        ${transactionData.amount * -1} 
      </div>
      {
        transactionData.category
          ?
          <div className={style.buttons}>
          <button className={style.editButton} onClick={editFilterHandler}>Edit</button>
          <button className={style.deleteButton} onClick={deleteFilterHandler}>Delete</button>
        </div>
          :
        <div className = {style.buttons}>
          <button className={style.addButton} onClick={addFilterHandler}>Add</button>
        </div>
      }
    </li>
  )
}

export default TransactionItem
