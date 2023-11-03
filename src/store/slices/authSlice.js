import { createSlice } from '@reduxjs/toolkit'

const initState = {
  email: '',
  password: '',
  token: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    handleLogin: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    }
  }
})

export const { handleLogin } = authSlice.actions
export const selectChat = (state) => state.auth
export default authSlice.reducer
