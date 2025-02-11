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
import SwiperCard from "~/components/swiperCard";

export default function Page() {
  const { slug } = useParams();
  // console.log(slug, "slug");
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(slug as string);

  // Store API data in localStorage when available
  useEffect(() => {
    if (product) {
      if (typeof window !== "undefined") {
        let storedProducts = localStorage.getItem("recentProducts");
        let recentProducts = storedProducts ? JSON.parse(storedProducts) : [];

        // Remove duplicate by checking `data.id`
        recentProducts = recentProducts.filter(
          (p: any) => p.data.id !== product.data.id, // Use `data.id`
        );

        // Add the new product to the beginning
        recentProducts.unshift(product);

        // Keep only the last 4 products
        if (recentProducts.length > 4) {
          recentProducts = recentProducts.slice(0, 4);
        }

        // Save back to localStorage
        localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
      }
    }
  }, [product]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Something went wrong or product not found.</div>;
  }

  return (
    <>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] md:mt-[60px]"
        position="left"
      >
        <ProductDetailItem responseData={product}></ProductDetailItem>
      </SectionBlock>
      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title="Experience the Texture & Shine"
          subtitle="Transform Ordinary Walls into Extraordinary Masterpieces"
          className="mx-auto max-w-[1075px] px-3 pt-[13px] md:pt-[33px]"
          position="left"
        >
          <VideoSection responseData={product}></VideoSection>
        </SectionBlock>
      </div>

      <div className="my-10 bg-[#F1FBFF] md:my-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3 pt-4"
          position="left"
        >
          <ProductDescription responseData={product}></ProductDescription>
        </SectionBlock>
      </div>

      <div className="bg-[#FFF3F6] pt-5">
        {product?.data?.design_application_details?.length !== 0 && (
          <SectionBlock
            title="4 Steps Easy Installation"
            subtitle=""
            className="mx-auto max-w-[1075px] px-3 pt-[13px] md:pt-[33px]"
            position="center"
          >
            <EasySteps responseData={product}></EasySteps>
          </SectionBlock>
        )}
      </div>

      <div className="my-10 bg-[#F1FBFF] md:my-[70px]">
        {product?.data?.storage_usage_details?.length !== null && (
          <SectionBlock
            title="More Information"
            subtitle=""
            className="mx-auto max-w-[1075px] px-3 pt-6"
            position="center"
          >
            <MoreInformationSteps responseData={product}></MoreInformationSteps>
          </SectionBlock>
        )}
      </div>

      <SectionBlock
        title="Unreeling Some Wolpin Stories"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <Reeling></Reeling>
      </SectionBlock>

      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title="Why #WolpinWallpaper Stands Out "
          subtitle=""
          className="mx-auto max-w-[1075px] px-3 pt-10 md:mt-[70px]"
          position="center"
        >
          <StandsOut></StandsOut>
        </SectionBlock>
      </div>

      <div className="my-10 bg-[#F1FBFF] md:my-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-2 pt-10 md:pt-[70px]"
          position="left"
        >
          <RatedReview responseData={product}></RatedReview>
          <ReviewCard
            //@ts-ignore
            slug={slug}
          ></ReviewCard>
        </SectionBlock>
      </div>
      <SectionBlock
        title="Other Products in this Range"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="left"
      >
        <ProductDetailCard responseData={product}></ProductDetailCard>
      </SectionBlock>
      <SectionBlock
        title="Explore Our Other Categories"
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        {/* <SwiperItem></SwiperItem> */}
        <SwiperCard></SwiperCard>
      </SectionBlock>
      <SectionBlock
        title="Recently Viewed"
        subtitle="Continue where you left off"
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <RecentCard />
      </SectionBlock>
    </>
  );
}
