import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../API'
import BigText from '../../components/BigText/BigText'
import DoctorProfile from './DoctorProfile'

const Admin = () => {
  const [adminInfo, setAdminInfo] = useState({})

  useEffect(() => {
    const login = async () => {
      const admin = await api
        .post('/auth/admin', {
          email: 'admin@gmail.com',
          password: 'admin',
        })
        .then((res) => res.data)

      setAdminInfo(admin)
    }
    login()
  }, [])
  const doctorRequest = adminInfo[0]?.doctorRequest || []

  return (
    <section>
      <h1 className="text-5xl font-semibold text-blue text-center my-10">
        Admin Dashboard
      </h1>
      {!doctorRequest.length && <BigText>No Doctors in request list</BigText>}
      {doctorRequest.length &&
        doctorRequest.map((doctor) => {
          return (
            <DoctorProfile
              key={doctor.email}
              setAdminInfo={setAdminInfo}
              doctorInfo={doctor}
            />
          )
        })}
    </section>
  )
}

export default Admin
