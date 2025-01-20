// store/api/toolsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const toolsApi = createApi({
  reducerPath: "toolsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  endpoints: (builder) => ({
    getTools: builder.query({
      query: () => `/tools`,
    }),
  }),
});


export const { useGetToolsQuery } = toolsApi;
