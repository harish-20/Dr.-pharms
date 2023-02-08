import React, { useState } from 'react'
import ChatList from './ChatList/ChatList'
import ChatMessages from './ChatMessages/ChatMessages'

const Chat = () => {
  const [currentChat, setCurrentChat] = useState(null)
  const conversations = getMessages()

  const conversationsWith = conversations.map((conversation) => ({
    user: conversation.conversationWith,
    lastMessage: conversation.messages[conversation.messages.length - 1].text,
    time: conversation.messages[conversation.messages.length - 1].createdAt,
  }))

  const messages = conversations.find(
    (conversation) => currentChat?._id === conversation.conversationWith._id,
  )?.messages

  console.log(currentChat)
  console.log(messages)

  return (
    <section className="flex min-h-[70vh] w-9/12 mx-auto my-10 ">
      <ChatList
        conversationsWith={conversationsWith}
        setCurrentChat={setCurrentChat}
      />
      <ChatMessages currentChat={currentChat} messages={messages} />
    </section>
  )
}

export default Chat

function getMessages() {
  return [
    {
      conversationWith: {
        _id: '63d37070aa22ac74a98c44c5',
        name: 'Dr. siranjivi',
        image: 'http://localhost:8080/doctors/resume.png',
        email: 'drjohnsmith@example.com',
        contact: '555-555-5555',
        qualifications: 'MBBS, MD',
        specialties: [],
        yearsOfExperience: 15,
        hospital: "St. Mary's Hospital",
        education: 'University of Oxford',
        __v: 0,
      },
      messages: [
        {
          isRead: false,
          _id: '63d4bed1309943e2c6abbf40',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello world',
          createdAt: '2023-01-28T06:21:05.060Z',
          updatedAt: '2023-01-28T06:21:05.060Z',
          __v: 0,
        },
        {
          _id: '63dde7bbf9aa459e6e782531',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello world',
          isRead: false,
          createdAt: '2023-02-04T05:06:03.781Z',
          updatedAt: '2023-02-04T05:06:03.781Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello test',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
        {
          _id: '63dde7c1f9aa459e6e782533',
          senderId: '63d37070aa22ac74a98c44c5',
          receiverId: '63d3f7fa484816213f6e3eb0',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:06:09.309Z',
          updatedAt: '2023-02-04T05:06:09.309Z',
          __v: 0,
        },
        {
          _id: '63dde8e45ce0a66815dd089d',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37070aa22ac74a98c44c5',
          text: 'hello makkale',
          isRead: false,
          createdAt: '2023-02-04T05:11:00.449Z',
          updatedAt: '2023-02-04T05:11:00.449Z',
          __v: 0,
        },
      ],
    },
    {
      conversationWith: {
        _id: '63d37142aa22ac74a98c44cb',
        name: 'Dr. Jane Doe',
        image: 'https://www.example.com/images/dr-jane-doe.jpg',
        email: 'drjanedoe@example.com',
        contact: '555-555-5556',
        qualifications: 'MBBS, MD, MS',
        specialties: [],
        yearsOfExperience: 10,
        hospital: 'General Hospital',
        education: 'University of Cambridge',
        __v: 0,
      },
      messages: [
        {
          _id: '63ddffb0227e8a56ff10123e',
          senderId: '63d3f7fa484816213f6e3eb0',
          receiverId: '63d37142aa22ac74a98c44cb',
          text:
            'hello da hello dahello dahello dahello dahello dahello dahello dahello da',
          isRead: false,
          createdAt: '2023-02-04T06:48:16.514Z',
          updatedAt: '2023-02-04T06:48:16.514Z',
          __v: 0,
        },
      ],
    },
  ]
}
