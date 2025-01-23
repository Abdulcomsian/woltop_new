"use client";

import Link from "next/link";
// import Banner from "../../pages/shop/banner";
import Banner from "~/app/pages/shop/banner";
import EasySteps from "~/components/easySteps";
import RatedReview from "~/components/ratedReview";
import ReviewCard from "../../pages/shop/reviewCard";
import Pagination from "~/components/pagination";
import SwiperItem from "../../pages/shop/swiperItem";
// import productItem from "~/components/productItem";
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
import {
  useGetPopularProductsQuery,
  useGetProductsByColorQuery,
  useGetProductByIdQuery,
} from "~/store/api/productApi";

interface PageParams {
  slug: string;
}

export default function page({ params }: { params: PageParams }) {
  const { slug } = params;
  // console.log("Slug", slug);

  const { data: product, isLoading, error } = useGetProductByIdQuery(slug);
  // console.log("Product Details", product);
  const responseData = product ? { data: product, status: true } : null;

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
        <ProductDetailItem
          responseData={responseData?.data}
        ></ProductDetailItem>
      </SectionBlock>
      <div className="bg-[#FFF3F6]">
        <SectionBlock
          title="Experience the Texture & Shine"
          subtitle="Transform Ordinary Walls into Extraordinary Masterpieces"
          className="mt-5 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <VideoSection responseData={responseData?.data}></VideoSection>
        </SectionBlock>
      </div>

      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title=""
          subtitle=""
          className="pt-4 lg:container lg:m-auto"
          position="left"
        >
          <ProductDescription
            responseData={responseData?.data}
          ></ProductDescription>
        </SectionBlock>
      </div>

      <div className="mb-5 mt-5 bg-[#FFF3F6] pt-5">
        <SectionBlock
          title="4 Steps Easy Installation"
          subtitle=""
          className="mt-5 pt-4 lg:container lg:m-auto"
          position="center"
        >
          <EasySteps responseData={responseData?.data}></EasySteps>
        </SectionBlock>
      </div>
      <div className="bg-[#F1FBFF] pt-8">
        <SectionBlock
          title="More Information"
          subtitle=""
          className="pt-5 lg:container lg:m-auto"
          position="center"
        >
          {/* <MoreInformation></MoreInformation> */}
          <MoreInformationSteps
            responseData={responseData?.data}
          ></MoreInformationSteps>
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
          className="pt-5 lg:container lg:m-auto"
          position="center"
        >
          <StandsOut></StandsOut>
        </SectionBlock>
      </div>

      {/* <div className="bg-[#FFF3F6] pt-8">
          <SectionBlock
        title="Other Products in this Range "
        subtitle=""
        className="lg:container lg:m-auto pt-5 "
        position="center"
        >
        <StandsOut></StandsOut>
        </SectionBlock>
          </div> */}

      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title=""
          subtitle=""
          className="mt-4 px-2 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <RatedReview responseData={responseData?.data}></RatedReview>
          <ReviewCard slug={slug}></ReviewCard>
          {/* <div className="mt-4">
            <ReviewCard></ReviewCard>
          </div> */}
          {/* <Pagination></Pagination> */}
        </SectionBlock>
      </div>
      <div className="mt-5">
        <SectionBlock
          title="Other Products in this Range"
          subtitle=""
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <ProductDetailCard
            responseData={responseData?.data}
          ></ProductDetailCard>
        </SectionBlock>
      </div>
      <div className="mt-5">
        <SectionBlock
          title="Explore Our Other Categories"
          subtitle=""
          className="mt-4 pt-4 px-3 lg:container lg:m-auto"
          position="center"
        >
          <SwiperItem></SwiperItem>
        </SectionBlock>
      </div>
      <div className="mt-5">
        <SectionBlock
          title="Recently Viewed"
          subtitle="Continue where you left off"
          className="mt-4 pt-4 px-3 lg:container lg:m-auto"
          position="center"
        >
          <DetailCard rating={true} colorId={0}></DetailCard>
        </SectionBlock>
      </div>
      {/* <div className="mt-5">
        <SectionBlock
          title="@wolpinwallpaper.in"
          subtitle="Follow Us on Instagram"
          className="mt-4 pt-4 lg:container lg:m-auto"
          position="center"
        ></SectionBlock>
      </div> */}
    </main>
  );
}
