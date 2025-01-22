"use client";
import Link from "next/link";
import Banner from "~/components/banner";
import aboutBanner from "~/components/banner";
import VideoSection from "../pages/shop/videoSection";
import OurTeam from "~/components/ourTeam";
// import aboutBanner from "~/components/aboutBanner";
import bannerAbout from "/public/aboutbanner.jpg";
import BlogsItems from "~/components/blogsItems";
import SectionBlock from "~/components/ui/section-block";

export default function page() {
  const blogBanner = {
    heading: "OUR BLOGS",
    subHeading: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo maecenas auctor sodales."
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
