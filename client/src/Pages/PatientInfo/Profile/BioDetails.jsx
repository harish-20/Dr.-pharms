import React from 'react'

import Info from '../../../components/Info/Info'

// age :  30
// bloodType :  "O-"
// email :  "johndoe@example.com"
// gender :  "Male"
// height :  180
// medicalHistory : ['asthma', 'broken arm']
// name : "John Doe"
// weight : 80

const BioDetails = (props) => {
  return (
    <div className="w-2/3 mb-10">
      <Info heading="Name" info={props.name} />
      <Info heading="Gender" info={props.gender} />
      <Info heading="Age" info={props.age + ' Years'} />
      <Info heading="Height" info={props.height + ' CM'} />
      <Info heading="Weight" info={props.weight + ' KGs'} />
      <Info heading="Blood type" info={props.bloodType} />
      <Info heading="Medical history" info={props.medicalHistory.join(', ')} />
      <button
        className="w-full py-2 mt-4 bg-blue font-bold text-white rounded-lg"
        onClick={props.onEdit}
      >
        Edit Profile
      </button>
    </div>
  )
}

export default BioDetails
