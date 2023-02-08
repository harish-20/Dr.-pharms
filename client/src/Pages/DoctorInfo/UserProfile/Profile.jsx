import React from 'react'

import Info from '../../../components/Info/Info'

const Profile = (props) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img className="w-2/5 my-14" src={props.image} alt="profile" />
      {true && (
        <button className="py-2 px-10 text-blue font-bold border-2 border-blue rounded-lg duration-300 hover:bg-blue hover:text-white">
          Upload profile pic
        </button>
      )}
      <h2 className="text-2xl uppercase">
        {props.name}
        {props.qualifications && (
          <span className="text-base font-bold ml-2">
            {props.qualifications}.,
          </span>
        )}
      </h2>

      <div className="w-4/5">
        <Info heading="Bio" info={props.bio} />
        <Info heading="Specilities" info={props.specialties.join(', ')} />
        <Info heading="Years Of Experience" info={props.yearsOfExperience} />
        <Info heading="Working On" info={props.hospital} />
        <Info heading="Studied At" info={props.education} />
        <Info heading="License" info={props.license} />
      </div>
      {true && (
        <button
          className="py-2 w-4/5  text-white font-bold bg-blue rounded-lg duration-300"
          onClick={props.switchEdit}
        >
          Edit Profile
        </button>
      )}
    </div>
  )
}

export default Profile
