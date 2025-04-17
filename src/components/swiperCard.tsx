import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import cloudflareLoader from "~/lib/cloudflare-loader";

const SwiperCard = ({ categories, isLoading }) => {
  const containerRef = useRef(null);

  return (
    <div className="container mx-auto">
      <div
        ref={containerRef}
        className="scrollbar-hide flex overflow-x-auto py-1 px-1"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex space-x-3">
          {isLoading
            ? Array(8)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: "142.8px" }}
                  >
                    <div className="flex w-[110px] flex-col items-center justify-between">
                      <div className="h-[80px] w-[80px] animate-pulse rounded-full bg-gray-300 md:h-[98px] md:w-[98px]"></div>
                      <div className="mt-2 block text-center">
                        <div className="h-4 w-16 animate-pulse rounded-md bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                ))
            : categories?.map((category, index) => (
                <div key={index} className="flex-shrink-0">
                  <Link href={`/category/${category.id}`}>
                    <div className="flex flex-col items-center justify-between">
                      <Image
                        src={category.image}
                        alt={category.name}
                        loader={cloudflareLoader}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={80}
                        width={98}
                        height={98}
                        className="h-[78px] min-h-[78px] w-[78px] min-w-[78px] rounded-full object-cover p-1 ring-[2px] ring-[#D237604D] md:h-[98px] md:w-[98px]"
                      />
                      <div className="block text-center md:mt-2">
                        <span className="text-heading text-center text-[11.5px] font-normal text-[#000000] transition-colors group-hover:text-orange-500 md:text-base">
                          {category.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
