import React from 'react'
import { Link } from 'react-router-dom'

const CTA = (props) => {
  return (
    <Link
      className="bg-blue text-lg py-2 rounded-lg px-10 font-bold tracking-widest text-white hover:bg-indigo-600 duration-500"
      to={'/auth'}
    >
      {props.children || 'Login'}
    </Link>
  )
}

export default CTA
