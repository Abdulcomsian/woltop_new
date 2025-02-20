"use client";
import Banner from "~/components/banner";
import BlogsItems from "~/components/blogsItems";
import SectionBlock from "~/components/ui/section-block";

export default function page() {
  const blogBanner = {
    id: 2,
    name: "OUR BLOGS",
    title: "Find our all blogs from here",
    team_title: "Meet Our Team",
    description: "Lorem ipsum dolor sit amet",
    team_description: "Lorem ipsum dolor si",
    banner: "https://dashboard.wolpin.in/assets/wolpin_media/general/about/1740037220_841512732.jpg",
    logo: "https://dashboard.wolpin.in/assets/wolpin_media/general/about/1740037220_1209231316.png"
 };
  
  return (
    <main className="">
      <SectionBlock
        title=""
        subtitle=""
        className="mt-10 md:mt-[70px] px-3 max-w-[1075px] mx-auto"
        position="left"
      >
        <Banner bannerData={blogBanner}></Banner>
        <BlogsItems></BlogsItems>
      </SectionBlock>
    </main>
  );
}
