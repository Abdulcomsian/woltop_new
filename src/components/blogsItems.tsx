import React, { useEffect, useState } from "react";
import { BlogArrow } from "./icons/BlogArrow";
import { useGetBlogsQuery } from "~/store/api/blogsApi";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

export default function BlogsItems() {
  const { data: blogs, isLoading } = useGetBlogsQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // const blogs = blogs?.data || [];
  const totalPages = Math.ceil(blogs?.data?.length / blogsPerPage);

  const paginatedBlogs = blogs?.data?.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div
        className="container mx-auto mt-14"
        style={{ fontFamily: "Inter, serif" }}
      >
        <div className="-m-3 flex flex-wrap">
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col p-3 sm:w-1/2 md:w-2/4 md:p-5"
                >
                  <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                    <div className="h-[234px] animate-pulse bg-gray-200 md:h-[334px]"></div>
                    <div className="flex flex-1 flex-col space-y-3 pt-4">
                      <div className="h-4 w-32 animate-pulse bg-gray-200"></div>
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-3/4 animate-pulse bg-gray-200"></div>
                        <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200"></div>
                      </div>
                      <div className="h-4 w-full animate-pulse bg-gray-200"></div>
                      <div className="h-4 w-5/6 animate-pulse bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              ))
            : paginatedBlogs?.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="flex w-full flex-col p-3 sm:w-1/2 md:w-2/4 md:p-5"
                >
                  <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                    <div
                      className="h-[234px] bg-cover md:h-[334px]"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    ></div>
                    <div className="flex flex-1 flex-col pt-4">
                      <p className="mb-3 text-sm font-semibold text-[#49AD91]">
                        {blog?.date || "Sunday , 1 Jan 2024"}
                      </p>
                      <div className="mb-3 flex justify-between">
                        <h1 className="text-semibold text-lg text-black md:text-2xl">
                          {blog.title}
                        </h1>
                        <div>
                          <BlogArrow />
                        </div>
                      </div>
                      <div className="max-w-[92%] flex-1 text-sm text-[#0B0A0A] md:text-base">
                        <p>{blog.short_description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
      <div className="container mx-auto w-full">
        <div className="mx-auto mt-5 flex w-full items-center justify-between lg:w-[40%]">
          {/* Previous Button */}
          <div
            className={`flex cursor-pointer items-center pt-3 text-gray-600 ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:text-indigo-700"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowLeft size={16} />
            <p className="ml-3 text-sm font-medium leading-none">Previous</p>
          </div>

          {/* Page Numbers */}
          <div className="mt-3 hidden sm:flex">
            {Array?.from({ length: 3 }, (_, index) => (
              <p
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-4 cursor-pointer p-1 px-2 text-sm font-medium leading-none ${
                  currentPage === index + 1
                    ? "rounded bg-[#49AD91] text-white"
                    : "border-t border-transparent text-gray-600 hover:text-[#49AD91]"
                }`}
              >
                {index + 1}
              </p>
            ))}
          </div>

          {/* Next Button */}
          <div
            className={`flex cursor-pointer items-center pt-3 text-gray-600 ${
              currentPage === 8
                ? "cursor-not-allowed opacity-50"
                : "hover:text-indigo-700"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p className="mr-3 text-sm font-medium leading-none">Next</p>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </>
  );
}
