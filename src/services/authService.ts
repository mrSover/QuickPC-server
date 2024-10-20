import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quick-pc-test-ikmk-git-main-thesoverman-gmailcoms-projects.vercel.app/api" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body: body
      })
    }),
    signIn: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body: body
      })
    }),
    signOut: builder.mutation({
      query: (body) => ({
        url: "/logout",
        method: "POST",
        body: body
      })
    }),
    refresh: builder.query({
      query: () => "/refresh"
    }),
  })
})