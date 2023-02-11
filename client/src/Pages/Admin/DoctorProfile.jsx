import React from 'react'
import api from '../../API'

import { doctorSignup } from '../../API/doctor'
import { removeDoctorFromRequestList } from '../../API/admin'

import Profile from '../DoctorInfo/UserProfile/Profile'

const DoctorProfile = (props) => {
  const login = async () => {
    const admin = await api
      .post('/auth/admin', {
        email: 'admin@gmail.com',
        password: 'admin',
      })
      .then((res) => res.data)
    props.setAdminInfo(admin)
  }

  const acceptRequest = async () => {
    const result = await doctorSignup(props.doctorInfo)
    if (result) {
      await removeDoctorFromRequestList(props.doctorInfo)
    }
    await login()
  }
  const rejectRequest = async () => {
    const result = await removeDoctorFromRequestList(props.doctorInfo)

    await login()
  }

  return (
    <section className="w-full mx-auto px-10 pb-10 my-10 rounded-xl bg-white  md:w-3/5">
      <Profile {...props.doctorInfo} isRequest={true} />
      <div className="flex justify-around mt-10">
        <button
          className="py-2 px-10 border-2 border-blue text-blue rounded-md duration-300 hover:bg-blue hover:text-white"
          onClick={rejectRequest}
        >
          Reject
        </button>
        <button
          onClick={acceptRequest}
          className="py-2 px-10 bg-blue text-white rounded-md duration-300 hover:bg-indigo-600"
        >
          Accept
        </button>
      </div>
    </section>
  )
}

export default DoctorProfile
