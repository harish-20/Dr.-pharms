import React from 'react'

const Info = (props) => {
  return (
    <div className={props.className || 'mt-5'}>
      <h3 className="text-xl font-semibold py-2 tracking-wide">
        {props.heading}:
      </h3>
      <p className="text-slate-700 text-lg">{props.info}</p>
    </div>
  )
}

export default Info
