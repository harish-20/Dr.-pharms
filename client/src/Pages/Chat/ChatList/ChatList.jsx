import React from 'react'
import ChatUser from './ChatUser'

const ChatList = (props) => {
  return (
    <div className="w-4/12 bg-white flex flex-col rounded-lg overflow-y-auto">
      <h1 className="text-2xl text-white font-semibold py-4 px-2 bg-blue">
        Chats
      </h1>
      {props.conversationsWith.map((conversation) => (
        <ChatUser
          {...conversation}
          setCurrentChat={props.setCurrentChat}
          key={conversation.user._id}
        />
      ))}
    </div>
  )
}

export default ChatList
