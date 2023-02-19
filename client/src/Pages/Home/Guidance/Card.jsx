import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-col w-full items-center">
      <img className="h-52" src={props.icon} alt="instruction" />
      <p className="text-xl text-dark font-semibold py-6">
        {props.description}
      </p>
    </div>
  )
}

export default Card
