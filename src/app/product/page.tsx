"use client";

import Link from "next/link";
import Banner from "../pages/shop/banner";
import Navbar from "../pages/shop/navbar";
import TopBar from "../pages/shop/topBar";
import Footer from "../pages/shop/footer";
// import productItem from "~/components/productItem";
import ProductDetailItem from "~/components/productDetailItem";
import ProductDescription from "~/components/productDescription";
import SectionBlock from "~/components/ui/section-block";
import VideoSection from "../pages/shop/videoSection";

export default function page() {
  return (
    <main >
                <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
                <Navbar></Navbar>
          
                {/* <!-- section_2 -->  */}
                <ProductDetailItem ></ProductDetailItem>

                <SectionBlock
        title="Experience the Texture & Shine"
        subtitle="Transform Ordinary Walls into Extraordinary Masterpieces"
        className=" lg:m-auto pt-4 ml-5 mt-5 bg-[#FFF3F6]"
        position="left"
        >
        <VideoSection></VideoSection>
      </SectionBlock>

                <SectionBlock
        title=""
        subtitle=""
        className=" lg:m-auto pt-4  bg-[#F1FBFF]"
        position="left"
        >
        <ProductDescription ></ProductDescription>
      </SectionBlock>
                <Footer></Footer>
    </main>
  );
}
