"use client";
import SectionBlock from "~/components/ui/section-block";
import VideoSection from "~/app/pages/shop/videoSection";
import {
  useGetCategoriesByIdQuery,
  useGetCategoriesQuery,
} from "~/store/api/catagoriesApi";
import { useParams } from "next/navigation";
import CategoryDescription from "~/app/pages/shop/categoryDescription";
import CategoriesPopularCard from "~/app/pages/shop/CategoriesPopularCard";
import { useEffect } from "react";
import Categorybanner from "~/app/pages/shop/Categorybanner";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

export default function page() {
  const { slug } = useParams();
  const { data: categories, isLoading } = useGetCategoriesByIdQuery(
    slug as string,
  );
  console.log(categories, "categories");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <main>
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto max-w-[1075px] px-3 pt-10 md:pt-14"
        position="left"
      >
        <Categorybanner responseData={categories} isLoading={isLoading} />
      </SectionBlock>

      {categories?.data?.products?.length !== 0 && (
        <div className="mt-5 bg-[#F1FBFF]" id="categoryPopluarProducts">
          <SectionBlock
            title="Popular In Living Room"
            subtitle="Enhance your living space with our stunning collection of living room wallpapers."
            className="mx-auto mt-4 max-w-[1075px] px-3 pt-4"
            position="left"
          >
            <CategoriesPopularCard
              responseData={categories?.data?.products}
              isLoading={isLoading}
            />
          </SectionBlock>
        </div>
      )}

      {categories?.data?.category?.video !== null && (
        <SectionBlock
          title=""
          subtitle=""
          className="mx-auto mt-5 max-w-[1075px] px-3 pt-4"
          position="left"
        >
          <VideoSection
            responseData={categories}
            isLoading={isLoading}
          ></VideoSection>
        </SectionBlock>
      )}
      <SectionBlock
        title=""
        subtitle=""
        className="mx-auto mt-5 max-w-[1075px] px-3 pt-4"
        position="left"
      >
        <CategoryDescription responseData={categories} isLoading={isLoading} />
      </SectionBlock>
    </main>
  );
}
