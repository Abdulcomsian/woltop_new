// store/api/roomCatagoriesApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

export const roomCatagoriesApi = createApi({
  reducerPath: "roomCatagoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getRoomCategories: builder.query({
      query: () => "/room-categories",
      transformResponse: (response: { data: { id: number; name: string; image: string }[]; status: boolean }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetRoomCategoriesQuery } = roomCatagoriesApi;
