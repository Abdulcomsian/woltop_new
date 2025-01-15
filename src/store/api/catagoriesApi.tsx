// store/api/catagoriesApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catagoriesApi = createApi({
  reducerPath: "catagoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse: (response: { data: { id: number; name: string; image: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = catagoriesApi;
