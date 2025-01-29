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
        {blogs.data.map((blog: { id: React.Key | null | undefined; slug: any; image: any; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; short_description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`} className="flex w-full flex-col p-5 sm:w-1/2 md:w-2/4">
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
                  <h1 className="text-semibold text-lg md:text-2xl">{blog.title}</h1>
                  <div>
                    <BlogArrow />
                  </div>
                </div>
                <div className="text-[#0B0A0A] flex-1 text-sm md:text-base max-w-[92%]">
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
