"use client";
import Banner from "~/app/pages/shop/banner";
import SectionBlock from "~/components/ui/section-block";
import Reeling from "../../pages/shop/reeling";
import CategorieCard from "../../pages/shop/categorieCard";
import {
  useGetProductByIdQuery,
} from "~/store/api/productApi";
import VideoSection from "~/app/pages/shop/videoSection";
import SwiperCard from "~/components/swiperCard";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import { useParams } from "next/navigation";

export default function page() {
  const { slug } = useParams();
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery({});

  const { data: product, isLoading, error } = useGetProductByIdQuery(slug);
  // console.log("Category Details", category);
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
        className="mx-auto mt-5 max-w-[1075px] px-3 pt-4"
        position="left"
      >
        <Banner />
      </SectionBlock>

      <div className="mt-5 bg-[#F1FBFF]">
        <SectionBlock
          title="Popular In Living Room"
          subtitle="Enhance your living space with our stunning collection of living room wallpapers."
          className="mx-auto mt-4 max-w-[1075px] px-3 pt-4"
          position="left"
        >
          <CategorieCard
            cardData={categories}
            isLoading={isLoading}
          ></CategorieCard>
        </SectionBlock>
      </div>

      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto mt-5 max-w-[1075px] px-3 pt-4"
        position="left"
      >
        <VideoSection responseData={responseData?.data}></VideoSection>
      </SectionBlock>

      <div className="bg-[#FFF3F6] pb-5 pt-5">
        <SectionBlock
          title="Unreeling Some Wolpin Stories"
          subtitle=""
          className="mx-auto mt-4 max-w-[1075px] px-3 pt-4"
          position="left"
        >
          <Reeling></Reeling>
        </SectionBlock>
      </div>

      <div className="mt-5">
        <SectionBlock
          title="Explore Our Other Categories"
          subtitle=""
          className="mx-auto mt-4 max-w-[1075px] px-3 pt-4"
          position="center"
        >
          <SwiperCard
            categories={categories}
            isLoading={isLoading}
          ></SwiperCard>
        </SectionBlock>
      </div>
    </main>
  );
}
