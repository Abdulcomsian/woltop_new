// store/api/deliveryPreference.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const deliveryPreference = createApi({
  reducerPath: "deliveryPreference",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getDeliveryPreference: builder.query({
      query: () => "/delivery-preferences",
    }),
  }),
});

export const {
  useGetDeliveryPreferenceQuery
} = deliveryPreference;
