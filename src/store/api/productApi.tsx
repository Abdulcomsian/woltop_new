// store/api/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getPopularProducts: builder.query({
      query: () => "/popular-products",
    }),
    getProductsByColor: builder.query({
      query: (colorId: string) => `/products-by-color/${colorId}`,
    }),
    getProductsByTag: builder.query({
      query: (tagId: string) => `/products-by-tag/${tagId}`,
    }),
    getProductById: builder.query({
      query: (productId: string) => `/get-product-by-id/${productId}`,
    }),
  }),
});

export const {
  useGetPopularProductsQuery,
  useGetProductsByColorQuery,
  useGetProductsByTagQuery,
  useGetProductByIdQuery,
} = productsApi;
