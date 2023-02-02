import React from 'react'
import { useState } from 'react'
import InputText from '../../../components/InputText/InputText'

const prescription = [
  {
    date: {
      $date: {
        $numberLong: '1667304000000',
      },
    },
    complaints: 'Chest pain and shortness of breath',
    diagnosis: 'fever',
    medications: [
      {
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '10 days',
        endDate: '2022-11-11T12:00:00Z',
        morning: {
          beforeFood: true,
        },
        afternoon: {
          beforeFood: false,
        },
        night: {
          beforeFood: true,
        },
        _id: {
          $oid: '63d40aa977223de7019c51ad',
        },
      },
    ],
    followUp: {
      $date: {
        $numberLong: '1668513600000',
      },
    },
    notes: 'Patient is also advised to get a chest X-ray next week.',
    __v: 0,
    _id: 1,
  },
]

const AddPrescription = (props) => {
  const [formData, setFormData] = useState({
    complaints: '',
    diagnosis: '',
    followUp: Date.now(),
    notes: '',
  })

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <form className="flex flex-col w-4/5" onSubmit={handleSubmit}>
      <InputText
        name="diagnosis"
        value={formData.diagnosis}
        onChange={handleChange}
      />
      <div className="flex flex-col w-3/5 my-10 gap-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="complaints">Complaints:</label>
          <textarea
            id="complaints"
            className="border-2"
            value={formData.complaints}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="followup">Follow up:</label>
          <input
            className="w-4/12 border-[3px]"
            id="followup"
            name="followUp"
            type="date"
            value={formData.followUp}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-4 justify-between w-full mt-5">
        <button
          type="button"
          className="w-full py-2 border-2 border-blue text-blue rounded-lg"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className="w-full py-2 bg-blue text-white rounded-lg">
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddPrescription
