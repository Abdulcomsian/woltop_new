// store/api/storiesApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const storiesApi = createApi({
  reducerPath: "storiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getStories: builder.query({
      query: () => "/reels", 
      transformResponse: (response: { data: { id: number; path: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetStoriesQuery
} = storiesApi;
