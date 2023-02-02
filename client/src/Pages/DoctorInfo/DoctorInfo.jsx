import React from 'react'
import Reviews from './Reviews/Reviews'

// import { useParams } from 'react-router-dom'
import Profile from './UserProfile/Profile'

const dummy = {
  _id: '63d37070aa22ac74a98c44c5',
  name: 'Dr. siranjivi',
  image: 'http://localhost:8080\\doctors\\d.png',
  bio: 'I am doctor who wants people to enjoy their life without a diesease',
  email: 'drjohnsmith@example.com',
  contact: '555-555-5555',
  qualifications: 'MBBS, MD',
  specialties: ['general', 'skincare'],
  yearsOfExperience: 15,
  hospital: "St. Mary's Hospital",
  education: 'University of Oxford',
  __v: 0,
}

const DoctorInfo = () => {
  // const _id = useParams().id

  // useEffect(() =>{

  // })

  return (
    <div className="w-full mx-auto px-10 pb-10 my-10 rounded-xl bg-white  md:w-3/5">
      <h1 className="py-10 text-blue text-5xl drop-shadow-lg text-center font-semibold">
        Doctor's Profile
      </h1>
      <Profile {...dummy} />
      <Reviews />
    </div>
  )
}

export default DoctorInfo
