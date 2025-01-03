"use client";

import Link from "next/link";
import Banner from "../pages/shop/banner";
import Navbar from "../pages/shop/navbar";
import TopBar from "../pages/shop/topBar";
import Footer from "../pages/shop/footer";
import EasySteps from "~/components/easySteps";
import RatedReview from "~/components/ratedReview";
import ReviewCard from "../pages/shop/reviewCard";
import Pagination from "~/components/pagination";
import SwiperItem from "../pages/shop/swiperItem";
// import productItem from "~/components/productItem";
import ProductDetailItem from "~/components/productDetailItem";
import ProductDescription from "~/components/productDescription";
import SectionBlock from "~/components/ui/section-block";
import VideoSection from "../pages/shop/videoSection";
import Reeling from "../pages/shop/reeling";
import MoreInformation from "~/components/moreInformation";
import StandsOut from "~/components/standsOut";
import DetailCard from "../pages/shop/detailCard";
// import Banner from "../pages/shop/banner";

export default function page() {
  return (
    <main >
      <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
      <Navbar></Navbar>

      <Banner></Banner>
        
      <div className="  mt-5">
        <SectionBlock
        title="Other Products in this Range"
        subtitle=""
        className="lg:container lg:m-auto pt-4 mt-4"
        position="left"
        >
      
           <DetailCard   rating={false}   ></DetailCard>

        </SectionBlock>
       </div>

       <div className="bg-[#FFF3F6]">

        <SectionBlock
        title=""
        subtitle=""
        className=" lg:m-auto container pt-4  mt-5 "
        position="left"
        >
        <VideoSection></VideoSection>
        </SectionBlock>
          </div>

          <div className="pt-5 pb-5">
          <SectionBlock
        title="Unreeling Some Wolpin Stories"
        subtitle=""
        className="lg:container lg:m-auto pt-4 mt-4"
        position="left"
        >
        <Reeling></Reeling>
        </SectionBlock>
          </div>
       
        
        
        

         


      

       

      
      
      <div className="  mt-5">
          <SectionBlock
        title="Explore Our Other Categories"
        subtitle=""
        className="lg:container lg:m-auto pt-4 mt-4"
        position="center"
        >

            <SwiperItem></SwiperItem>

        </SectionBlock>
        </div>
      {/* <div className="  mt-5">
          <SectionBlock
        title="Recently Viewed"
        subtitle="Continue where you left off"
        className="lg:container lg:m-auto pt-4 mt-4"
        position="center"
        >
      
      <DetailCard   rating={true}   ></DetailCard>

        </SectionBlock>
        </div> */}
      <div className="  mt-5">
          <SectionBlock
        title="@wolpinwallpaper.in"
        subtitle="Follow Us on Instagram"
        className="lg:container lg:m-auto pt-4 mt-4"
        position="center"
        >
      
       

        </SectionBlock>
        </div>


                <Footer></Footer>
    </main>
  );
}
