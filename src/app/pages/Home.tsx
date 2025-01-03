"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Navbar from "./shop/navbar";
import TopBar from "./shop/topBar";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import ReviewCard from "./shop/reviewCard";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import Footer from "./shop/footer";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import { Tabs,TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Home() {
  return (
    <main >
        <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <SectionBlock
        
        className="lg:container lg:m-auto pt-14"
        position="center"
        >

        <Banner></Banner>
        </SectionBlock>
      
        <SectionBlock
        title="Popular Wallpaper"
        subtitle=""
        className="lg:container lg:m-auto pt-4"
        position="center"
        >
        <PopularWallpaper></PopularWallpaper>
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Stories"
        subtitle=""
        className="lg:container lg:m-auto pt-4"
        position="left"
        >
        <Reeling></Reeling>
        </SectionBlock>

        <SectionBlock
        title=""
        subtitle=""
        className="lg:container lg:m-auto pt-4 "
        position="left"
        >
        <VideoSection></VideoSection>

        </SectionBlock>
        {/* <Card> </Card> */}
        <div className="bg-[#F1FBFF] ">
        <SectionBlock
        title="Shop By Room"
        subtitle="Wallpaper designs for every room"
        className=" lg:ml-12 lg:m-auto lg:container  lg: pt-14 bg-[#F1FBFF]"
        position="left"
        >
          <CategorieCard></CategorieCard>
        </SectionBlock>
        </div>
   
       <ConsultationSection></ConsultationSection>


          
       <SectionBlock
        title=""
        subtitle=""
        className=" mt-16  pt-14 bg-[#FFF3F6]"
        position="center"
       > 
       
    <Tabs defaultValue="Neutrals" className="lg:container lg:pl-11 border-solid lg:m-auto">
      <TabsList>
        <TabsTrigger value="Neutrals"
        className="
        w-full py-2.5 px-2 text-sm leading-5 font-medium text-[#908B8B] font-poppins  focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60 bg-[#F1FBFF]
        "
        >
          Neutrals
        </TabsTrigger>
        <TabsTrigger value="Pink">
        Pink

        </TabsTrigger>
        <TabsTrigger value="Blue">
        Blue

        </TabsTrigger>
        <TabsTrigger value="Green">
        Green
            </TabsTrigger>
        <TabsTrigger value="Golden">
        Golden
        </TabsTrigger>
      </TabsList>
    
      <TabsContent value="Neutrals">
      <DetailCard></DetailCard>
        
  
      </TabsContent>
      <TabsContent value="Pink">
        <h1>Pink</h1>
     <h1 className="p-4 mb-5 m-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum rem! Earum numquam placeat unde ipsam possimus quam animi maxime, nam assumenda officiis et, omnis minima, nulla ullam voluptas. Deserunt!
     </h1>
  
      </TabsContent>
      <TabsContent value="Blue">
        <h1>Blue</h1>
     <h1 className="p-4 mb-5 m-2">

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum rem! Earum numquam placeat unde ipsam possimus quam animi maxime, nam assumenda officiis et, omnis minima, nulla ullam voluptas. Deserunt!
     </h1>
  
      </TabsContent>
      <TabsContent value="Green">
        <h1>Green</h1>
     <h1 className="p-4 mb-5 m-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum rem! Earum numquam placeat unde ipsam possimus quam animi maxime, nam assumenda officiis et, omnis minima, nulla ullam voluptas. Deserunt!
     </h1>
  
      </TabsContent>
      <TabsContent value="Golden">
        <h1>Golden</h1>
     <h1 className="p-4 mb-5 m-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum rem! Earum numquam placeat unde ipsam possimus quam animi maxime, nam assumenda officiis et, omnis minima, nulla ullam voluptas. Deserunt!
     </h1>
  
      </TabsContent>
    </Tabs>
    
       </SectionBlock>


       <SectionBlock
        title="Effortless Wallpaper Ordering"
        subtitle="Simplify Your Wallpaper Shopping Experience"
        className="lg:container lg:m-auto pt-14"
        position="center"
       >
       <StepSection />

       </SectionBlock>




       <SectionBlock
        title=""
        subtitle=""
        className="   pt-14 bg-[#F1FBFF]"
        position="center"
       > 
       
    <Tabs defaultValue="BestSelling" className="lg:container lg:pl-11 border-solid lg:m-auto">
      <TabsList>
        <TabsTrigger value="BestSelling"
        className="
        w-full py-2.5 px-2 text-sm leading-5 font-medium text-[#908B8B] font-poppins  focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60 bg-[#F1FBFF]
        "
        >Best Selling</TabsTrigger>
        <TabsTrigger value="NewArrival">New Arrival</TabsTrigger>
      </TabsList>
      <TabsContent value="BestSelling">

        <DetailCard></DetailCard>
        <ReviewCard></ReviewCard>
      </TabsContent>

      <TabsContent value="NewArrival">
     <h1 className="p-4 mb-5 m-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum rem! Earum numquam placeat unde ipsam possimus quam animi maxime, nam assumenda officiis et, omnis minima, nulla ullam voluptas. Deserunt!
     </h1>
     <div className="flex justify-center mt-8 mb-4 sm:mb-6 lg:mb-5 lg:mt-12">
      <button data-variant="normal"
       className="inline-flex items-center justify-center shrink-0 font-semibold bg-green-800 text-white
        leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 
        focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border 
        border-transparent hover:bg-accent-hover px-5 py-0 h-12 text-sm font-semibold h-11 
        md:text-base"
     >Load More</button></div>
       <ReviewCard></ReviewCard>
      </TabsContent>
    </Tabs>
    
       </SectionBlock>
      <SectionBlock
        title="Popular Tools"
        subtitle="Continue where you left off"
        className="lg:container lg:m-auto pt-14"
        position="center"
       >
       <DetailCard   rating={false}   ></DetailCard>

      </SectionBlock>
      <SectionBlock
        title="Recently Viewed"
        subtitle="Continue where you left off"
        className="lg:container lg:m-auto pt-14"
        position="center"
       >
       <DetailCard   rating={true}   ></DetailCard>

      </SectionBlock>
      
      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="lg:container lg:m-auto pt-14"
        position="center"
       >
      <Swiper></Swiper>

       </SectionBlock>
        <Footer></Footer>
            
    </main>
  );
}
