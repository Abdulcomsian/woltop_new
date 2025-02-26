"use client";

import { useEffect } from "react";
import EasySteps from "~/components/easySteps";
import RatedReview from "~/components/ratedReview";
import ReviewCard from "../../pages/shop/reviewCard";
import ProductDetailItem from "~/components/productDetailItem";
import ProductDescription from "~/components/productDescription";
import SectionBlock from "~/components/ui/section-block";
import VideoSection from "../../pages/shop/videoSection";
import Reeling from "../../pages/shop/reeling";
import StandsOut from "~/components/standsOut";
import MoreInformationSteps from "~/components/moreInformationSteps";
import ProductDetailCard from "../../pages/shop/productDetailCard";
import { useGetProductByIdQuery } from "~/store/api/productApi";
import RecentCard from "~/app/pages/shop/RecentCard";
import { useParams } from "next/navigation";
import SwiperCard from "~/components/swiperCard";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";

const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

export default function Page() {
  const { slug } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(slug as string);
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery({});
  

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
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error || !product) {
    return <div className="text-center py-10">Something went wrong or product not found.</div>;
  }

  return (
    <>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] md:mt-[60px] md:pl-3"
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
          <VideoSection responseData={product} isLoading={isLoading}></VideoSection>
        </SectionBlock>
      </div>

      <div className="my-10 bg-[#F1FBFF] md:my-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-[70px]"
          position="left"
        >
          <ProductDescription responseData={product}></ProductDescription>
        </SectionBlock>
      </div>

      <div className="bg-[#FFF3F6]">
        {product?.data?.design_application_details?.length !== 0 && (
          <SectionBlock
            title="4 Steps Easy Installation"
            subtitle=""
            className="mx-auto max-w-[1075px] px-3 pt-[32px] md:pt-[69px]"
            position="center"
          >
            <EasySteps responseData={product}></EasySteps>
          </SectionBlock>
        )}
      </div>

      <div className="my-10 bg-[#F1FBFF] md:my-[70px]">
        {product?.data?.storage_usage_details?.length !== 0 && (
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

      <div className="bg-[#FFF3F6] text-center">
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
          className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-[70px]"
          position="left"
        >
          <RatedReview responseData={product}  slug={slug} ></RatedReview>
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
        <SwiperCard categories={categories} isLoading={isLoading}></SwiperCard>
      </SectionBlock>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3"
        position="center"
      >
        <RecentCard />
      </SectionBlock>
    </>
  );
}
