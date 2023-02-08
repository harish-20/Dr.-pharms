import React from 'react'

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
      className={`bg-white w-fit mx-4 my-2 p-4 rounded-lg shadow-xl ${
        props.currentId === props.message.receiverId
          ? 'slef-start rounded-bl-none'
          : 'self-end rounded-br-none'
      }`}
    >
      <h1>{props.message.text}</h1>
      <p className="text-right text-slate-500 text-xs font-bold">
        {convertToAMPM(new Date(props.message.createdAt))}
      </p>
    </div>
  )
}

export default ChatMessage
