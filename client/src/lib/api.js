import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/signin",
        method: "POST",
        body: loginData,
      }),
    }),
    getProfile: builder.query({
      query: () => "/auth/profile",
    }),
    getConversations: builder.query({
      query: () => "/conv/list",
    }),
  }),
});

export const { useGetConversationsQuery, useLoginMutation, useGetProfileQuery } = apiSlice;
