import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SwiperCard = () => {
  useEffect(() => {
    // Initialize Swiper instance
    const swiper = new Swiper(".slider-cards-js", {
      direction: "horizontal",
      slidesPerView: 8,
      centeredSlides: true,
      spaceBetween: 12,
      loop: true,
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

  const slides = [
    "https://avatar.iran.liara.run/public/22",
    "https://avatar.iran.liara.run/public/21",
    "https://avatar.iran.liara.run/public/33",
    "https://avatar.iran.liara.run/public/41",
    "https://avatar.iran.liara.run/public/6",
    "https://avatar.iran.liara.run/public/9",
    "https://avatar.iran.liara.run/public/48",
    "https://avatar.iran.liara.run/public/5",
  ];

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="slider-cards-js">
        <div className="swiper-wrapper">
          {slides.map((src, index) => (
            <div key={index} className="swiper-slide">
              <a href="/books/search?category=science-fiction-2">
                <div className="flex flex-col items-center justify-between">
                  <div className="h-[98px] w-[98px] rounded-full lg:h-[105px] lg:w-[105px] lg:object-cover border p-1 border-[#D237604D]">
                    <img
                      src={src}
                      alt="Category"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-2 block text-center">
                    <span className="text-heading text-center text-base font-normal transition-colors group-hover:text-orange-500 md:text-base">
                      Comic books
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperCard;
