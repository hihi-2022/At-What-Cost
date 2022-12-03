import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Papa from 'papaparse'
import style from '../styles/NavBar.module.scss'

import { receiveTransactionsAction } from '../actions'

const allowedExtensions = ['csv']

function getExtension(filename) {
  const filenameParts = filename.split('.')
  return filenameParts[filenameParts.length - 1]
}

function NavBar() {
  const [error, setError] = useState('')
  const [file, setFile] = useState('')

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
          date: obj.Date,
          code: obj.Code,
          type: obj.Type,
          category: ""
        }
      })
      dispatch(receiveTransactionsAction(filteredData))
    }
  }

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <h1>AWC</h1>
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
      </div>
    </nav>
  )
}
export default NavBar
