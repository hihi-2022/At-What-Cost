
import React, { useState } from "react"
import Papa from "papaparse"
 

const allowedExtensions = ["csv"]
 
function NavBar () {
     

    const [data, setData] = useState([])

    const [error, setError] = useState("")
     
    const [file, setFile] = useState("")

    const handleFileChange = (e) => {
        setError("")
         
        if (e.target.files.length) {
            const inputFile = e.target.files[0]
             
            const fileExtension = inputFile?.type.split("/")[1]
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file")
                return
            }
 
            setFile(inputFile)
        }
    }
    const handleParse = () => {
         
        if (!file) return setError("Enter a valid file")

        const reader = new FileReader()

        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true })
            const parsedData = csv?.data
            const filteredData = parsedData.map(obj => {
              return {Amount: obj.Amount, Date: obj.Date, Code: obj.Code, Type: obj.Type }
            }
              )
            setData(filteredData)
        }
        reader.readAsText(file)
    }
 
    return (
        <div>
          <div className="font-1">AWC</div>
          <div className="font-2">AWC</div>
          <div className="font-3">AWC</div>
          <div className="font-4">AWC</div>
            <label htmlFor="csvInput" style={{ display: "block" }}>
                Enter CSV File
            </label>
            <input
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
            />
            <div>
                <button onClick={handleParse}>Submit</button>
            </div>
        </div>
    )
  }
export default NavBar