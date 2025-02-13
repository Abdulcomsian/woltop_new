// store/api/wishlistApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: utils.BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWishlistItems: builder.query({
      query: () => "/show-wishlist-items",
      transformResponse: (response: { status: boolean; data: any[] }) => {
        if (response.status) {
          return response.data.map((item) => ({
            id: item.id,
            name: item.title,
            short_description: item.short_description,
            price: parseFloat(item.sale_price),
            sale_price: parseFloat(item.sale_price),
            image: item.image,
            inStock: true,
          }));
        }
        return [];
      },
    }),
    deleteWishlistItem: builder.mutation({
      query: (id) => ({
        url: `/delete-wishlist-item/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWishlistItemsQuery, useDeleteWishlistItemMutation } = wishlistApi;