import { configureStore } from '@reduxjs/toolkit'
import logSlice from './slices/logSlice'
import { chatApi } from './apiSlices/apiSlice'

export default configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    log: logSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware)
})
