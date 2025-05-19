// store/api/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: utils.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Cache-Control",
        "public, s-maxage=3600, stale-while-revalidate=1800",
      );
      headers.set("Accept-Encoding", "gzip, deflate, br");
      // headers.set("CDN-Cache-Control", "public, max-age=3600");
      return headers;
    },
  }),
  tagTypes: ["Products", "Popular", "ColorProducts", "TagProducts"],
  endpoints: (builder) => ({
    getPopularProducts: builder.query({
      query: () => "/popular-products",
      providesTags: ["Popular"],
      keepUnusedDataFor: 3600,
    }),
    getProductsByColor: builder.query({
      query: (colorId: string) => `/products-by-color/${colorId}`,
      providesTags: (result, error, colorId) => [
        { type: "ColorProducts", id: colorId },
        "Products",
      ],
      keepUnusedDataFor: 3600,
    }),
    getProductsByTag: builder.query({
      query: (tagId: string) => `/products-by-tag/${tagId}`,
      providesTags: (result, error, tagId) => [
        { type: "TagProducts", id: tagId },
        "Products",
      ],
      keepUnusedDataFor: 3600,
    }),
    getProductById: builder.query({
      query: (productId: string) => ({
        url: `/get-product-by-id/${productId}`,
        headers: {
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
        },
      }),
      providesTags: (result, error, productId) => [
        { type: "Products", id: productId },
      ],
      keepUnusedDataFor: 3600, // 1 hour cache
      // Add this for Next.js optimization
      extraOptions: { next: { revalidate: 3600 } },
    }),
  }),
});

export const {
  useGetPopularProductsQuery,
  useGetProductsByColorQuery,
  useGetProductsByTagQuery,
  useGetProductByIdQuery,
} = productsApi;
