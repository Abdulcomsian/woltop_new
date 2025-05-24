"use client";

import dynamic from "next/dynamic";
import { useGetPopularProductsQuery } from "~/store/api/productApi";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import SectionBlock from "~/components/ui/section-block";

// Dynamic imports with loading states
const SwiperCard = dynamic(() => import("~/components/swiperCard"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const Banner = dynamic(() => import("./shop/banner"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
});

const PopularWallpaper = dynamic(() => import("./shop/popularWallpaper"), {
  loading: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-64 animate-pulse rounded bg-gray-200" />
      ))}
    </div>
  ),
});

export default function AboveTheFold() {
  // Critical data fetching
  const { data: popularProducts, isLoading: isLoadingPopular } =
    useGetPopularProductsQuery(undefined, {
      refetchOnMountOrArgChange: false,
    });

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery({});

  return (
    <>
      {/* Hero Swiper */}
      <div className="mx-auto mb-6 mt-4 max-w-[1075px] px-3 md:mt-6">
        <SwiperCard categories={categories} isLoading={isLoadingCategories} />
      </div>

      {/* Main Banner */}
      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="center">
        <Banner />
      </SectionBlock>

      {/* Popular Products */}
      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="center">
        <PopularWallpaper
          products={popularProducts}
          isLoading={isLoadingPopular}
        />
      </SectionBlock>
    </>
  );
}
