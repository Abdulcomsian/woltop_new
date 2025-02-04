"use client";

import { useEffect } from "react";
import Link from "next/link";
import Banner from "~/app/pages/shop/banner";
import EasySteps from "~/components/easySteps";
import RatedReview from "~/components/ratedReview";
import ReviewCard from "../../pages/shop/reviewCard";
import Pagination from "~/components/pagination";
import SwiperItem from "../../pages/shop/swiperItem";
import ProductDetailItem from "~/components/productDetailItem";
import ProductDescription from "~/components/productDescription";
import SectionBlock from "~/components/ui/section-block";
import VideoSection from "../../pages/shop/videoSection";
import Reeling from "../../pages/shop/reeling";
import MoreInformation from "~/components/moreInformation";
import StandsOut from "~/components/standsOut";
import DetailCard from "../../pages/shop/detailCard";
import MoreInformationSteps from "~/components/moreInformationSteps";
import ProductDetailCard from "../../pages/shop/productDetailCard";
import { useGetProductByIdQuery } from "~/store/api/productApi";
import RecentCard from "~/app/pages/shop/RecentCard";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();
  // console.log(slug, "slug");
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(slug as string);

  // Store API data in localStorage when available
  // useEffect(() => {
  //   if (product) {
  //     if (typeof window !== "undefined") {
  //       let storedProducts = localStorage.getItem("recentProducts");
  //       let recentProducts = storedProducts ? JSON.parse(storedProducts) : [];
  
  //       // Remove duplicate by checking `data.id`
  //       recentProducts = recentProducts.filter(
  //         (p: any) => p.data.id !== product.data.id // Use `data.id`
  //       );
  
  //       // Add the new product to the beginning
  //       recentProducts.unshift(product);
  
  //       // Keep only the last 4 products
  //       if (recentProducts.length > 4) {
  //         recentProducts = recentProducts.slice(0, 4);
  //       }
  
  //       // Save back to localStorage
  //       localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
  //     }
  //   }
  // }, [product]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Something went wrong or product not found.</div>;
  }

  return (
    <main>
      <SectionBlock
        title=""
        subtitle=""
        className="lg:container lg:m-auto"
        position="left"
      >
        <ProductDetailItem responseData={product}></ProductDetailItem>
      </SectionBlock>
      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title="Experience the Texture & Shine"
          subtitle="Transform Ordinary Walls into Extraordinary Masterpieces"
          className="mt-5 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <VideoSection responseData={product}></VideoSection>
        </SectionBlock>
      </div>

      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title=""
          subtitle=""
          className="pt-4 lg:container lg:m-auto"
          position="left"
        >
          <ProductDescription responseData={product}></ProductDescription>
        </SectionBlock>
      </div>

      <div className="mb-5 mt-5 bg-[#FFF3F6] pt-5">
        <SectionBlock
          title="4 Steps Easy Installation"
          subtitle=""
          className="mt-5 px-3 pt-4 lg:container lg:m-auto"
          position="center"
        >
          <EasySteps responseData={product}></EasySteps>
        </SectionBlock>
      </div>
      <div className="bg-[#F1FBFF] pt-8">
        <SectionBlock
          title="More Information"
          subtitle=""
          className="px-3 pt-5 lg:container lg:m-auto"
          position="center"
        >
          <MoreInformationSteps responseData={product}></MoreInformationSteps>
        </SectionBlock>
      </div>

      <div className="pb-5 pt-5">
        <SectionBlock
          title="Unreeling Some Wolpin Stories"
          subtitle=""
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <div className="bg-[#FFF3F6] pt-8">
        <SectionBlock
          title="Why #WolpinWallpaper Stands Out "
          subtitle=""
          className="px-3 pt-5 lg:container lg:m-auto"
          position="center"
        >
          <StandsOut></StandsOut>
        </SectionBlock>
      </div>

      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title=""
          subtitle=""
          className="mt-4 px-2 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <RatedReview responseData={product}></RatedReview>
          <ReviewCard
            //@ts-ignore
            slug={slug}
          ></ReviewCard>
        </SectionBlock>
      </div>
      <div className="mt-5">
        <SectionBlock
          title="Other Products in this Range"
          subtitle=""
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <ProductDetailCard responseData={product}></ProductDetailCard>
        </SectionBlock>
      </div>
      <div className="mt-5">
        <SectionBlock
          title="Explore Our Other Categories"
          subtitle=""
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="center"
        >
          <SwiperItem></SwiperItem>
        </SectionBlock>
      </div>
      <div className="mt-5">
        <SectionBlock
          title="Recently Viewed"
          subtitle="Continue where you left off"
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="center"
        >
          <RecentCard />
        </SectionBlock>
      </div>
    </main>
  );
}
