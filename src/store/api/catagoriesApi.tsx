// store/api/catagoriesApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const catagoriesApi = createApi({
  reducerPath: "catagoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse: (response: { data: { id: number; name: string; image: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
    getCategoriesById: builder.query({
      query: (categoryId: string) => `/get-category-by-id/${categoryId}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoriesByIdQuery } = catagoriesApi;
