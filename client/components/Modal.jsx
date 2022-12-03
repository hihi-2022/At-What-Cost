import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideModalAction } from '../actions'
import style from '../styles/Modal.module.scss'

function Modal() {
  const categories = useSelector((state) => state.categories)
  const modalState = useSelector((state) => state.modal)
  const { isAdd, isEdit } = modalState

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFilterSubmit = () => {
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
            <select name="category" id="category">
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                )
              })}
            </select>
          </div>
          <button onClick={handleFilterSubmit} type="submit">Add Filter</button>
        </form>
      </div>
    </div>
  )
}
export default Modal
