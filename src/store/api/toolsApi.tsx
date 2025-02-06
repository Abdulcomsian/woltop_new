// store/api/toolsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const toolsApi = createApi({
  reducerPath: "toolsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getTools: builder.query({
      query: () => `/tools`,
    }),
  }),
});

export const { useGetToolsQuery } = toolsApi;
