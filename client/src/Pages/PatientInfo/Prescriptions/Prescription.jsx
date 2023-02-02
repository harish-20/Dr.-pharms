import React from 'react'
import { useState } from 'react'
import { RightArrow } from '../../../components/Icons/icons'
import Medications from './Medications'

const Prescription = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const doctor = props.doctor
  return (
    <div className="relative rounded-lg px-10 border-b-2 text-slate-800 bg-sky-50 border-b-lightdark">
      <div
        className="py-5 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex gap-2 items-baseline">
          <h1 className="text-3xl">{doctor.name}</h1>
          <span className="text-xs font-bold"> {doctor.qualifications}</span>
        </div>
        <div>
          <h2>About : {props.diagnosis}</h2>
          <h3>Complaints : {props.complaints}</h3>
        </div>
      </div>

      <RightArrow
        className={`h-4 absolute right-2 top-10 transition-all duration-500 ${
          isOpen ? '-rotate-90' : 'rotate-90'
        }`}
      />
      <div
        className="duration-700 ease-in overflow-hidden overflow-y-auto"
        style={isOpen ? { maxHeight: '500px' } : { maxHeight: '0px' }}
      >
        <h1 className="my-4 text-xl font-semibold">Medication List :</h1>
        <Medications medications={props.medications} />
        <h3 className="text-xl font-semibold mt-4">Notes :</h3>
        <p className="pb-10">{props.notes}</p>
      </div>
    </div>
  )
}

export default Prescription
