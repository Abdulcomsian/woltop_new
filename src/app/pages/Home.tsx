"use client";
import Banner from "./shop/banner";
import PopularWallpaper from "./shop/popularWallpaper";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import TagsProductCard from "./shop/tagsProduct";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import { useGetPopularProductsQuery } from "~/store/api/productApi";
import { useGetColorsQuery, useGetTagsQuery } from "~/store/api/paramApi";
import TabsComponent from "~/components/tabComponent";
import SwiperCard from "~/components/swiperCard";
import HomePageReviewCards from "./shop/homePageReviewCards";
import RecentCard from "./shop/RecentCard";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import { useGetRoomCategoriesQuery } from "~/store/api/roomCatagoriesApi";
import OurRangesCard from "./shop/OurRangesCard";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";
import { useMemo } from "react";
export default function Home() {
  const { data: popularProducts, isLoading: isLoadingPopularProducts } =
    useGetPopularProductsQuery(undefined, {
      // Prefer cache if available
      refetchOnMountOrArgChange: false,
      // Only refetch when cache is older than 1 hour
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });
  const { data: colors, isLoading: isLoadingColors } = useGetColorsQuery({});
  const { data: tags, isLoading: isLoadingTags } = useGetTagsQuery({});
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  const { data: roomCategories, isLoading: isLoadingRoomCategories } =
    useGetRoomCategoriesQuery({});
  const { data: homeVideo, isLoading: isLoadingHomeVideo } =
    useGetHomeBannerQuery({});

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

  return (
    <>
      <div className="mx-auto mb-[24px] mt-4 max-w-[1075px] px-3 md:mt-[22px]">
        <SwiperCard categories={categories} isLoading={isLoading}></SwiperCard>
      </div>
      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="center">
        <Banner></Banner>
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <PopularWallpaper
          products={popularProducts}
          isLoading={isLoading}
        ></PopularWallpaper>
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Reelsssss"
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
          isLoading={isLoading}
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
          isLoading={isLoading}
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
            isLoading={isLoading}
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
          isLoading={isLoading}
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
          isLoading={isLoading}
        ></SwiperCard>
      </SectionBlock>
      {/* <SectionBlock
        title="@wolpinwallpaper.in"
        subtitle="Follow Us on Instagram"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <WolpinWallpaper />
      </SectionBlock> */}
    </>
  );
}
