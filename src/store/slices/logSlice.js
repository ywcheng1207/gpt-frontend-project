//
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

//
const initLog = {
  currentId: localStorage.getItem('last-record') || 1,
  loading: false,
  chatlog: [],
  chatList: [],
  // 在發送訊息的時候觸發toggle這個開關
  // 讓其他需要更新資料的元件觸發useEffect重新取資料
  toggle: false
}

//
const logSlice = createSlice({
  name: 'log',
  initialState: initLog,
  reducers: {
    handleChatList: (state, action) => {
      state.chatList = action.payload.chatList
    },
    handleSwitchCurrentId: (state, action) => {
      state.currentId = action.payload
      localStorage.setItem('last-record', action.payload)
    },
    handleGetChatLog: (state, action) => {
      state.chatlog = action.payload
    },
    handleSendChatLog: (state, action) => {
      if (state.chatlog.length === 0) {
        state.toggle = !state.toggle
      }
      state.chatlog = [...state.chatlog, ...action.payload]
    },
    handleDeleteChatLog: (state, action) => {
      state.chatList = state.chatList.filter(
        (item) => item.chatId !== action.payload
      )
      if (state.chatList.length > 0) {
        state.currentId = state.chatList[0].chatId
      }
    },
    handleAddNewChat: (state, action) => {
      state.currentId = uuidv4()
      state.chatlog = []
    },
    handleClearAllChat: (state, _action) => {
      state.chatList = []
      state.chatlog = []
    }
  }
})

//
export const {
  handleChatList,
  handleSwitchCurrentId,
  handleGetChatLog,
  handleSendChatLog,
  handleDeleteChatLog,
  handleAddNewChat,
  handleClearAllChat
} = logSlice.actions
export const selectLog = (state) => state.log
export default logSlice.reducer
