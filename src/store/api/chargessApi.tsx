// store/api/chargessApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const chargessApi = createApi({
  reducerPath: "chargessApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getCharges: builder.query({
      query: () => "/price-charges"
    }),
  }),
});

export const {
  useGetChargesQuery
} = chargessApi;
