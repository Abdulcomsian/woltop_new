import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const homeBannerApi = createApi({
  reducerPath: "homeBannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: utils.BASE_URL,
    prepareHeaders: (headers) => {
      // Set cache control headers if your API supports them
      headers.set("Cache-Control", "public, max-age=3600");
      headers.set("CDN-Cache-Control", "public, max-age=3600");
      return headers;
    },
  }),
  // Define how long to keep unused data in cache
  keepUnusedDataFor: 300, // 5 minutes
  endpoints: (builder) => ({
    getHomeBanner: builder.query({
      query: () => ({
        url: "/get-home",
        // Optionally add cache tags for more control
        providesTags: ["HomeBanner"],
      }),
      transformResponse: (response: {
        data: {
          banner: boolean;
          id: number;
          name: string;
          image: string;
          logo?: string;
          text?: string;
          button_link?: string;
        }[];
        status: boolean;
      }) => {
        // Return the first item if array, or the data object if single
        return Array.isArray(response.data) ? response.data[0] : response.data;
      },
      // Optionally add cache invalidation tags
      //@ts-ignore
      invalidatesTags: ["HomeBanner"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetHomeBannerQuery,
  useLazyGetHomeBannerQuery, // For manual triggering
} = homeBannerApi;
