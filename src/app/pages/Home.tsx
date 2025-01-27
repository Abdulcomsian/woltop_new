"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import ReviewCard from "./shop/reviewCard";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import TagsProductCard from "./shop/tagsProduct";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  useGetPopularProductsQuery,
  useGetProductsByColorQuery,
} from "~/store/api/productApi";
import { useGetColorsQuery, useGetTagsQuery } from "~/store/api/paramApi";
import TabsComponent from "~/components/tabComponent";
import SwiperCard from "~/components/swiperCard";
import ToolsCard from "./shop/toolsCard";
import HomePageReviewCards from "./shop/homePageReviewCards";
import WolpinWallpaper from "./shop/wolpinWallpaper";
export default function Home() {
  const {
    data: popularProducts,
    isLoading,
    error,
  } = useGetPopularProductsQuery({});
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
  if (isLoading) return <div>Loading...</div>;

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
    component: <TagsProductCard tagId={tab.value} />, // Customize the component as needed
  }));
  // const productContent = [
  //   {
  //     value: "BestSelling",
  //     component: (
  //       <>
  //         <DetailCard rating={undefined} />
  //         <ReviewCard />
  //       </>
  //     ),
  //   },
  //   {
  //     value: "NewArrival",
  //     component: (
  //       <>
  //         <div className="mb-4 mt-8 flex justify-center">
  //           <button className="text-light hover:bg-accent-hover inline-flex h-11 h-12 shrink-0 items-center justify-center rounded bg-green-800 px-5 py-0 text-sm font-semibold leading-none text-white">
  //             Load More
  //           </button>
  //         </div>
  //         <ReviewCard />
  //       </>
  //     ),
  //   },
  // ];

  
  return (
    <main className="font-poppins">
      {/* <Swiper></Swiper> */}
      <SectionBlock className="pt-14 lg:container lg:m-auto" position="center">
        <SwiperCard></SwiperCard>
      </SectionBlock>
      <SectionBlock className="px-3 lg:container lg:m-auto" position="center">
        <Banner></Banner>
      </SectionBlock>

      <SectionBlock
        title="Popular Wallpaper"
        subtitle=""
        className="px-3 pt-4 lg:container lg:m-auto"
        position="center"
      >
        {popularProducts?.status === false ? (
          <p>{popularProducts.data}</p>
        ) : popularProducts?.data?.length > 0 ? (
          <PopularWallpaper products={popularProducts}></PopularWallpaper>
        ) : (
          <p>Products not found</p>
        )}
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Stories"
        subtitle=""
        className="px-3 pt-4 lg:container lg:m-auto"
        position="left"
      >
        <Reeling></Reeling>
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="px-3 lg:container lg:m-auto"
        position="left"
      >
        <VideoSection></VideoSection>
      </SectionBlock>
      {/* <Card> </Card> */}
      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title="Shop By Room"
          subtitle="Wallpaper designs for every room"
          className="bg-[#F1FBFF] px-3 pt-14 lg:container lg:m-auto"
          position="left"
        >
          <CategorieCard></CategorieCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="lg:container lg:m-auto"
        position="left"
      >
        <ConsultationSection></ConsultationSection>
      </SectionBlock>

      <div className="mt-16 bg-[#FFF3F6]">
        <SectionBlock
          title=""
          subtitle=""
          className="px-3 lg:container lg:m-auto"
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
          className="px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <SectionBlock
        title="Effortless Wallpaper Ordering"
        subtitle="Simplify Your Wallpaper Shopping Experience"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <StepSection />
      </SectionBlock>

      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title=""
          subtitle=""
          className="px-3 lg:container lg:m-auto"
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
      <SectionBlock
        title="Popular Tools"
        subtitle=""
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        <ToolsCard></ToolsCard>
      </SectionBlock>
      <SectionBlock
        title="Recently Viewed"
        subtitle="Continue where you left off"
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        {/* <DetailCard rating={true} colorId={colorTabs}></DetailCard> */}
        <DetailCard rating={true} colorId={0}></DetailCard>
      </SectionBlock>

      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        <Swiper></Swiper>
      </SectionBlock>
      {/* <SectionBlock
        title="@wolpinwallpaper.in"
        subtitle="Follow Us on Instagram"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <WolpinWallpaper />
      </SectionBlock> */}
    </main>
  );
}
