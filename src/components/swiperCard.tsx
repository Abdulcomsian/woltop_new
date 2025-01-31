import Link from "next/link";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";

const SwiperCard = () => {
  const { data: categories } = useGetCategoriesQuery({});

  useEffect(() => {
    // Initialize Swiper instance
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
          slidesPerView: 3,
          spaceBetween: 8,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
        1440: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="slider-cards-js">
        <div className="swiper-wrapper">
          {categories?.map((category, index) => (
            <div key={index} className="swiper-slide">
              <Link href={`/category/${category.id}`}>
                <div className="flex flex-col items-center justify-between">
                  <div className="">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      decoding="async"
                      className="h-[98px] w-[98px] rounded-full border border-[#D237604D] p-1 lg:h-[105px] lg:w-[105px] lg:object-cover"
                    />
                  </div>
                  <div className="mt-2 block text-center">
                    <span className="text-heading text-center text-base font-normal transition-colors group-hover:text-orange-500 md:text-base">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperCard;
