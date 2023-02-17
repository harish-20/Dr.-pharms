import { configureStore } from '@reduxjs/toolkit'

import currentUserReducer from './slices/currentUser'
import chatReducer from './slices/chatMessages'

const reducer = {
  currentUser: currentUserReducer,
  chat: chatReducer,
}

export const store = configureStore({ reducer })
