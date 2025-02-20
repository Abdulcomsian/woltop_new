// store/api/contactInfoApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const contactInfoApi = createApi({
  reducerPath: "contactInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getContactInfo: builder.query({
      query: () => "/get-contact-info"
    }),
  }),
});

export const {
  useGetContactInfoQuery
} = contactInfoApi;
