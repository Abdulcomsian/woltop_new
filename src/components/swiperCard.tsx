import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css"; // Correct import for Swiper styles (v8+)

const SwiperCard = () => {
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Function to initialize the swiper
    const newSwiper = new Swiper(".slider-cards-js", {
      direction: "horizontal",
      slidesPerView: 7, // Show 4 slides at a time
      // slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 12,
      loop: true, // Enable infinite looping
      autoplay: {
        delay: 2500, // Delay between slide transitions (in ms), optional if you want autoplay
        disableOnInteraction: false, // Ensure autoplay continues after user interaction
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1, // If the screen width is <= 768px, show 1 slide at a time
        },
        1024: {
          slidesPerView: 6, // If the screen width is <= 1024px, show 3 slides at a time
        },
        // Optionally, you can define other breakpoints for larger screens
      },
    });

    const initializeSwiper = () => {
      if (window.innerWidth <= 768) {
        if (!isInitialized) {
          const newSwiper = new Swiper(".slider-cards-js", {
            direction: "horizontal",
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 32,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

          setSwiperInstance(newSwiper);
          setIsInitialized(true);
        }
      } else if (isInitialized && swiperInstance) {
        swiperInstance.destroy();
        setIsInitialized(false);
        setSwiperInstance(null);
      }
    };

 
    initializeSwiper();

    window.addEventListener("resize", initializeSwiper);
    // Reinitialize swiper when the window is resized

    // Cleanup on component unmount
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
      window.removeEventListener("resize", initializeSwiper);
    };
  }, [isInitialized, swiperInstance]); // Depend on isInitialized and swiperInstance to handle updates

  return (
    <div className="container overflow-hidden mx-auto mt-10 mb-10 ">
    <div className="slider-cards-js ">
      {/* Your swiper content goes here */}
      <div className="swiper-wrapper flex">
        <div className="swiper-slide">
        <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/22" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
        </div>
        <div className="swiper-slide">
        <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/21" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
        </div>
        <div className="swiper-slide">
        <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/33" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
        </div>
        <div className="swiper-slide">
        <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/41" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
        </div>
        <div className="swiper-slide">
        <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/6" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
        </div>
        <div className="swiper-slide">
        <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/9" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
        </div>
        <div className="swiper-slide"> <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/48" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
              </div>
        <div className="swiper-slide"> <a href="/books/search?category=science-fiction-2">
        <div className="lg:w-[105px] lg:h-[105px] h-[50px] md:w-[98px] md:h-[98px] mx-auto
         border-red-700">
          <img alt="Science Fiction" loading="lazy" width="98" height="98" decoding="async"
           style={{border:"2px solid #D237604D", padding:"3px" }}
            data-nimg="1" className="rounded-full lg:object-cover w-full h-full"
             src="https://avatar.iran.liara.run/public/5" />
              </div></a>
              <div className="mt-2 block text-center">
                <span className="text-base font-semibold text-heading transition-colors
               group-hover:text-orange-500 text-center text-xs md:text-base">Comic books</span>
               </div>
              </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
    </div>
  );
};

export default SwiperCard;
