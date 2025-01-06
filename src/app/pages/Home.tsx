"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Navbar from "../../components/navbar";
import TopBar from "./shop/topBar";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import ReviewCard from "./shop/reviewCard";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import Footer from "../../components/footer";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useGetPopularProductsQuery } from "~/store/api/productApi";
export default function Home() {
  const {
    data: popularProducts,
    isLoading,
    error,
  } = useGetPopularProductsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <main>
      <TopBar time={{ hours: 0, minutes: 7, seconds: 27 }}></TopBar>
      <Navbar></Navbar>
      <Swiper></Swiper>
      <SectionBlock className="pt-14 lg:container lg:m-auto" position="center">
        <Banner></Banner>
      </SectionBlock>

      <SectionBlock
        title="Popular Wallpaper"
        subtitle=""
        className="pt-4 lg:container lg:m-auto"
        position="center"
      >
        <PopularWallpaper products={popularProducts}></PopularWallpaper>
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Stories"
        subtitle=""
        className="pt-4 lg:container lg:m-auto"
        position="left"
      >
        <Reeling></Reeling>
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="pt-4 lg:container lg:m-auto"
        position="left"
      >
        <VideoSection></VideoSection>
      </SectionBlock>
      {/* <Card> </Card> */}
      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title="Shop By Room"
          subtitle="Wallpaper designs for every room"
          className="lg: bg-[#F1FBFF] pt-14 lg:container lg:m-auto lg:ml-12"
          position="left"
        >
          <CategorieCard></CategorieCard>
        </SectionBlock>
      </div>

      <ConsultationSection></ConsultationSection>

      <SectionBlock
        title=""
        subtitle=""
        className="mt-16 bg-[#FFF3F6] pt-14"
        position="center"
      >
        <Tabs
          defaultValue="Neutrals"
          className="border-solid lg:container lg:m-auto lg:pl-11"
        >
          <TabsList>
            <TabsTrigger
              value="Neutrals"
              className="font-poppins w-full bg-[#F1FBFF] px-2 py-2.5 text-sm font-medium leading-5 text-[#908B8B] ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
            >
              Neutrals
            </TabsTrigger>
            <TabsTrigger value="Pink">Pink</TabsTrigger>
            <TabsTrigger value="Blue">Blue</TabsTrigger>
            <TabsTrigger value="Green">Green</TabsTrigger>
            <TabsTrigger value="Golden">Golden</TabsTrigger>
          </TabsList>

          <TabsContent value="Neutrals">
            <DetailCard rating={undefined}></DetailCard>
          </TabsContent>
          <TabsContent value="Pink">
            <h1>Pink</h1>
            <h1 className="m-2 mb-5 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              ipsum rem! Earum numquam placeat unde ipsam possimus quam animi
              maxime, nam assumenda officiis et, omnis minima, nulla ullam
              voluptas. Deserunt!
            </h1>
          </TabsContent>
          <TabsContent value="Blue">
            <h1>Blue</h1>
            <h1 className="m-2 mb-5 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              ipsum rem! Earum numquam placeat unde ipsam possimus quam animi
              maxime, nam assumenda officiis et, omnis minima, nulla ullam
              voluptas. Deserunt!
            </h1>
          </TabsContent>
          <TabsContent value="Green">
            <h1>Green</h1>
            <h1 className="m-2 mb-5 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              ipsum rem! Earum numquam placeat unde ipsam possimus quam animi
              maxime, nam assumenda officiis et, omnis minima, nulla ullam
              voluptas. Deserunt!
            </h1>
          </TabsContent>
          <TabsContent value="Golden">
            <h1>Golden</h1>
            <h1 className="m-2 mb-5 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              ipsum rem! Earum numquam placeat unde ipsam possimus quam animi
              maxime, nam assumenda officiis et, omnis minima, nulla ullam
              voluptas. Deserunt!
            </h1>
          </TabsContent>
        </Tabs>
      </SectionBlock>

      <SectionBlock
        title="Effortless Wallpaper Ordering"
        subtitle="Simplify Your Wallpaper Shopping Experience"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <StepSection />
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="bg-[#F1FBFF] pt-14"
        position="center"
      >
        <Tabs
          defaultValue="BestSelling"
          className="border-solid lg:container lg:m-auto lg:pl-11"
        >
          <TabsList>
            <TabsTrigger
              value="BestSelling"
              className="font-poppins w-full bg-[#F1FBFF] px-2 py-2.5 text-sm font-medium leading-5 text-[#908B8B] ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
            >
              Best Selling
            </TabsTrigger>
            <TabsTrigger value="NewArrival">New Arrival</TabsTrigger>
          </TabsList>
          <TabsContent value="BestSelling">
            <DetailCard rating={undefined}></DetailCard>
            <ReviewCard></ReviewCard>
          </TabsContent>

          <TabsContent value="NewArrival">
            <h1 className="m-2 mb-5 p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              ipsum rem! Earum numquam placeat unde ipsam possimus quam animi
              maxime, nam assumenda officiis et, omnis minima, nulla ullam
              voluptas. Deserunt!
            </h1>
            <div className="mb-4 mt-8 flex justify-center sm:mb-6 lg:mb-5 lg:mt-12">
              <button
                data-variant="normal"
                className="focus:ring-accent-700 text-light hover:bg-accent-hover inline-flex h-11 h-12 shrink-0 items-center justify-center rounded border border-transparent bg-accent bg-green-800 px-5 py-0 text-sm font-semibold leading-none text-white outline-none transition duration-300 ease-in-out focus:shadow focus:outline-0 focus:ring-1 md:text-base"
              >
                Load More
              </button>
            </div>
            <ReviewCard></ReviewCard>
          </TabsContent>
        </Tabs>
      </SectionBlock>
      <SectionBlock
        title="Popular Tools"
        subtitle="Continue where you left off"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <DetailCard rating={false}></DetailCard>
      </SectionBlock>
      <SectionBlock
        title="Recently Viewed"
        subtitle="Continue where you left off"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <DetailCard rating={true}></DetailCard>
      </SectionBlock>

      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <Swiper></Swiper>
      </SectionBlock>
      <Footer></Footer>
    </main>
  );
}
