import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noOfUnreadedMessage: 0,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.noOfUnreadedMessage = action.payload
    },
  },
})

export const chatActions = chatSlice.actions

export default chatSlice.reducer
