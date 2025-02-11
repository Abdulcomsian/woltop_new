"use client";
import SectionBlock from "~/components/ui/section-block";
import BlogInner from "~/app/pages/blogInner";
import { useGetBlogsByIdQuery } from "~/store/api/blogsApi";

interface PageParams {
  slug: string;
}

export default function page({ params }: { params: PageParams }) {
  const { slug } = params;
  const { data: blog } = useGetBlogsByIdQuery(slug);
  // console.log("blog Details", blog);
  const resData = blog ? { data: blog, status: true } : null;

  return (
    <main className="">
      <SectionBlock
        title=""
        subtitle=""
        className="px-3 mt-10 md:mt-[70px] max-w-[1075px] mx-auto"
        position="left"
      >
        <BlogInner resData={resData?.data} />
      </SectionBlock>
    </main>
  );
}
