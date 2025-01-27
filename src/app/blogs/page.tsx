"use client";
import Banner from "~/components/banner";
import BlogsItems from "~/components/blogsItems";
import SectionBlock from "~/components/ui/section-block";

export default function page() {
  const blogBanner = {
    heading: "OUR BLOGS",
    subHeading: "Find our all blogs from here",
    desc: "Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo maecenas auctor sodales. Libero ut tortor dignissim ac vitae erat ut est metus. Consectetur tincidunt pretium nunc dolor",
  };
  return (
    <main className="">
      <SectionBlock
        title=""
        subtitle=""
        className="pt-4 px-3 lg:container lg:m-auto"
        position="left"
      >
        <Banner bannerData={blogBanner}></Banner>
        <BlogsItems></BlogsItems>
      </SectionBlock>
    </main>
  );
}
