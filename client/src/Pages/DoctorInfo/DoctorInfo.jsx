import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getDoctor } from '../../API/doctor'
import BigText from '../../components/BigText/BigText'
import EditProfile from './EditProfile/EditProfile'

import Reviews from './Reviews/Reviews'
import Profile from './UserProfile/Profile'

const DoctorInfo = () => {
  const [isEdit, setIsEdit] = useState(false)

  const [doctorInfo, setDoctorInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const switchEdit = () => {
    setIsEdit((prev) => !prev)
  }

  const getDoctorInfo = async () => {
    const doctorInfo = await getDoctor(id)

    if (doctorInfo) {
      setDoctorInfo(doctorInfo)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getDoctorInfo()
  }, [])

  if (isLoading) {
    return <BigText>Loading...</BigText>
  }

  if (!doctorInfo) {
    return <BigText>No Doctor Found</BigText>
  }

  return isEdit ? (
    <div className="w-full my-10 py-14 mx-auto flex flex-col items-center bg-white rounded-xl md:w-3/5">
      <EditProfile />
    </div>
  ) : (
    <section className="w-full mx-auto px-10 pb-10 my-10 rounded-xl bg-white  md:w-3/5">
      <h1 className="py-10 text-blue text-5xl drop-shadow-lg text-center font-semibold">
        Doctor's Profile
      </h1>
      <Profile {...doctorInfo} switchEdit={switchEdit} />
      <Reviews />
    </section>
  )
}

export default DoctorInfo
