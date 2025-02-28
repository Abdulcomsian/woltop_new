// store/api/toolkitApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const toolkitApi = createApi({
  reducerPath: "toolkitApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getToolkit: builder.query({
      query: () => `/get-toolkit`,
    }),
  }),
});

export const { useGetToolkitQuery } = toolkitApi;
