// store/api/homeVideoApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const homeVideoApi = createApi({
  reducerPath: "homeVideoApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getHomeVideo: builder.query({
      query: () => "/get-video",
    }),
  }),
});

export const { useGetHomeVideoQuery } = homeVideoApi;
