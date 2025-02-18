"use client";
import SectionBlock from "~/components/ui/section-block";
import Reeling from "../pages/shop/reeling";
import LandingBanner from "../pages/shop/landingBanner";
import { LandingBannerStepper } from "~/components/landingBannerStepper";
import FeaturedImages from "../pages/shop/featuredImages";
import Faqs from "../pages/shop/faqs";
import LandingAbout from "../pages/shop/landingAbout";
export default function page() {

  return (
    <>
      <SectionBlock
        title="Home Consultation for Wallpapers"
        subtitle=""
        className="landingForm relative mx-auto mt-16 max-w-[1075px] px-3"
        position="center"
      >
        <LandingBanner />
        <div className="scrollbar-hide z-50 -mt-8 overflow-x-auto">
          <LandingBannerStepper />
        </div>
      </SectionBlock>
      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-[56px]"
          position="left"
        >
          <LandingAbout />
        </SectionBlock>
      </div>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-[56px]"
        position="left"
      >
        <FeaturedImages />
      </SectionBlock>
      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title="Styled Spaces by Our Clients"
          subtitle="Projects We've Brought to Life"
          className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-[56px]"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3 "
        position="left"
      >
        <Faqs />
      </SectionBlock>
    </>
  );
}
