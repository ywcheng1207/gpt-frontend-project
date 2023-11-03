import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//
export const chatApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: 'users/login',
        method: 'POST',
        body: { email, password }
      })
    }),
    getChatList: builder.mutation({
      query: (TOKEN) => ({
        url: 'logs/chat-list',
        method: 'GET',
        headers: { Authorization: TOKEN }
      })
    }),
    getLogs: builder.mutation({
      query: ({ id, TOKEN }) => ({
        url: `logs/${id}`,
        method: 'GET',
        headers: { Authorization: TOKEN }
      })
    }),
    deleteChatLogs: builder.mutation({
      query: ({ id, TOKEN }) => ({
        url: `logs/${id}`,
        method: 'DELETE',
        headers: { Authorization: TOKEN }
      })
    }),
    postSendChat: builder.mutation({
      query: ({ theChatId, UserMessage, TOKEN }) => ({
        url: 'openai/completions',
        method: 'POST',
        body: { theChatId, UserMessage },
        headers: { Authorization: TOKEN }
      })
    }),
    deleteAllChat: builder.mutation({
      query: (TOKEN) => ({
        url: 'logs/',
        method: 'DELETE',
        headers: { Authorization: TOKEN }
      })
    })
  })
})
export const {
  usePostLoginMutation,
  useGetChatListMutation,
  useGetLogsMutation,
  useDeleteChatLogsMutation,
  usePostSendChatMutation,
  useDeleteAllChatMutation
} = chatApi
