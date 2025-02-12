"use client";
import Banner from "./shop/banner";
import PopularWallpaper from "./shop/popularWallpaper";
import product1 from "../../assets/product/Woltop2222.png";
import product2 from "../../assets/product/Woltop333333.png";
import product3 from "../../assets/product/Woltop44444.png";
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
import { useGetHomeVideoQuery } from "~/store/api/homeVideoApi";
export default function Home() {
  const { data: popularProducts } = useGetPopularProductsQuery({});
  const {
    data: colors,
    // isLoadingColors,
    // errorColors,
  } = useGetColorsQuery({});
  const {
    data: tags,
    // isLoadingColors,
    // errorColors,
  } = useGetTagsQuery({});
  const { data: categories } = useGetCategoriesQuery({});
  const { data: roomCategories } = useGetRoomCategoriesQuery({});
  const { data: homeVideo } = useGetHomeVideoQuery({});

  const colorTabs =
    colors?.data.map((color: any) => ({
      value: color.id,
      label: color.name,
      // Including the ID for further use if needed
    })) || [];

  const colorContent = colorTabs.map((tab: any) => ({
    value: tab.value,
    component: <DetailCard colorId={tab.value} />, // Customize the component as needed
  }));

  const productTabs =
    tags?.data.map((tags: any) => ({
      value: tags.id,
      label: tags.name,
      // Including the ID for further use if needed
    })) || [];

  const productContent = productTabs.map((tab: any) => ({
    value: tab.value,
    component: <TagsProductCard tagId={tab.value} />,
  }));

  const BrowseCardData = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product3,
    },
  ];

  return (
    <>
      <div className="mx-auto my-[22px] max-w-[1075px] px-3 md:my-[41px]">
        <SwiperCard categories={categories}></SwiperCard>
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
        {popularProducts?.status === false ? (
          <p>{popularProducts.data}</p>
        ) : popularProducts?.data?.length > 0 ? (
          <PopularWallpaper products={popularProducts}></PopularWallpaper>
        ) : (
          ""
        )}
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
        ></OurRangesCard>
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        {/* <VideoSection></VideoSection> */}
        <VideoSection responseData={homeVideo}></VideoSection>
      </SectionBlock>
      {/* <Card> </Card> */}
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
          ></CategorieCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px]"
        position="left"
      >
        <ConsultationSection></ConsultationSection>
      </SectionBlock>

      <div className="mb-10 mt-10 bg-[#FFF3F6] md:mb-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3"
          position="center"
        >
          {!colors?.data ? (
            <div>Loading colors...</div>
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
          subtitle="Projects We’ve Brought to Life"
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
          {!tags?.data ? (
            <div>Loading Tags...</div>
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
        title="Recently Viewed"
        subtitle="Continue where you left off"
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
        <SwiperCard categories={roomCategories}></SwiperCard>
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
