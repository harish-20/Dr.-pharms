import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'

const ChatMessages = (props) => {
  const [message, setMessage] = useState('')
  const messageDiv = useRef()

  const scroll = () => {
    if (props.currentChat?._id)
      messageDiv.current.scroll({
        top: messageDiv.current.scrollHeight,
        behaviour: 'smooth',
      })
  }

  useEffect(() => {
    scroll()
  }, [props])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  if (!props.currentChat?._id) {
    return (
      <div className="w-8/12 flex items-center justify-center bg-white rounded-lg">
        <h1 className="text-center">Select any user to chat</h1>
      </div>
    )
  }

  return (
    <div className="w-8/12 flex flex-col  bg-slate-50 rounded-lg">
      <h1 className="py-5 text-2xl bg-white shadow-sm">
        {props.currentChat.name}
      </h1>
      <div
        ref={messageDiv}
        className="flex flex-col h-[60vh] relative overflow-y-auto scroll-smooth"
      >
        {props.messages.map((message) => (
          <ChatMessage
            key={message._id}
            currentId={props.currentChat._id}
            message={message}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 pl-3 text-lg border-2"
        />
        <button className="px-8 py-2 bg-blue text-white text-semibold">
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatMessages
