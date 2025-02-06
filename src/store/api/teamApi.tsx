// store/api/teamApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => "/get-team-member"
    }),
  }),
});

export const {
  useGetTeamQuery
} = teamApi;
