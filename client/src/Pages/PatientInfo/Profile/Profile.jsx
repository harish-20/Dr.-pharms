import React from 'react'

const Profile = (props) => {
  return (
    <div className="flex flex-col items-center justify-center px-10   my-10">
      <h2 className="py-10 text-blue text-5xl drop-shadow-lg text-center font-semibold">
        Patient's Profile
      </h2>
      <img src={props.image} alt="profile" />
      <button className="px-10 py-2 mt-5 border-blue border-2 rounded-lg duration-300 hover:bg-blue hover:text-white">
        Uplode profile pic
      </button>
      <h3 className="mt-10 text-2xl uppercase">{props.name}</h3>
    </div>
  )
}

export default Profile
