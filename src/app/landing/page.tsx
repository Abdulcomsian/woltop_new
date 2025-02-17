"use client";
import SectionBlock from "~/components/ui/section-block";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import OurRangesCard from "../pages/shop/OurRangesCard";
import Reeling from "../pages/shop/reeling";
import LandingBanner from "../pages/shop/landingBanner";
import { LandingBannerStepper } from "~/components/landingBannerStepper";
export default function page() {
  const { data: categories, isLoading } = useGetCategoriesQuery({});

  return (
    <>
      <SectionBlock
        title="Home Consultation for Wallpapers"
        subtitle=""
        className="relative landingForm mx-auto mt-16 max-w-[1075px] px-3"
        position="center"
      >
        <LandingBanner />
        <div className="overflow-x-auto -mt-8 z-50 scrollbar-hide">
          <LandingBannerStepper />
        </div>
      </SectionBlock>
      <SectionBlock
        title="Browse Our Ranges"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <OurRangesCard
          //@ts-ignore
          cardData={categories}
          isLoading={isLoading}
        ></OurRangesCard>
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Reels"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <Reeling></Reeling>
      </SectionBlock>
    </>
  );
}
