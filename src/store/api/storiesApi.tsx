// store/api/storiesApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const storiesApi = createApi({
  reducerPath: "storiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
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
