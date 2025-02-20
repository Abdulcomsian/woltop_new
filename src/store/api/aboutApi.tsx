// store/api/aboutApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const aboutApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => "/get-about"
    }),
  }),
});

export const {
  useGetAboutQuery
} = aboutApi;
