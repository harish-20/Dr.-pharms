import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { io } from 'socket.io-client'

import Layout from './components/Layout/Layout'

import Doctors from './Pages/Doctors/Doctors'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import DoctorInfo from './Pages/DoctorInfo/DoctorInfo'
import PatientInfo from './Pages/PatientInfo/PatientInfo'
import Chat from './Pages/Chat/Chat'
import { useDispatch } from 'react-redux'
import { currentUserActions } from './redux/slices/currentUser'
import Admin from './Pages/Admin/Admin'
import { getMessages } from './API/chat'
import { chatActions } from './redux/slices/chatMessages'

export const socket = io('http://localhost:8080')

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const existingUser = localStorage.getItem('user')

    if (existingUser) {
      const user = JSON.parse(existingUser)
      dispatch(currentUserActions.setUser(user))

      const fetchMessage = async () => {
        const messages = await getMessages(user.user._id)

        const noOfUnreadedMessages = messages.reduce((acc, message) => {
          const lastMessage = message.messages[message.messages.length - 1]
          if (!lastMessage.isRead && lastMessage.senderId !== user.user._id) {
            return acc + 1
          }
          return acc
        }, 0)
        dispatch(chatActions.setChat(noOfUnreadedMessages))
      }
      fetchMessage()
    }
  }, [])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
    })
    return () => {
      socket.disconnect()
      socket.off()
    }
  }, [])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorInfo />} />
        <Route path="/patients/:id" element={<PatientInfo />} />
        <Route path="/chats/" element={<Chat />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  )
}

export default App
