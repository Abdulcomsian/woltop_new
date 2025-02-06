// store/api/faqsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const faqsApi = createApi({
  reducerPath: "faqsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => "/get-faqs"
    }),
  }),
});

export const {
  useGetFaqsQuery
} = faqsApi;
