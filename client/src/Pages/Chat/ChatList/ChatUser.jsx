import React from 'react'
import { useSelector } from 'react-redux'

const ChatUser = (props) => {
  const currentUser = useSelector((state) => state.currentUser)
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
      className={`px-2 py-2 overflow-ellipsis border-b-2 border-slate-200 bg-white rounded-lg cursor-pointer  ${
        true ? 'first:bg-slate-200' : ''
      }`}
      onClick={() => props.setCurrentChat(props.user)}
    >
      <h1 className="text-lg mb-2">{props.user.name}</h1>
      <div className="flex align-baseline justify-between">
        <p
          className={`whitespace-nowrap overflow-hidden overflow-ellipsis ${
            !props.lastMessage.isRead &&
            props.lastMessage.senderId !== currentUser.user._id &&
            props.lastMessage.senderId !== props.currentChat?._id
              ? 'font-bold'
              : ''
          }`}
        >
          {props.lastMessage.text}
        </p>
        <span className="text-xs whitespace-nowrap">
          {convertToAMPM(new Date(props.time))}
        </span>
      </div>
    </div>
  )
}

export default ChatUser
