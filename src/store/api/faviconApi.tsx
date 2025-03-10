// store/api/faviconApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const faviconApi = createApi({
  reducerPath: "faviconApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getFavicon: builder.query({
      query: () => "/get-favicon"
    }),
  }),
});

export const {
  useGetFaviconQuery
} = faviconApi;
