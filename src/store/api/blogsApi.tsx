// store/api/blogsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import utils from "~/utils";

// Define the API service
export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: utils.BASE_URL }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/get-blogs",
    }),
    getBlogsById: builder.query({
      query: (blogId: string) => `/get-blog-by-slug/${blogId}`,
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogsByIdQuery,
} = blogsApi;
