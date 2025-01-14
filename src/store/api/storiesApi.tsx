// store/api/storiesApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const storiesApi = createApi({
  reducerPath: "storiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  endpoints: (builder) => ({
    getStories: builder.query({
      query: () => "/stories", 
      transformResponse: (response: { data: { id: number; path: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetStoriesQuery
} = storiesApi;
