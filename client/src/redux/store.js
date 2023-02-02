import { configureStore } from '@reduxjs/toolkit'

import currentUserReducer from './slices/currentUser'

const reducer = {
  currentUser: currentUserReducer,
}

export const store = configureStore({ reducer })
