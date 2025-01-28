import Link from "next/link";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";

export default function SwiperItem() {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading categories.</div>;
  }

  const limitedCategories = categories?.slice(0, 6);

  return (
    <div className="container relative mx-auto">
      <div className="scrollbar-hide mt-4 grid auto-cols-[minmax(145px,1fr)] grid-flow-col gap-4 overflow-x-auto">
        {limitedCategories?.map((category) => (
          <div
            key={category.id}
            className="group relative flex cursor-pointer flex-col items-center overflow-hidden text-center"
          >
            <Link href={`/category/${category.id}`}>
              <div className="p-1 rounded-full border-2 border-[#D237604D] ">
                <img
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                  className="h-[90px] w-[90px] rounded-full md:h-[98px] md:w-[98px] lg:h-[105px] lg:w-[105px] lg:object-cover"
                  src={category.image}
                />
              </div>
            </Link>
            <div className="mt-2 block">
              <span className="text-heading text-center text-xs font-semibold transition-colors group-hover:text-orange-500 md:text-base">
                {category.name}
              </span>
            </div>
          </div>
        ))}

        {/* See All Button */}
        <div className="group relative flex cursor-pointer flex-col items-center overflow-hidden text-center">
          <Link href="/allCategories">
            <div className="p-1 rounded-full border-2 border-[#D237604D]">
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-gray-100 md:h-[98px] md:w-[98px] lg:h-[105px] lg:w-[105px]">
                <span className="text-heading text-xs font-semibold text-gray-500 group-hover:text-orange-500 md:text-base">
                  See All
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
