// store/api/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
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
