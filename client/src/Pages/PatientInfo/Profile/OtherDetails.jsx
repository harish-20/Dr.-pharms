import React from 'react'
import Info from '../../../components/Info/Info'

const OtherDetails = (props) => {
  return (
    <div className="w-2/3 mb-10">
      <Info heading="Insurance" info={props.insurance} />
      <Info heading="Allerges" info={props.allergies.join(', ')} />
    </div>
  )
}

export default OtherDetails
