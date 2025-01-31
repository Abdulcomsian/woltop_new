// store/api/deliveryApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getDelivery: builder.query({
      query: () => "/delivery-details",
    }),
  }),
});

export const {
  useGetDeliveryQuery
} = deliveryApi;
