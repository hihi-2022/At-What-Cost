import React, { useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideModalAction, applyFilterAction, addFilterAction, editFilterAction } from '../actions'
import style from '../styles/Modal.module.scss'

function Modal() {
  const categories = useSelector((state) => state.categories)
  const modalState = useSelector((state) => state.modal)
  const { isAdd, isEdit, code } = modalState

  const categoryRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(isAdd) {
      dispatch(addFilterAction(code, categoryRef.current.value))
    } else {
      dispatch(editFilterAction(code, categoryRef.current.value))
    }
    dispatch(applyFilterAction(code, categoryRef.current.value))
    dispatch(hideModalAction())
  
  }

  if (!isAdd && !isEdit) {
    return <></>
  }

  return (
    <div className={style.container}>
      <div className={style.modal}>
        <h1>{isAdd ? 'Add' : 'Edit'}</h1>
        <h2>Code</h2>
        <form onSubmit={handleSubmit} className={style.category_form}>
          <div className={style.select_control}>
            <label htmlFor="category">Choose Category:</label>
            <select
              ref={categoryRef}
              name="category"
              id="category"
            >
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                )
              })}
            </select>
          </div>
          <button type="submit">Add Filter</button>
        </form>
      </div>
    </div>
  )
}
export default Modal
