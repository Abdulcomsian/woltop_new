"use client";
import Link from "next/link";
// import topBar from "~/components/topBar";
import Banner from "~/components/banner";
import aboutBanner from "~/components/banner";
import VideoSection from "../pages/shop/videoSection";
import OurTeam from "~/components/ourTeam";
// import aboutBanner from "~/components/aboutBanner";
import bannerAbout from "/public/aboutbanner.jpg";
import SectionBlock from "~/components/ui/section-block";
import SwiperCard from "~/components/swiperCard";

export default function page() {
  const aboutBanner = {
    heading: "ABOUT WOLPIN",
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
        <Banner bannerData={aboutBanner}></Banner>
        <OurTeam></OurTeam>
      </SectionBlock>
      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="pt-14 px-3 lg:container lg:m-auto"
        position="center"
      >
        <SwiperCard></SwiperCard>
      </SectionBlock>
    </main>
  );
}
