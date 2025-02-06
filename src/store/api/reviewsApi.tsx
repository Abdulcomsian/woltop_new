// store/api/reviewsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getReviewByProduct: builder.query({
      query: (productId: string) => `/get-review-by-product/${productId}`,
    }),
  }),
});

export const {
  useGetReviewByProductQuery,
} = reviewsApi;
