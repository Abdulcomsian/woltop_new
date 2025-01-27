"use client";
import Banner from "~/components/banner";
import OurTeam from "~/components/ourTeam";
import SectionBlock from "~/components/ui/section-block";
import SwiperCard from "~/components/swiperCard";

export default function page() {
  const aboutBanner = {
    heading: "ABOUT WOLPIN",
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
