// store/api/teamApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => "/get-team-member"
    }),
  }),
});

export const {
  useGetTeamQuery
} = teamApi;
