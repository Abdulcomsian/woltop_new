"use client";
import Banner from "~/app/pages/shop/banner";
import SectionBlock from "~/components/ui/section-block";
import Reeling from "../../pages/shop/reeling";
import CategorieCard from "../../pages/shop/categorieCard";
import { useGetProductByIdQuery } from "~/store/api/productApi";
import VideoSection from "~/app/pages/shop/videoSection";
import SwiperCard from "~/components/swiperCard";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import { useParams } from "next/navigation";
import CategoryDescription from "~/app/pages/shop/categoryDescription";
import RecentCard from "~/app/pages/shop/RecentCard";

export default function page() {
  const { slug } = useParams();
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery({});

  const { data: product, isLoading, error } = useGetProductByIdQuery(slug);
  const responseData = product ? { data: product, status: true } : null;

  if (isLoading) {
    return <div>Loading...</div>;
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
          <RecentCard />
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
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto mt-5 max-w-[1075px] px-3 pt-4"
        position="left"
      >
        <CategoryDescription />
      </SectionBlock>
    </main>
  );
}
