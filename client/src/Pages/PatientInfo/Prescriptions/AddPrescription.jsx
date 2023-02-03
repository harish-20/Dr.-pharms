import React from 'react'
import { useState } from 'react'
import InputText from '../../../components/InputText/InputText'
import AddMedications from './AddMedications'
import Medications from './Medications'

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
  const [medications, setMedications] = useState([])

  const addMedication = (medication) => {
    if (medication.name.trim() === '') {
      alert('Please add medication')
      return
    }
    setMedications((prev) => [...prev, medication])
  }

  const removeMedication = (targetedIndex) => {
    const updatedMedications = medications.filter(
      (medication, index) => index !== targetedIndex,
    )
    setMedications([...updatedMedications])
  }

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.table(formData)
    console.table(medications)
  }
  return (
    <form className="flex flex-col w-4/5" onSubmit={handleSubmit}>
      <div className="flex flex-col my-10 gap-y-4">
        <InputText
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="complaints">Complaints:</label>
          <textarea
            id="complaints"
            name="complaints"
            className="border-2"
            value={formData.complaints}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        {/* medications */}
        <div className="flex flex-col gap-8 border-2 border-dark py-4 px-2 rounded-lg">
          <h1 className="font-bold text-lg">
            Medication details(should be add one by one):
          </h1>
          <Medications
            medications={medications}
            removeMedication={removeMedication}
          />
          <AddMedications addMedication={addMedication} />
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

        <div className="flex flex-col gap-2">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            className="border-2"
            value={formData.notes}
            onChange={handleChange}
            rows="5"
          ></textarea>
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
