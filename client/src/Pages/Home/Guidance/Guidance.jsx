import React from 'react'
import Card from './Card'

import doctorIcon from '../../../assets/doctor.png'

const Guidance = () => {
  const instructions = [
    {
      icon:
        'https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/authentication-16.png',
      description: 'Sign up to our website.',
    },
    {
      icon: doctorIcon,
      description: 'Find a doctor according to the specilites you required.',
    },
    {
      icon:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodXhlBCXVZcNb7Bb3yvVYnTmf0AxyanKP8A&usqp=CAU',
      description: 'Chat with a doctor and get prescription.',
    },
  ]

  return (
    <div className="bg-white mx-14 mt-6">
      <h1 className="text-center text-dark font-semibold text-4xl py-8">
        Steps For Consultation
      </h1>
      <div className="flex justify-center py-5 px-12 gap-14 rounded-lg">
        {instructions.map((instruction, index) => (
          <Card key={index} {...instruction} />
        ))}
      </div>
    </div>
  )
}

export default Guidance
