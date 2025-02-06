// store/api/deliveryApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getDelivery: builder.query({
      query: () => "/delivery-details",
    }),
  }),
});

export const {
  useGetDeliveryQuery
} = deliveryApi;
