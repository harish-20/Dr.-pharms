import React from 'react'

const SubHeading = (props) => {
  return (
    <h1 className="py-6 px-10 text-blue text-4xl font-bold ">
      {props.children}
    </h1>
  )
}

export default SubHeading
