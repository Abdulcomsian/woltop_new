"use client";

import dynamic from "next/dynamic";
import { Suspense, useMemo } from "react";
import { useGetTagsQuery } from "~/store/api/paramApi";
import SectionBlock from "~/components/ui/section-block";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { useGetProductsByTagQuery } from "~/store/api/productApi";
import { ProductCard } from "~/components/products/productCard";

// Dynamic imports with heavier loading fallbacks
const TabsComponent = dynamic(() => import("~/components/tabComponent"), {
  loading: () => (
    <div>
      <div className="flex space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-32 animate-pulse rounded-t-md bg-gray-300"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 pt-14 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="relative h-52 w-full animate-pulse bg-gray-200 md:h-80"
          >
            <CardContent>
              <div className="mb-2 h-4 w-3/4 rounded-md bg-gray-300" />
              <div className="h-4 w-1/2 rounded-md bg-gray-300" />
            </CardContent>
            <CardFooter>
              <div className="h-5 w-1/4 rounded-md bg-gray-300" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  ),
});

const HomePageReviewCards = dynamic(
  () => import("./shop/homePageReviewCards"),
  {
    loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" />,
  },
);

export default function BelowTheFold() {
  const { data: tags } = useGetTagsQuery({});

  const productTabs = useMemo(
    () =>
      tags?.data?.map((tag: any) => ({
        value: tag.id,
        label: tag.name,
      })) || [],
    [tags?.data],
  );

  const productContent = useMemo(
    () =>
      productTabs.map((tab: any) => ({
        value: tab.value,
        component: (
          <Suspense
            fallback={<div className="h-64 w-full animate-pulse bg-gray-200" />}
          >
            <TagsProductCard tagId={tab.value} />
          </Suspense>
        ),
      })),
    [productTabs],
  );

  return (
    <div className="bg-[#F1FBFF] pb-10 md:pb-14">
      {/* Products by Tags */}
      <SectionBlock className="mx-auto max-w-[1075px] px-3" position="center">
        <TabsComponent tabs={productTabs} content={productContent} />
      </SectionBlock>

      {/* Reviews */}
      <SectionBlock
        className="mx-auto max-w-[1075px] px-3 pt-10"
        position="center"
      >
        <HomePageReviewCards />
      </SectionBlock>
    </div>
  );
}

function TagsProductCard({ tagId }: { tagId: string }) {
  const { data: products } = useGetProductsByTagQuery(tagId);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        //@ts-ignore
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
