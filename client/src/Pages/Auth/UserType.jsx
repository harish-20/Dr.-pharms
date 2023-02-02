import React from 'react'

import {
  AdminIcon,
  DoctorIcon,
  PatientIcon,
} from '../../components/Icons/icons'

const UserType = (props) => {
  return (
    <div className="flex mx-auto mt-10 bg-dark justify-center  gap-x-[1px] rounded-lg overflow-hidden">
      {/* there is no signup for admin so we hide it when its in signup */}
      {!props.isSignup && (
        <div
          className={`flex px-4 py-1 cursor-pointer ${
            props.userType === 'admin' ? 'bg-blue text-white' : 'bg-white'
          }`}
          onClick={() => props.setUserType('admin')}
        >
          <AdminIcon
            className="h-7 mr-2 "
            style={
              props.userType === 'admin'
                ? { filter: 'grayscale(1) invert(1)' }
                : {}
            }
          />
          Admin
        </div>
      )}
      <div
        className={`flex px-4 py-1 cursor-pointer ${
          props.userType === 'doctor' ? 'bg-blue text-white' : 'bg-white'
        }`}
        onClick={() => props.setUserType('doctor')}
      >
        <DoctorIcon
          className="h-7 mr-2"
          style={
            props.userType === 'doctor'
              ? { filter: 'grayscale(1) invert(1)' }
              : {}
          }
        />
        Doctor
      </div>
      <div
        className={`flex px-4 py-1 cursor-pointer ${
          props.userType === 'patient' ? 'bg-blue text-white' : 'bg-white'
        }`}
        onClick={() => props.setUserType('patient')}
      >
        <PatientIcon
          className="h-7 mr-2"
          style={
            props.userType === 'patient'
              ? { filter: 'grayscale(1) invert(1)' }
              : {}
          }
        />
        Patient
      </div>
    </div>
  )
}

export default UserType
