import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import style from '../styles/transactionItem.module.scss'
import {
  deleteFilterAction,
  applyFilterAction,
  modalAddAction,
  modalEditAction,
} from '../actions'
import { updateUserFiltersAPI } from '../apis'
import { app } from '../../firebase'

function TransactionItem({ transactionData }) {
  const auth = getAuth(app)
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter)

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  })

  const addFilterHandler = () => {
    dispatch(modalAddAction(transactionData.code))
  }

  const editFilterHandler = () => {
    dispatch(modalEditAction(transactionData.code))
  }

  const deleteFilterHandler = () => {
    dispatch(deleteFilterAction(transactionData.code))
    dispatch(applyFilterAction(transactionData.code, ''))
    if (user) {
      const updatedFilters = filters.filter((item) => {
        return item.code !== transactionData.code
      })
      updateUserFiltersAPI(user.uid, updatedFilters)
    }
  }

  return (
    <li>
      <div>{transactionData.code}</div>
      <div>${transactionData.amount * -1}</div>
      {transactionData.category ? (
        <div>
          <button className={style.editButton} onClick={editFilterHandler}>
            Edit
          </button>
          <button className={style.deleteButton} onClick={deleteFilterHandler}>
            Delete
          </button>
        </div>
      ) : (
        <button className={style.addButton} onClick={addFilterHandler}>
          Add
        </button>
      )}
    </li>
  )
}

export default TransactionItem
