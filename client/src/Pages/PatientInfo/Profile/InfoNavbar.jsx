import React from 'react'

// it should get heading it will chage the heading according to user event
const InfoNavbar = (props) => {
  return (
    <div className="w-auto flex border-2 border-lightdark gap-x-[2px] bg-lightdark rounded-lg overflow-hidden">
      {props.headings.map((heading) => (
        <div
          key={heading}
          className={`py-2 px-8 cursor-pointer duration-500 ${
            heading === props.heading ? 'bg-blue text-white' : 'bg-white'
          }`}
          onClick={() => props.changeHeading(heading)}
        >
          {heading}
        </div>
      ))}
    </div>
  )
}

export default InfoNavbar
