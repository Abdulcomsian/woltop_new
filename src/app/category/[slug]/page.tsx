"use client";
import Banner from "~/app/pages/shop/banner";
import SwiperItem from "../../pages/shop/swiperItem";
import SectionBlock from "~/components/ui/section-block";
import Reeling from "../../pages/shop/reeling";
import ProductDetailCard from "../../pages/shop/productDetailCard";
import {
  useGetPopularProductsQuery,
  useGetProductsByColorQuery,
  useGetProductByIdQuery,
} from "~/store/api/productApi";
import VideoSection from "~/app/pages/shop/videoSection";

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
        className="mt-5 px-3 pt-4 lg:container lg:m-auto"
        position="left"
      >
        <Banner />
      </SectionBlock>

      <div className="mt-5 bg-[#F1FBFF]">
        <SectionBlock
          title="Popular In Living Room"
          subtitle="Enhance your living space with our stunning collection of living room wallpapers."
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <ProductDetailCard
            responseData={responseData?.data}
          ></ProductDetailCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mt-5 px-3 pt-4 lg:container lg:m-auto"
        position="left"
      >
        <VideoSection responseData={responseData?.data}></VideoSection>
      </SectionBlock>

      <div className="bg-[#FFF3F6] pb-5 pt-5">
        <SectionBlock
          title="Unreeling Some Wolpin Stories"
          subtitle=""
          className="mt-4 px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <Reeling></Reeling>
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
