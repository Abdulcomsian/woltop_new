import Image from "next/image";
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
    <div className="container relative mx-auto ">
      <div className="scrollbar-hide grid auto-cols-[minmax(145px,1fr)] grid-flow-col overflow-x-auto gap-4 mt-4">
        {limitedCategories?.map((category) => (
          <div
            key={category.id}
            className="group relative cursor-pointer overflow-hidden text-center flex flex-col items-center lg:container lg:m-auto"
          >
            <a
              href={`/books/search?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* <div className="w-full mx-auto"> */}
                <img
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                  style={{ border: "2px solid #D237604D", padding: "3px" }}
                  className="h-[90px] w-[90px] md:h-[98px] md:w-[98px] lg:h-[105px] lg:w-[105px] rounded-full lg:object-cover"
                  src={category.image}
                />
              {/* </div> */}
            </a>
            <div className="mt-2 block">
              <span className="text-heading text-center text-xs font-semibold transition-colors group-hover:text-orange-500 md:text-base">
                {category.name}
              </span>
            </div>
          </div>
        ))}

        {/* See All Button */}
      </div>
      <Link href="/allCategories" className="absolute right-0 -top-12">
          <span className="text-heading text-center text-xs font-semibold hover:text-orange-500 md:text-base">
            See All
          </span>
      </Link>
    </div>
  );
}
