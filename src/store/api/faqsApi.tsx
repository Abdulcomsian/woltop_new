// store/api/faqsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const faqsApi = createApi({
  reducerPath: "faqsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => "/get-faqs"
    }),
  }),
});

export const {
  useGetFaqsQuery
} = faqsApi;
