import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminIcon, DoctorIcon, PatientIcon, RightArrow } from '../Icons/icons'

const Profile = (props) => {
  const navigate = useNavigate()

  const icons = {
    admin: <AdminIcon />,
    doctor: <DoctorIcon />,
    patient: <PatientIcon />,
  }

  const handleNavigation = () => {
    navigate('/patients/1244')
  }
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={handleNavigation}
    >
      {icons[props.userType]}
      <span className="ml-2 text-lg font-semibold">{props.name}</span>
      <RightArrow className="ml-2 h-6 rotate-90" />
    </div>
  )
}

export default Profile
