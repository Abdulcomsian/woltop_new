"use client";

import Link from "next/link";
import Banner from "../pages/shop/banner";
import Navbar from "../../components/navbar";
import TopBar from "../pages/shop/topBar";
import Footer from "../../components/footer";
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
    <main>
      <TopBar time={{ hours: 0, minutes: 7, seconds: 27 }}></TopBar>
      <Navbar></Navbar>

      <Banner></Banner>

      <div className="mt-5">
        <SectionBlock
          title="Other Products in this Range"
          subtitle=""
          className="mt-4 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <DetailCard rating={false}></DetailCard>
        </SectionBlock>
      </div>

      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title=""
          subtitle=""
          className="container mt-5 pt-4 lg:m-auto"
          position="left"
        >
          <VideoSection></VideoSection>
        </SectionBlock>
      </div>

      <div className="pb-5 pt-5">
        <SectionBlock
          title="Unreeling Some Wolpin Stories"
          subtitle=""
          className="mt-4 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <div className="mt-5">
        <SectionBlock
          title="Explore Our Other Categories"
          subtitle=""
          className="mt-4 pt-4 lg:container lg:m-auto"
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
      <div className="mt-5">
        <SectionBlock
          title="@wolpinwallpaper.in"
          subtitle="Follow Us on Instagram"
          className="mt-4 pt-4 lg:container lg:m-auto"
          position="center"
        ></SectionBlock>
      </div>

      <Footer></Footer>
    </main>
  );
}
