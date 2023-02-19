import React from 'react'
import FeaturesItem from './FeaturesItem'

const NumbersBar = () => {
  const features = [
    {
      feature: 'Doctors',
      numbers: 30,
    },
    {
      feature: 'Patients',
      numbers: 60,
    },
    {
      feature: 'Subscribers',
      numbers: 50,
    },
    {
      feature: 'Specilities',
      numbers: 14,
    },
  ]

  return (
    <div className="flex flex-col mx-14 my-10 py-8 gap-10 items-stretch border-2 border-slate-400 bg-white rounded-lg">
      <div>
        <h1 className="text-4xl text-yellow text-center">
          Lets Talk About Numbers
        </h1>
      </div>
      <div className="flex px-5 justify-around">
        {features.map((feature) => (
          <FeaturesItem key={feature.feature} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default NumbersBar
