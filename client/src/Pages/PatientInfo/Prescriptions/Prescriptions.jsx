import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddPrescription from './AddPrescription'
import Prescription from './Prescription'

const Prescriptions = (props) => {
  const [isEdit, setIsEdit] = useState()
  const userType = useSelector((state) => state.currentUser.userType)

  if (isEdit) {
    return (
      <AddPrescription
        patient={props.patient}
        onCancel={() => setIsEdit(false)}
      />
    )
  }

  return (
    <div className="flex flex-col w-4/5 my-4 rounded-lg gap-2">
      {props.prescription.map((prescription) => (
        <Prescription key={prescription._id} {...prescription} />
      ))}
      {userType === 'doctor' && (
        <button
          className="py-4 mt-4 bg-blue text-lg font-bold text-white rounded-lg"
          onClick={() => setIsEdit(true)}
        >
          Add Prescription
        </button>
      )}
    </div>
  )
}

export default Prescriptions
