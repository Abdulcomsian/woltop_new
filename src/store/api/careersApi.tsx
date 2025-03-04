// store/api/careersApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const careersApi = createApi({
  reducerPath: "careersApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getCareers: builder.query({
      query: () => "/career",
    }),
  }),
});

export const { useGetCareersQuery } = careersApi;
