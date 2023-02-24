import React from 'react'
import { Link } from 'react-router-dom'

const url =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

const Card = (props) => {
  return (
    <div className="flex flex-col items-center gap-y-2 px-8 py-8 mb-8 bg-white rounded-xl hover:shadow-xl">
      <img
        className="h-52 w-52 object-cover rounded-full"
        src={props.image || url}
        alt="doctor"
      />
      <h3 className="font-semibold text-xl text-slate-700">{props.name}</h3>
      <h5 className="text-dark font-bold">{props.speciality}</h5>

      <Link
        to={`/doctors/${props._id}`}
        className="w-full py-2 border-2 text-center border-lightdark  rounded-lg duration-500 hover:bg-blue hover:text-white"
      >
        View Details
      </Link>
    </div>
  )
}

export default Card
