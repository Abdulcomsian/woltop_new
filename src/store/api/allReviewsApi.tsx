// store/api/allReviewsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const allReviewsApi = createApi({
  reducerPath: "allReviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => "/get-reviews"
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
} = allReviewsApi;
