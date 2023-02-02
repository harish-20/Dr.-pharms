import React, { useState } from 'react'
import AddPrescription from './AddPrescription'
import Prescription from './Prescription'

const Prescriptions = (props) => {
  const [isEdit, setIsEdit] = useState()

  if (isEdit) {
    return <AddPrescription onCancel={() => setIsEdit(false)} />
  }

  return (
    <div className="flex flex-col w-4/5 my-4 rounded-lg gap-2">
      {props.prescription.map((prescription) => (
        <Prescription key={prescription._id} {...prescription} />
      ))}
      <button
        className="py-4 mt-4 bg-blue text-lg font-bold text-white rounded-lg"
        onClick={() => setIsEdit(true)}
      >
        Add Prescription
      </button>
    </div>
  )
}

export default Prescriptions
