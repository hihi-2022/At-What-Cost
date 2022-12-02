import React from 'react'
import { useSelector } from 'react-redux'
import style from '../styles/Modal.module.scss'

function Modal() {
  const modalState = useSelector((state) => state.modal)
  const { isAdd, isEdit } = modalState

  const handleSubmit = (e) => {
    e.preventDefault()
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
              <option value="idk">IDK</option>
              <option value="idk">IDK</option>
              <option value="idk">IDK</option>
            </select>
          </div>
          <button type="submit">Add Filter</button>
        </form>
      </div>
    </div>
  )
}
export default Modal
