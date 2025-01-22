// store/api/blogsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://woltop.accrualdev.com/api" }),
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
