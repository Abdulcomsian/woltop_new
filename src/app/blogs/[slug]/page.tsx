"use client";
import SectionBlock from "~/components/ui/section-block";
import BlogInner from "~/app/pages/blogInner";
import { useGetBlogsByIdQuery } from "~/store/api/blogsApi";

interface PageParams {
  slug: string;
}

const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

export default function page({ params }: { params: PageParams }) {
  const { slug } = params;
  const { data: blog, isLoading } = useGetBlogsByIdQuery(slug);
  // console.log("blog Details", blog);
  const resData = blog ? { data: blog, status: true } : null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }
  
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
