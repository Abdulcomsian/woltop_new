"use client";
import Banner from "./shop/banner";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import product1 from "../../assets/product/Woltop2222.png";
import product2 from "../../assets/product/Woltop333333.png";
import product3 from "../../assets/product/Woltop44444.png";
import product4 from "../../assets/product/Woltop55555.png";
import { ArrowRight } from "~/components/icons/Arrowfill";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import TagsProductCard from "./shop/tagsProduct";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import {
  useGetPopularProductsQuery,
  useGetProductsByColorQuery,
} from "~/store/api/productApi";
import { useGetColorsQuery, useGetTagsQuery } from "~/store/api/paramApi";
import TabsComponent from "~/components/tabComponent";
import SwiperCard from "~/components/swiperCard";
import ToolsCard from "./shop/toolsCard";
import HomePageReviewCards from "./shop/homePageReviewCards";
import RecentCard from "./shop/RecentCard";
export default function Home() {
  const {
    data: popularProducts,
    isLoading,
    error,
  } = useGetPopularProductsQuery({});
  const {
    data: colors,
    // isLoadingColors,
    // errorColors,
  } = useGetColorsQuery({});
  const {
    data: tags,
    // isLoadingColors,
    // errorColors,
  } = useGetTagsQuery({});
  if (isLoading) return <div>Loading...</div>;

  const colorTabs =
    colors?.data.map((color: any) => ({
      value: color.id,
      label: color.name,
      // Including the ID for further use if needed
    })) || [];

  const colorContent = colorTabs.map((tab: any) => ({
    value: tab.value,
    component: <DetailCard colorId={tab.value} />, // Customize the component as needed
  }));

  const productTabs =
    tags?.data.map((tags: any) => ({
      value: tags.id,
      label: tags.name,
      // Including the ID for further use if needed
    })) || [];

  const productContent = productTabs.map((tab: any) => ({
    value: tab.value,
    component: <TagsProductCard tagId={tab.value} />,
  }));
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
      icon: <ArrowRight />,
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
      icon: <ArrowRight />,
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
      icon: <ArrowRight />,
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
      icon: <ArrowRight />,
    },
  ];
  const BrowseCardData = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product3,
    },
  ];

  return (
    <main>
      <SectionBlock className="pt-14 px-3 lg:container lg:m-auto" position="center">
        <SwiperCard></SwiperCard>
      </SectionBlock>
      <SectionBlock className="px-3 lg:container lg:m-auto" position="center">
        <Banner></Banner>
      </SectionBlock>

      <SectionBlock
        title="Popular Wallpaper"
        subtitle=""
        className="px-3 pt-4 lg:container lg:m-auto"
        position="center"
      >
        {popularProducts?.status === false ? (
          <p>{popularProducts.data}</p>
        ) : popularProducts?.data?.length > 0 ? (
          <PopularWallpaper products={popularProducts}></PopularWallpaper>
        ) : (
          <p>Products not found</p>
        )}
      </SectionBlock>
      <SectionBlock
        title="Unreeling Some Wolpin Reels"
        subtitle=""
        className="px-3 pt-4 lg:container lg:m-auto"
        position="left"
      >
        <Reeling></Reeling>
      </SectionBlock>

      <SectionBlock
        title="Browse Our Ranges"
        subtitle=""
        className="px-3 pt-14 lg:container lg:m-auto"
        position="left"
      >
        <CategorieCard
          //@ts-ignore
          cardData={BrowseCardData}
        ></CategorieCard>
      </SectionBlock>

      <SectionBlock
        title=""
        subtitle=""
        className="px-3 lg:container lg:m-auto"
        position="left"
      >
        <VideoSection></VideoSection>
      </SectionBlock>
      {/* <Card> </Card> */}
      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title="Shop By Room"
          subtitle="Wallpaper designs for every room"
          className="bg-[#F1FBFF] px-3 pt-14 lg:container lg:m-auto"
          position="left"
        >
          <CategorieCard
            //@ts-ignore
            cardData={ShopRoomCardData}
          ></CategorieCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="lg:container lg:m-auto"
        position="left"
      >
        <ConsultationSection></ConsultationSection>
      </SectionBlock>

      <div className="mt-16 bg-[#FFF3F6]">
        <SectionBlock
          title=""
          subtitle=""
          className="px-3 lg:container lg:m-auto"
          position="center"
        >
          {!colors?.data ? (
            <div>Loading colors...</div>
          ) : (
            <TabsComponent
              tabs={colorTabs}
              content={colorContent}
              flag="colors-tabs-section"
            />
          )}
        </SectionBlock>
        <SectionBlock
          title="Styled Spaces by Our Clients"
          subtitle="Projects We’ve Brought to Life"
          className="px-3 pt-4 lg:container lg:m-auto"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <SectionBlock
        title="Effortless Wallpaper Ordering"
        subtitle="Simplify Your Wallpaper Shopping Experience"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <StepSection />
      </SectionBlock>

      <div className="bg-[#F1FBFF]">
        <SectionBlock
          title=""
          subtitle=""
          className="px-3 lg:container lg:m-auto"
          position="center"
        >
          {!tags?.data ? (
            <div>Loading Tags...</div>
          ) : (
            <TabsComponent tabs={productTabs} content={productContent} />
          )}
          <HomePageReviewCards />
        </SectionBlock>
      </div>
      {/* <SectionBlock
        title="Popular Tools"
        subtitle=""
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        <ToolsCard></ToolsCard>
      </SectionBlock> */}
      <SectionBlock
        title="Recently Viewed"
        subtitle="Continue where you left off"
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        <RecentCard />
      </SectionBlock>

      <SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="px-3 pt-14 lg:container lg:m-auto"
        position="center"
      >
        <Swiper></Swiper>
      </SectionBlock>
      {/* <SectionBlock
        title="@wolpinwallpaper.in"
        subtitle="Follow Us on Instagram"
        className="pt-14 lg:container lg:m-auto"
        position="center"
      >
        <WolpinWallpaper />
      </SectionBlock> */}
    </main>
  );
}
