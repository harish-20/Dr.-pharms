import React from 'react'
import { EyeIcon } from '../../../components/Icons/icons'

const ChatMessage = (props) => {
  function convertToAMPM(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    let strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  return (
    <div
      className={`bg-white min-w-[150px] mx-4 my-2 p-4 rounded-lg shadow-xl ${
        props.currentId === props.message.receiverId
          ? 'self-end rounded-br-none'
          : 'self-start rounded-bl-none'
      }`}
    >
      <h1 className="py-2">{props.message.text}</h1>
      <p className="text-right text-slate-500 text-xs font-bold flex justify-between">
        {convertToAMPM(new Date(props.message.createdAt))}
        {props.message.isRead &&
          props.message.receiverId === props.currentId && <EyeIcon />}
      </p>
    </div>
  )
}

export default ChatMessage
