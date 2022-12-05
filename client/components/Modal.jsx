import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideModalAction, applyFilterAction, addFilterAction, editFilterAction, receiveTransactionsAction } from '../actions'
import style from '../styles/Modal.module.scss'
import Papa from 'papaparse'

const allowedExtensions = ['csv']

function getExtension(filename) {
  const filenameParts = filename.split('.')
  return filenameParts[filenameParts.length - 1]
}

function createDate(dateString) {
  const [day, month, year] = dateString.split('/')
  return new Date(`${month}/${day}/${year}`)
}

function Modal() {
  const categories = useSelector((state) => state.categories.list)
  const modalState = useSelector((state) => state.modal)
  const { isAdd, isEdit, code, isCsv } = modalState

  const [error, setError] = useState('')
  const [file, setFile] = useState('')

  const categoryRef = useRef()
  const dispatch = useDispatch()

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
        return {
          amount: Number(obj.Amount),
          date: createDate(obj.Date),
          code: obj.Code,
          type: obj.Type,
          category: ""
        }
      })
      dispatch(receiveTransactionsAction(filteredData))
    }
    dispatch(hideModalAction())
  }

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

  const cancel = () => {
    dispatch(hideModalAction())
  }

  if (!isCsv && !isAdd && !isEdit) {
    return <></>
  }

  if(isCsv) {
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
       <button className={style.cancel} onClick={cancel}>Cancel</button>
      </div>
    </div>
  )
}
export default Modal
