import React from 'react'
import { useState } from 'react'
import InputText from '../../../components/InputText/InputText'

const AddMedications = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    dosage: '',
    frequency: '',
    duration: '',
    endDate: '2000-10-20',
  })

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <div className="ml-5 flex flex-col gap-5">
      <div className="flex gap-4">
        <InputText name="name" value={formData.name} onChange={handleChange} />
        <InputText
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-4">
        <InputText
          name="frequency"
          description="eg. Twice a day "
          value={formData.frequency}
          onChange={handleChange}
        />
        <InputText
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="enddate">End date:</label>
        <input
          id="enddate"
          className="border-2 px-2 py-1"
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="bg-blue text-white py-2 px-4 rounded-lg"
        onClick={() => props.addMedication(formData)}
      >
        Add To Medications List
      </button>
    </div>
  )
}

export default AddMedications
