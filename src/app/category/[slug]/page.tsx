"use client";
import Banner from "~/app/pages/shop/banner";
import SwiperItem from "../../pages/shop/swiperItem";
import SectionBlock from "~/components/ui/section-block";
import Reeling from "../../pages/shop/reeling";
import CategorieCard from "../../pages/shop/categorieCard";
import product1 from "../../../assets/product/Woltop2222.png";
import product2 from "../../../assets/product/Woltop333333.png";
import product3 from "../../../assets/product/Woltop44444.png";
import product4 from "../../../assets/product/Woltop55555.png";
import { ArrowRight } from "~/components/icons/Arrowfill";
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

  const ShopRoomCardData = [
    {
      id: 1,
      title: "Card Title 1",
      img: product1,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "5%",
      content: "Living Room",
      icon: <ArrowRight />
    },
    {
      id: 2,
      title: "Card Title 2",
      img: product2,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "16%",
      content: "Bedroom",
      icon: <ArrowRight />
    },
    {
      id: 3,
      title: "Card Title 3",
      img: product3,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "10%",
      content: "Kids Room",
      icon: <ArrowRight />
    },
    {
      id: 4,
      title: "Card Title 4",
      img: product4,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "12%",
      content: "hall",
      icon: <ArrowRight />
    },
  ];

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
        className="mt-5 px-3 pt-4 max-w-6xl mx-auto"
        position="left"
      >
        <Banner />
      </SectionBlock>

      <div className="mt-5 bg-[#F1FBFF]">
        <SectionBlock
          title="Popular In Living Room"
          subtitle="Enhance your living space with our stunning collection of living room wallpapers."
          className="mt-4 px-3 pt-4 max-w-6xl mx-auto"
          position="left"
        >
          <CategorieCard cardData={ShopRoomCardData}></CategorieCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mt-5 px-3 pt-4 max-w-6xl mx-auto"
        position="left"
      >
        <VideoSection responseData={responseData?.data}></VideoSection>
      </SectionBlock>

      <div className="bg-[#FFF3F6] pb-5 pt-5">
        <SectionBlock
          title="Unreeling Some Wolpin Stories"
          subtitle=""
          className="mt-4 px-3 pt-4 max-w-6xl mx-auto"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <div className="mt-5">
        <SectionBlock
          title="Explore Our Other Categories"
          subtitle=""
          className="mt-4 px-3 pt-4 max-w-6xl mx-auto"
          position="center"
        >
          <SwiperItem></SwiperItem>
        </SectionBlock>
      </div>
      {/* <div className="mt-5">
        <SectionBlock
          title="@wolpinwallpaper.in"
          subtitle="Follow Us on Instagram"
          className="mt-4 pt-4 max-w-6xl mx-auto"
          position="center"
        ></SectionBlock>
      </div> */}
    </main>
  );
}
