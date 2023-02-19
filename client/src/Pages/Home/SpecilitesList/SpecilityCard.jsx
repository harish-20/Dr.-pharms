import React from 'react'

const SpecilityCard = (props) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center py-6 px-4 border-2 border-slate-400 rounded-lg">
      <img className="h-36 w-auto" src={props.image} alt="specility" />
      <h2>{props.specility}</h2>
    </div>
  )
}

export default SpecilityCard
