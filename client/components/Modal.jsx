/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  hideModalAction,
  applyFilterAction,
  addFilterAction,
  editFilterAction,
  receiveTransactionsAction,
  addCustomCategoryAction,
} from '../actions'
import style from '../styles/Modal.module.scss'
import Papa from 'papaparse'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import { updateCustomCategoriesAPI, updateUserFiltersAPI } from '../apis'

const allowedExtensions = ['csv']

function getExtension(filename) {
  const filenameParts = filename.split('.')
  return filenameParts[filenameParts.length - 1]
}

function createDate(dateString) {
  const [day, month, year] = dateString.split('/')
  return new Date(`${month}/${day}/${year}`)
}

function selectRandomColour() {
  return `#${Number(Math.floor(Math.random() * 0x1000000)).toString(16)}`
}

function Modal() {
  const categories = useSelector((state) => state.categories.list)
  const customCategories = useSelector((state) => state.categories.custom)
  const modalState = useSelector((state) => state.modal)
  const filters = useSelector((state) => state.filter)
  const auth = getAuth(app)

  const { isAdd, isEdit, code, isCsv, sign } = modalState

  const [error, setError] = useState('')
  const [file, setFile] = useState('')
  const [user, setUser] = useState(null)
  const [customCategory, setCustomCategory] = useState('')

  const categoryRef = useRef()
  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  })

  const handleCustomCategoryChange = (e) => {
    setCustomCategory(e.target.value)
  }

  const handleFileChange = (e) => {
    setError('')

    if (e.target.files.length) {
      const inputFile = e.target.files[0]

      const fileExtension = getExtension(inputFile.name)
      if (!allowedExtensions.includes(fileExtension)) {
        setError('Please input a csv file')
        return
      }
      setFile(inputFile)
    }
  }

  const handleParse = (e) => {
    e.preventDefault()
    if (!file) return alert('Please enter a CSV file')

    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true })
      const parsedData = csv.data
      const filteredData = parsedData.map((obj) => {
        const existingFilter = filters.find(
          (filter) => filter.code === obj.Code
        )
        return {
          amount: Number(obj.Amount),
          date: createDate(obj.Date),
          code: obj.Code,
          type: obj.Type,
          category: existingFilter ? existingFilter.category : '',
        }
      })
      dispatch(receiveTransactionsAction(filteredData))
    }
    dispatch(hideModalAction())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const category = categoryRef.current.value

    if (isAdd) {
      if (user) {
        if (customCategory) {
          const colour = selectRandomColour()
          await updateCustomCategoriesAPI(user.uid, [
            ...customCategories,
            [customCategory, colour],
          ])
          dispatch(addCustomCategoryAction(customCategory, colour))
          dispatch(addFilterAction(code, customCategory))
          dispatch(applyFilterAction(code, customCategory))
          setCustomCategory('')
        } else {
          // If user selected from predefined categories list
          await updateUserFiltersAPI(user.uid, [
            ...filters,
            { code, category: categoryRef.current.value },
          ])
          dispatch(addFilterAction(code, categoryRef.current.value))
          dispatch(applyFilterAction(code, categoryRef.current.value))
        }
      } else {
        dispatch(addFilterAction(code, categoryRef.current.value))
        dispatch(applyFilterAction(code, categoryRef.current.value))
      }
    } else {
      if (user) {
        const updatedFilters = [...filters].map((item) => {
          if (item.code === code) {
            return { code, category }
          }
          return item
        })
        await updateUserFiltersAPI(user.uid, updatedFilters)
      }
      dispatch(editFilterAction(code, categoryRef.current.value))
      dispatch(applyFilterAction(code, categoryRef.current.value))
    }
    dispatch(hideModalAction())
  }

  const cancel = () => {
    dispatch(hideModalAction())
  }

  if (!isCsv && !isAdd && !isEdit) {
    return <></>
  }

  if (isCsv) {
    return (
      <div className={style.container}>
        <div className={style.csvModal}>
          <form onSubmit={handleParse}>
            <label htmlFor="csvInput" style={{ display: 'block' }}>
              Enter CSV File
            </label>
            <input
              onChange={handleFileChange}
              id="csvInput"
              name="file"
              type="File"
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={cancel}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <div className={style.modal}>
        <h1>{isAdd ? 'Add' : 'Edit'}</h1>
        <h2>{code}</h2>
        <form onSubmit={handleSubmit} className={style.category_form}>
          <div className={style.select_control}>
            <label htmlFor="category">Choose Category:</label>
            <select
              ref={categoryRef}
              name="category"
              id="category"
              disabled={customCategory}
            >
              {categories.map((category, index) => {
                if (sign <= 0 && category !== 'Income') {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  )
                } else if (
                  sign > 0 &&
                  (category === 'Income' || category === 'Transfer')
                ) {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  )
                }
              })}
            </select>
          </div>

          {user && isAdd && (
            <>
              <div className={style.select_control}>
                <label htmlFor="custom-category">Custom Category:</label>
                <input
                  type="text"
                  placeholder="Type custom category"
                  value={customCategory}
                  onChange={handleCustomCategoryChange}
                />
              </div>
            </>
          )}
          <button type="submit">Add Filter</button>
        </form>
        <button className={style.cancel} onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}
export default Modal
