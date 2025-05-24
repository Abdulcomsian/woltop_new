"use client";
import dynamic from "next/dynamic";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { useGetPopularProductsQuery } from "~/store/api/productApi";
import { useGetColorsQuery, useGetTagsQuery } from "~/store/api/paramApi";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import { useGetRoomCategoriesQuery } from "~/store/api/roomCatagoriesApi";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";
import { useMemo } from "react";

// Dynamically import all components with loading states
const Banner = dynamic(() => import("./shop/banner"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const SwiperCard = dynamic(() => import("~/components/swiperCard"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const PopularWallpaper = dynamic(() => import("./shop/popularWallpaper"), {
  loading: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-64 animate-pulse rounded bg-gray-200" />
      ))}
    </div>
  ),
});

const Reeling = dynamic(() => import("./shop/reeling"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const DetailCard = dynamic(() => import("./shop/detailCard"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const TagsProductCard = dynamic(() => import("./shop/tagsProduct"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const CategorieCard = dynamic(() => import("./shop/categorieCard"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const VideoSection = dynamic(() => import("./shop/videoSection"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const SectionBlock = dynamic(() => import("~/components/ui/section-block"), {
  loading: () => <div />,
});

const StepSection = dynamic(() => import("./shop/stepSection"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const ConsultationSection = dynamic(
  () => import("./shop/consultation-background"),
  {
    loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
  },
);

const TabsComponent = dynamic(() => import("~/components/tabComponent"), {
  loading: () => (
    <div>
      <div className="flex space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 pt-14 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="relative z-0 h-52 w-full animate-pulse bg-gray-200 md:h-80"
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
    </div>
  ),
});

const HomePageReviewCards = dynamic(
  () => import("./shop/homePageReviewCards"),
  {
    loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
  },
);

const RecentCard = dynamic(() => import("./shop/RecentCard"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const OurRangesCard = dynamic(() => import("./shop/OurRangesCard"), {
  loading: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-64 animate-pulse rounded bg-gray-200" />
      ))}
    </div>
  ),
});

export default function Home() {
  const { data: popularProducts, isLoading: isLoadingPopularProducts } =
    useGetPopularProductsQuery(undefined, {
      refetchOnMountOrArgChange: false,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });

  const { data: colors, isLoading: isLoadingColors } = useGetColorsQuery({});
  const { data: tags, isLoading: isLoadingTags } = useGetTagsQuery({});
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery({});
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
        title="Unreeling Some Wolpin Reelss"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <Reeling />
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
        />
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <VideoSection
          //@ts-ignore
          responseData={homeVideo}
          isLoading={isLoadingHomeVideo}
        />
      </SectionBlock>

      <div className="mb-10 bg-[#F1FBFF] pt-10 md:mb-[70px] md:pt-[70px]">
        <SectionBlock
          title="Shop By Room"
          subtitle="Wallpaper designs for every room"
          className="mx-auto max-w-[1075px] bg-[#F1FBFF] px-3"
          position="left"
        >
          <CategorieCard
            cardData={roomCategories}
            isLoading={isLoadingRoomCategories}
          />
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
          isLoading={isLoadingHomeVideo}
        />
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
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-5 pt-[58px] md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, index) => (
                  <Card
                    key={index}
                    className="relative z-0 h-52 w-full animate-pulse bg-gray-200 md:h-80"
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
          <Reeling />
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
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
                    className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-5 pt-[58px] md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, index) => (
                  <Card
                    key={index}
                    className="relative z-0 h-52 w-full animate-pulse bg-gray-200 md:h-80"
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
          ) : (
            <TabsComponent tabs={productTabs} content={productContent} />
          )}
          <HomePageReviewCards />
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <RecentCard />
      </SectionBlock>

      <SectionBlock
        title="Elevate Your Room"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <SwiperCard
          categories={roomCategories}
          isLoading={isLoadingRoomCategories}
        />
      </SectionBlock>
    </>
  );
}
