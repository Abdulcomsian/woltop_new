"use client";
import Banner from "~/components/banner";
import OurTeam from "~/components/ourTeam";
import SectionBlock from "~/components/ui/section-block";
import SwiperItem from "../pages/shop/swiperItem";

export default function page() {
  const aboutBanner = {
    heading: "ABOUT WOLPIN",
    subHeading: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo maecenas auctor sodales."
  };
  return (
    <>
      <SectionBlock
        title=""
        subtitle=""
        className="px-3 max-w-6xl mx-auto mt-10 md:mt-[70px]"
        position="left"
      >
        <Banner bannerData={aboutBanner}></Banner>
        <OurTeam></OurTeam>
      </SectionBlock>
      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="px-3 max-w-6xl mx-auto"
        position="center"
      >
        <SwiperItem></SwiperItem>
      </SectionBlock>
    </>
  );
}
