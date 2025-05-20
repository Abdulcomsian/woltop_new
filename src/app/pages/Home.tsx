"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import SectionBlock from "~/components/ui/section-block";
import { useGetPopularProductsQuery } from "~/store/api/productApi";
import { useGetColorsQuery, useGetTagsQuery } from "~/store/api/paramApi";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import { useGetRoomCategoriesQuery } from "~/store/api/roomCatagoriesApi";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";

// Dynamically import components that use browser APIs or have client-side behavior
const Banner = dynamic(() => import("./shop/banner"), { ssr: false });
const PopularWallpaper = dynamic(() => import("./shop/popularWallpaper"), {
  ssr: false,
});
const Reeling = dynamic(() => import("./shop/reeling"), { ssr: false });
const DetailCard = dynamic(() => import("./shop/detailCard"), { ssr: false });
const TagsProductCard = dynamic(() => import("./shop/tagsProduct"), {
  ssr: false,
});
const CategorieCard = dynamic(() => import("./shop/categorieCard"), {
  ssr: false,
});
const VideoSection = dynamic(() => import("./shop/videoSection"), {
  ssr: false,
});
const StepSection = dynamic(() => import("./shop/stepSection"), { ssr: false });
const ConsultationSection = dynamic(
  () => import("./shop/consultation-background"),
  { ssr: false },
);
const TabsComponent = dynamic(() => import("~/components/tabComponent"), {
  ssr: false,
});
const SwiperCard = dynamic(() => import("~/components/swiperCard"), {
  ssr: false,
});
const HomePageReviewCards = dynamic(
  () => import("./shop/homePageReviewCards"),
  { ssr: false },
);
const RecentCard = dynamic(() => import("./shop/RecentCard"), { ssr: false });
const OurRangesCard = dynamic(() => import("./shop/OurRangesCard"), {
  ssr: false,
});

export default function Home() {
  // Modify API hooks to skip during SSR
  const { data: popularProducts, isLoading: isLoadingPopularProducts } =
    useGetPopularProductsQuery(undefined, {
      refetchOnMountOrArgChange: false,
      skip: typeof window === "undefined",
    });

  const { data: colors, isLoading: isLoadingColors } = useGetColorsQuery(
    undefined,
    {
      skip: typeof window === "undefined",
    },
  );

  const { data: tags, isLoading: isLoadingTags } = useGetTagsQuery(undefined, {
    skip: typeof window === "undefined",
  });

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery(undefined, {
      skip: typeof window === "undefined",
    });

  const { data: roomCategories, isLoading: isLoadingRoomCategories } =
    useGetRoomCategoriesQuery(undefined, {
      skip: typeof window === "undefined",
    });

  const { data: homeVideo, isLoading: isLoadingHomeVideo } =
    useGetHomeBannerQuery(undefined, {
      skip: typeof window === "undefined",
    });

  // Memoized tab data (client-side only)
  const colorTabs = useMemo(
    () =>
      colors?.data?.map((color: any) => ({
        value: color.id,
        label: color.name,
      })) || [],
    [colors?.data],
  );

  const colorContent = useMemo(
    () =>
      colorTabs.map((tab: any) => ({
        value: tab.value,
        component: <DetailCard colorId={tab.value} />,
      })),
    [colorTabs],
  );

  const productTabs = useMemo(
    () =>
      tags?.data?.map((tag: any) => ({
        value: tag.id,
        label: tag.name,
      })) || [],
    [tags?.data],
  );

  const productContent = useMemo(
    () =>
      productTabs.map((tab: any) => ({
        value: tab.value,
        component: <TagsProductCard tagId={tab.value} />,
      })),
    [productTabs],
  );

  // Skeleton loader component
  const TabSkeleton = () => (
    <>
      <div className="-mt-[39px] flex space-x-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 pt-[58px] md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            className="custom-card-class relative z-0 h-52 w-auto animate-pulse items-center justify-center bg-gray-200 md:h-80"
          >
            <CardContent>
              <div className="mb-2 h-4 w-3/4 rounded-md bg-gray-300" />
              <div className="h-4 w-1/2 rounded-md bg-gray-300" />
            </CardContent>
            <CardFooter>
              <div className="h-5 w-1/4 rounded-md bg-gray-300" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="mx-auto mb-[24px] mt-4 max-w-[1075px] px-3 md:mt-[22px]">
        <SwiperCard categories={categories} isLoading={isLoadingCategories} />
      </div>

      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="center">
        <Banner />
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <PopularWallpaper
          products={popularProducts}
          isLoading={isLoadingPopularProducts}
        />
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Reels"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <Reeling></Reeling>
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
          isLoading={isLoadingCategories}
        ></OurRangesCard>
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <VideoSection
          responseData={homeVideo}
          isLoading={isLoadingCategories}
        ></VideoSection>
      </SectionBlock>
      <div className="mb-10 bg-[#F1FBFF] pt-10 md:mb-[70px] md:pt-[70px]">
        <SectionBlock
          title="Shop By Room"
          subtitle="Wallpaper designs for every room"
          className="mx-auto max-w-[1075px] bg-[#F1FBFF] px-3"
          position="left"
        >
          <CategorieCard
            //@ts-ignore
            cardData={roomCategories}
            isLoading={isLoadingRoomCategories}
          ></CategorieCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] md:px-3"
        position="left"
      >
        <ConsultationSection
          responseData={homeVideo}
          isLoading={isLoadingCategories}
        ></ConsultationSection>
      </SectionBlock>

      <div className="mb-10 mt-10 bg-[#FFF3F6] md:mb-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3"
          position="center"
        >
          {isLoadingColors || !colorTabs?.length || !colorContent?.length ? (
            <>
              <div className="-mt-[39px] flex space-x-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
                  ></div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-5 pt-[58px] md:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Card
                    key={index}
                    className="custom-card-class relative z-0 h-52 w-auto animate-pulse items-center justify-center bg-gray-200 md:h-80"
                  >
                    <CardContent>
                      <div className="mb-2 h-4 w-3/4 rounded-md bg-gray-300"></div>
                      <div className="h-4 w-1/2 rounded-md bg-gray-300"></div>
                    </CardContent>
                    <CardFooter>
                      <div className="h-5 w-1/4 rounded-md bg-gray-300"></div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <TabsComponent
              tabs={colorTabs}
              content={colorContent}
              flag="colors-tabs-section"
            />
          )}
        </SectionBlock>
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
        title="Effortless Wallpaper Ordering"
        subtitle="Simplify Your Wallpaper Shopping Experience"
        className="mx-auto max-w-[1075px]"
        position="center"
      >
        <StepSection />
      </SectionBlock>

      <div className="mb-10 bg-[#F1FBFF] md:mb-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3"
          position="center"
        >
          {isLoadingTags ? (
            <>
              <div className="-mt-[39px] flex space-x-4">
                {/* Skeleton loaders for tabs */}
                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
                  ></div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-5 pt-[58px] md:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Card
                    key={index}
                    className="custom-card-class relative z-0 h-52 w-auto animate-pulse items-center justify-center bg-gray-200 md:h-80"
                  >
                    <CardContent>
                      <div className="mb-2 h-4 w-3/4 rounded-md bg-gray-300"></div>
                      <div className="h-4 w-1/2 rounded-md bg-gray-300"></div>
                    </CardContent>
                    <CardFooter>
                      <div className="h-5 w-1/4 rounded-md bg-gray-300"></div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <TabsComponent tabs={productTabs} content={productContent} />
          )}
          <HomePageReviewCards />
        </SectionBlock>
      </div>
      {/* <SectionBlock
        title="Popular Tools"
        subtitle=""
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        <ToolsCard></ToolsCard>
      </SectionBlock> */}
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <RecentCard />
      </SectionBlock>

      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <SwiperCard
          categories={roomCategories}
          isLoading={isLoadingRoomCategories}
        ></SwiperCard>
      </SectionBlock>
      {/* Rest of your component remains the same */}
      {/* ... */}
    </>
  );
}
