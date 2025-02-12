// store/api/allProductsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const allProductsApi = createApi({
  reducerPath: "allProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/all-products",
      transformResponse: (response: { data: { id: number; name: string; image: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = allProductsApi;
