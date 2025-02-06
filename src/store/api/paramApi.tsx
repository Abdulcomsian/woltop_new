// store/api/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const paramApi = createApi({
  reducerPath: "paramApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
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
