import React from "react";
import { BlogArrow } from "./icons/BlogArrow";
import { useGetBlogsQuery } from "~/store/api/blogsApi";
import Link from "next/link";

export default function BlogsItems() {
  const { data: blogs, isLoading } = useGetBlogsQuery({});

  return (
    <div className="container mx-auto mb-5 mt-14">
      <div className="-m-3 flex flex-wrap">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex w-full flex-col p-5 sm:w-1/2 md:w-2/4"
              >
                <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                  <div className="h-[234px] md:h-[334px] bg-gray-200 animate-pulse"></div>
                  <div className="flex flex-1 flex-col pt-4 space-y-3">
                    <div className="h-4 w-32 bg-gray-200 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-3/4 bg-gray-200 animate-pulse"></div>
                      <div className="h-6 w-6 bg-gray-200 animate-pulse rounded-full"></div>
                    </div>
                    <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))
          : blogs.data.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="flex w-full flex-col p-5 sm:w-1/2 md:w-2/4"
              >
                <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                  <div
                    className="h-[234px] md:h-[334px] bg-cover"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></div>
                  <div className="flex flex-1 flex-col pt-4">
                    <p className="text-[#49AD91] text-sm font-semibold mb-3">
                      Sunday , 1 Jan 2024
                    </p>
                    <div className="flex justify-between mb-3">
                      <h1 className="text-semibold text-lg text-black md:text-2xl">
                        {blog.title}
                      </h1>
                      <div>
                        <BlogArrow />
                      </div>
                    </div>
                    <div className="text-[#0B0A0A] flex-1 text-sm md:text-base max-w-[92%]">
                      <p>{blog.short_description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
