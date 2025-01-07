// store/api/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const paramApi = createApi({
  reducerPath: "paramApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  endpoints: (builder) => ({
    getColors: builder.query({
      query: () => "/colors",
    }),
    getTags: builder.query({
      query: () => "/tags",
    }),
    getStories: builder.query({
      query: () => "/stories",
    }),
  }),
});

export const { useGetColorsQuery, useGetTagsQuery, useGetStoriesQuery } =
  paramApi;
