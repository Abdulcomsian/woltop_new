// store/api/homeBannerApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const homeBannerApi = createApi({
  reducerPath: "homeBannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getHomeBanner: builder.query({
      query: () => "/get-home-banner",
      transformResponse: (response: { data: { id: number; name: string; image: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetHomeBannerQuery } = homeBannerApi;
