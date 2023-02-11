import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AdminIcon, DoctorIcon, PatientIcon, RightArrow } from '../Icons/icons'

const Profile = (props) => {
  const currentUser = useSelector((state) => state.currentUser)
  const navigate = useNavigate()

  const icons = {
    admin: <AdminIcon />,
    doctor: <DoctorIcon />,
    patient: <PatientIcon />,
  }

  const handleNavigation = () => {
    if (currentUser.userType === 'admin') {
      navigate('/admin')
    } else {
      navigate(`${currentUser.userType}s/${currentUser.user._id}`)
    }
  }

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={handleNavigation}
    >
      {icons[currentUser.userType]}
      <span className="ml-2 text-lg font-semibold">
        {currentUser.user.name}
      </span>
      <RightArrow className="ml-2 h-6 rotate-90" />
    </div>
  )
}

export default Profile
