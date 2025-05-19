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
import {
  useGetProductByIdQuery,
  useGetPopularProductsQuery,
} from "~/store/api/productApi";
import RecentCard from "~/app/pages/shop/RecentCard";
import { useParams } from "next/navigation";
import SwiperCard from "~/components/swiperCard";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import Image from "next/image";
const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

export default function Page() {
  const { slug } = useParams();
  const { data: popularProducts } = useGetPopularProductsQuery(undefined, {
    skip: true, // Don't fetch, just access cache
  });
  console.log("Cached Data", popularProducts);

  // Find the product in popular products cache
  const cachedProduct = popularProducts?.data?.find(
    (p: any) => p.id.toString() === slug,
  );
  const cachedFeaturedImage = cachedProduct?.featured_image;

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(slug as string, {
    refetchOnMountOrArgChange: false,
    // Only refetch when cache is older than 1 hour
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const initialProductData = {
    data: {
      ...(product?.data || {}),
      featured_image: cachedFeaturedImage || product?.data?.featured_image,
      // Initialize other required fields to prevent undefined errors
      product_images: product?.data?.product_images || [],
      variables: product?.data?.variables || [],
      products_features: product?.data?.products_features || [],
      design_application_details:
        product?.data?.design_application_details || [],
      storage_usage_details: product?.data?.storage_usage_details || [],
      reviews: product?.data?.reviews || { average: 0, total_count: 0 },
      delivery_detail: product?.data?.delivery_detail || [],
    },
  };
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery({});
  const mergedProduct = product
    ? {
        ...product,
        data: {
          ...product.data,
          // Use cached featured image if available, otherwise use the one from product detail
          featured_image: cachedFeaturedImage || product.data.featured_image,
        },
      }
    : null;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (mergedProduct) {
      if (typeof window !== "undefined") {
        let storedProducts = localStorage.getItem("recentProducts");
        let recentProducts = storedProducts ? JSON.parse(storedProducts) : [];

        recentProducts = recentProducts.filter(
          (p: any) => p.data.id !== mergedProduct.data.id,
        );

        recentProducts.unshift(mergedProduct);

        if (recentProducts.length > 4) {
          recentProducts = recentProducts.slice(0, 4);
        }

        localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
      }
    }
  }, [mergedProduct]);
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error || !mergedProduct) {
    return (
      <div className="py-10 text-center">
        Something went wrong or product not found.
      </div>
    );
  }

  return (
    <>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] md:mt-[60px] md:pl-3"
        position="left"
      >
        <ProductDetailItem
          responseData={initialProductData}
          cachedFeaturedImage={cachedFeaturedImage}
        ></ProductDetailItem>
      </SectionBlock>
      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title="Experience the Texture & Shine"
          subtitle="Transform Ordinary Walls into Extraordinary Masterpieces"
          className="mx-auto max-w-[1075px] px-3 pt-[13px] md:pt-[33px]"
          position="left"
        >
          <VideoSection
            responseData={mergedProduct}
            isLoading={isLoading}
          ></VideoSection>
        </SectionBlock>
      </div>

      <div className="my-10 bg-[#F1FBFF] md:my-[70px]">
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-[70px]"
          position="left"
        >
          <ProductDescription responseData={mergedProduct}></ProductDescription>
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
            <EasySteps responseData={mergedProduct}></EasySteps>
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
            <MoreInformationSteps
              responseData={mergedProduct}
            ></MoreInformationSteps>
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
          <RatedReview
            responseData={mergedProduct}
            //@ts-ignore
            slug={slug}
          ></RatedReview>
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
        <ProductDetailCard responseData={mergedProduct}></ProductDetailCard>
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
