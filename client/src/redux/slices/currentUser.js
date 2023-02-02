import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userType: '',
  user: {},
  isLoggedIn: false,
}

const currentUser = createSlice({
  name: 'current user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload
      state.isLoggedIn = true
    },
    resetUser: (state, action) => {
      state = initialState
    },
  },
})

export const currentUserActions = currentUser.actions

export default currentUser.reducer
