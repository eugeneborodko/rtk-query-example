import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../models/IUser'

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['User'],
  endpoints: ((build) => ({
    fetchAllUsers: build.query<IUser[], unknown>({
      query: () => ({
        url: '/users',
      }),
      providesTags: result => ['User']
    }),
  }))
})