"use client";
import Banner from "~/components/banner";
import OurTeam from "~/components/ourTeam";
import SwiperCard from "~/components/swiperCard";
import SectionBlock from "~/components/ui/section-block";
import { useGetAboutQuery } from "~/store/api/aboutApi";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";

export default function page() {
  const { data: aboutResponse } = useGetAboutQuery({});
  const { data: categories, isLoading } = useGetCategoriesQuery({});

  return (
    <>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto mt-10 max-w-[1075px] px-3 md:mt-[70px]"
        position="left"
      >
        <Banner bannerData={aboutResponse?.data}></Banner>
        <OurTeam bannerData={aboutResponse?.data}></OurTeam>
      </SectionBlock>
      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <SwiperCard categories={categories} isLoading={isLoading}></SwiperCard>
      </SectionBlock>
    </>
  );
}
