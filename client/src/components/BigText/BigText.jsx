import React from 'react'

const BigText = (props) => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <h1 className="text-center text-3xl text-slate-600">{props.children}</h1>
    </div>
  )
}

export default BigText
