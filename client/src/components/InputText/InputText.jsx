import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const InputText = (props) => {
  const [isTouched, setIsTouched] = useState(false)
  const [isIncomplete, setIsIncomplete] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timeObj
    if (props.value.trim() === '') {
      timeObj = setTimeout(() => {
        setIsIncomplete(true)
      }, 2000)
    } else {
      setIsIncomplete(false)
    }

    return () => {
      clearTimeout(timeObj)
    }
  }, [props.value])

  const handleBlur = () => {
    setIsActive(false)
    setIsTouched(true)
  }
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className={`text-lg capitalize  ${
          isActive ? 'text-blue' : 'text-slate-600'
        }`}
      >
        {props.name}
        {props.description && (
          <span className="lowercase"> ({props.description})</span>
        )}
        :
      </label>
      <input
        onFocus={() => setIsActive(true)}
        onBlur={handleBlur}
        className={`border-2 px-1 py-1 border-gray-300  focus:outline-none focus:border-blue ${
          isTouched && isIncomplete ? 'border-red-400' : ''
        }`}
        type="text"
        placeholder={`Enter your ${props.name}...`}
        autoComplete="off"
        {...props}
        id={props.name}
      />
      {isTouched && isIncomplete && (
        <p className="text-sm text-red-400">Enter a valid {props.name} !</p>
      )}
    </div>
  )
}

export default InputText
