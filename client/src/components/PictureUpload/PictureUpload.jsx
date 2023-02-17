import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

function PictureUpload(props) {
  const currentUser = useSelector((state) => state.currentUser)
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState('')

  const saveFile = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const uploadFile = async (e) => {
    const formData = new FormData()
    const id = currentUser.user._id
    formData.append('file', file)
    formData.append('fileName', fileName)
    formData.append('_id', id)
    try {
      const res = await axios.post(
        'http://localhost:8080/upload/' + currentUser.userType,
        formData,
      )
      alert('successfully uploaded')

      props.onClose()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <input type="file" onChange={saveFile} />
      <div className="flex gap-6">
        <button
          onClick={uploadFile}
          className="bg-blue text-white py-2 px-6 rounded-lg"
        >
          Upload
        </button>
        <button
          type="button"
          className="border-2 border-blue text-blue py-2 px-6 rounded-lg"
          onClick={props.onClose}
        >
          cancel
        </button>
      </div>
    </div>
  )
}

export default PictureUpload
