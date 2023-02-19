import React from 'react'

const FeaturesItem = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full border-r-2 border-blue last:border-0">
      <h1 className="text-2xl text-dark font-semibold">{props.feature}</h1>
      <h3 className="text-blue font-bold">{props.numbers}</h3>
    </div>
  )
}

export default FeaturesItem
