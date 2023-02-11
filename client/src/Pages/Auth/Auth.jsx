import React from 'react'
import { useState } from 'react'

import Login from './Login/Login'
import Doctor from './Signup/Doctor'
import Patient from './Signup/Patient'
import UserType from './UserType'

const Auth = () => {
  const [userType, setUserType] = useState('patient')
  const [isSignup, setIsSignup] = useState(false)

  const allPages = {
    admin: <Login userType="admin" />,
    patient: isSignup ? <Patient /> : <Login userType="patient" />,
    doctor: isSignup ? <Doctor /> : <Login userType="doctor" />,
  }

  return (
    <div className="flex flex-col justify-center">
      <UserType
        userType={userType}
        setUserType={setUserType}
        isSignup={isSignup}
      />

      {allPages[userType]}

      {isSignup ? (
        <p className="text-center mb-4">
          Already have an Account{' '}
          <span
            className="text-blue underline cursor-pointer"
            onClick={() => setIsSignup(false)}
          >
            Log in
          </span>
        </p>
      ) : (
        <p className="text-center mb-4">
          Don't have an Account{' '}
          <span
            className="text-blue underline cursor-pointer"
            onClick={() => {
              setIsSignup(true)
              setUserType('patient')
            }}
          >
            Sign up
          </span>
        </p>
      )}
    </div>
  )
}

export default Auth
