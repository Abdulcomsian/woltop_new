"use client";

import dynamic from "next/dynamic";
import { useGetRoomCategoriesQuery } from "~/store/api/roomCatagoriesApi";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";
import { useGetColorsQuery } from "~/store/api/paramApi";
import SectionBlock from "~/components/ui/section-block";

// Dynamic imports
const Reeling = dynamic(() => import("./shop/reeling"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const CategorieCard = dynamic(() => import("./shop/categorieCard"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const VideoSection = dynamic(() => import("./shop/videoSection"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const ConsultationSection = dynamic(
  () => import("./shop/consultation-background"),
  { loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" /> },
);

export default function MiddleSections() {
  // Secondary data fetching
  const { data: roomCategories } = useGetRoomCategoriesQuery({});
  const { data: homeVideo } = useGetHomeBannerQuery({});
  const { data: colors } = useGetColorsQuery({});
  console.log("Room Categories", roomCategories);

  return (
    <>
      {/* Reeling Section */}
      <SectionBlock
        title="Unreeling Some Wolpin Reelss"
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <Reeling />
      </SectionBlock>

      {/* Room Categories */}
      <div className="bg-[#F1FBFF] pt-10 md:pt-14">
        <SectionBlock
          title="Shop By Room"
          subtitle="Wallpaper designs for every room"
          className="mx-auto max-w-[1075px] px-3"
          position="left"
        >
          <CategorieCard
            cardData={
              // @ts-ignore
              roomCategories
            }
            isLoading={undefined}
          />
        </SectionBlock>
      </div>

      {/* Video Section */}
      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="left">
        <VideoSection responseData={homeVideo} isLoading={false} />
      </SectionBlock>

      {/* Consultation Section */}
      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="left">
        <ConsultationSection responseData={homeVideo} isLoading={undefined} />
      </SectionBlock>
    </>
  );
}
