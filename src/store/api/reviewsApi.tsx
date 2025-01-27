// store/api/reviewsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getReviewByProduct: builder.query({
      query: (productId: string) => `/get-review-by-product/${productId}`,
    }),
  }),
});

export const {
  useGetReviewByProductQuery,
} = reviewsApi;
