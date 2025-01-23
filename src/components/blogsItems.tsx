import React from "react";
import { BlogArrow } from "./icons/BlogArrow";
import { useGetBlogsQuery } from "~/store/api/blogsApi";
import Link from "next/link";

export default function BlogsItems() {
  const { data: blogs } = useGetBlogsQuery({});

  if (!blogs) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mb-5 mt-14">
      <div className="-m-3 flex flex-wrap">
        {blogs.data.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`} className="flex w-full flex-col p-3 sm:w-1/2 md:w-2/4">
            <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
              <div
                className="h-80 bg-cover"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
              <div className="flex flex-1 flex-col pt-4">
                <p className="text-[#49AD91]" style={{ fontSize: "12px" }}>
                  Sunday , 1 Jan 2024
                </p>
                <div className="flex justify-between">
                  <h1 className="text-bold">{blog.title}</h1>
                  <div>
                    <BlogArrow />
                  </div>
                </div>
                <div className="text-grey-darker mb-4 flex-1 text-sm">
                  <p>{blog.short_description}</p>
                </div>
                {/* <a
                  href="#"
                  className="border-grey-light text-grey hover:text-red border-t pt-2 text-xs uppercase tracking-wide no-underline"
                >
                  Twitter
                </a> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
