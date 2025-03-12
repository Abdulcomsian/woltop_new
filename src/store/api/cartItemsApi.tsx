// store/api/cartItemsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const cartItemsApi = createApi({
  reducerPath: "cartItemsApi",
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
    getCartItems: builder.query({
      query: () => "/show-cart-items"
    }),
  }),
});

export const { useGetCartItemsQuery } = cartItemsApi;