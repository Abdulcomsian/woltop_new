import Link from "next/link";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import cloudflareLoader from "~/lib/cloudflare-loader";
const SwiperCard = ({ categories, isLoading }) => {
  useEffect(() => {
    if (!isLoading) {
      const swiper = new Swiper(".slider-cards-js", {
        direction: "horizontal",
        slidesPerView: 8,
        spaceBetween: 12,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        },
      });

      // return () => {
      //   swiper?.destroy(true, true);
      // };
    }
  }, [isLoading]);

  return (
    <div className="container mx-auto overflow-hidden pt-[16px]">
      <div className="slider-cards-js">
        <div className="swiper-wrapper">
          {isLoading
            ? Array(8)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="swiper-slide"
                    style={{ width: "142.8px", marginRight: "0px !important" }}
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
                <div
                  key={index}
                  className="swiper-slide"
                  style={{
                    width: "142.8px",
                    marginRight: "0px !important",
                  }}
                >
                  <Link href={`/category/${category.id}`}>
                    <div className="flex flex-col w-[110px] items-center justify-between ">
                        <Image
                          src={category.image}
                          alt={category.name}
                          loader={cloudflareLoader}
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 768px) 100vw, 50vw" // Responsive breakpoints
                          quality={80}
                          width={98} // maximum width expected (matches md breakpoint)
                          height={98}
                          className="h-[78px] w-[78px] min-h-[78px] min-w-[78px] rounded-full ring-[2px] ring-[#D237604D] object-cover p-1 md:h-[98px] md:w-[98px]"
                        />
                      <div className="md:mt-2 block  text-center">
                        <span className="text-heading text-center text-[11.5px] font-normal text-[#000000] transition-colors group-hover:text-orange-500 md:text-base">
                          {category.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
        {/* <div className="swiper-pagination"></div> */}
      </div>
    </div>
  );
};

export default SwiperCard;
