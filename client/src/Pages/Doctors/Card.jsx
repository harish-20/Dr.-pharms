import React from 'react'

const url =
  'data:image/jpeg;base64,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'

const Card = (props) => {
  return (
    <div className="flex flex-col items-center gap-y-2 px-8 py-8 mb-8 bg-white rounded-xl shadow-xl">
      <img
        className="h-52 w-52 object-cover rounded-full"
        src={url}
        alt="doctor"
      />
      <h3 className="font-semibold text-xl text-slate-700">{props.name}</h3>
      <h5 className="text-dark font-bold">{props.speciality}</h5>

      <button className="w-full py-2 border-2 border-lightdark  rounded-lg duration-500 hover:bg-blue hover:text-white">
        View Details
      </button>
    </div>
  )
}

export default Card