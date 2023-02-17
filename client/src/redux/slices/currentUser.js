import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../API'

const initialState = {
  userType: '',
  user: null,
  isLoggedIn: false,
}

export const login = createAsyncThunk('currentuser/login', async (thunkAPI) => {
  const url = `auth/${thunkAPI.type}`
  const res = await api.post(url, thunkAPI.credentials).catch((err) => {
    alert(err.response.data.message)
    return
  })

  if (!res) {
    return initialState
  }

  const newState = {
    userType: thunkAPI.type,
    user: res.data,
    isLoggedIn: true,
  }
  localStorage.setItem('user', JSON.stringify(newState))
  thunkAPI.navigate('/')

  return newState
})

const currentUser = createSlice({
  name: 'currentuser',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload

      return state
    },
    updateUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(state))
      return state
    },
    resetUser: (state, action) => {
      localStorage.removeItem('user')
      state = initialState
      return state
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state = action.payload
      return state
    },
  },
})

export const currentUserActions = currentUser.actions

export default currentUser.reducer
