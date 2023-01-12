import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import style from '../styles/TransactionItem.module.scss'
import {
  deleteFilterAction,
  applyFilterAction,
  modalAddAction,
  modalEditAction,
  deleteCustomCategoryAction,
} from '../actions'
import { updateUserFiltersAPI, updateCustomCategoriesAPI } from '../apis'
import { app } from '../../firebase'

function TransactionItem({ transactionData, colours }) {
  const auth = getAuth(app)
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter)
  const customCategories = useSelector((state) => state.categories.custom)

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  })

  const addFilterHandler = () => {
    dispatch(
      modalAddAction(transactionData.code, Math.sign(transactionData.amount))
    )
  }

  const editFilterHandler = () => {
    dispatch(
      modalEditAction(transactionData.code, Math.sign(transactionData.amount))
    )
  }

  const deleteFilterHandler = () => {
    const category = transactionData.category

    dispatch(deleteFilterAction(transactionData.code))
    dispatch(applyFilterAction(transactionData.code, ''))
    if (user) {
      const updatedFilters = filters.filter((item) => {
        return item.code !== transactionData.code
      })
      updateUserFiltersAPI(user.uid, updatedFilters)

      // If this is a custom category and no other filters are using it
      // then we delete the category
      const categoryStillUsed = updatedFilters.find((item) => {
        return item.category === category
      })
      const isCustomCategory = customCategories.find((item) => {
        return item.category === category
      })
      if (!categoryStillUsed && isCustomCategory) {
        const updatedCustomCategories = customCategories.filter((item) => {
          return item.category !== category
        })
        dispatch(deleteCustomCategoryAction(category))
        updateCustomCategoriesAPI(user.uid, updatedCustomCategories)
      }
    }
  }

  return (
    <li>
      <div className={style.date}>
        {transactionData.date.toLocaleDateString('en-NZ', {})}
      </div>
      <div className={style.code}>{transactionData.code}</div>
      <div className={style.category}>
        {transactionData.category ? (
          <div
            className={style.categoryLabel}
            style={{ backgroundColor: colours[transactionData.category] }}
          >
            {transactionData.category}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {transactionData.amount < 0 ? (
        <div className={`${style.amount} ${style.negative}`}>
          ${Math.abs(transactionData.amount)}
        </div>
      ) : (
        <div className={style.amount}>${transactionData.amount}</div>
      )}
      {transactionData.category ? (
        <div className={style.buttons}>
          <button className={style.editButton} onClick={editFilterHandler}>
            Edit
          </button>
          <button className={style.deleteButton} onClick={deleteFilterHandler}>
            Delete
          </button>
        </div>
      ) : (
        <div className={style.buttons}>
          <button className={style.addButton} onClick={addFilterHandler}>
            Add
          </button>
        </div>
      )}
    </li>
  )
}

export default TransactionItem
