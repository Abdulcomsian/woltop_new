import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../assets/banner/banner.png";
import homeBannerWings from "../../../../public/homeBannerWings.png";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";
import cloudflareLoader from "~/lib/cloudflare-loader";

// Small base64 placeholder for blur effect
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export default function Banner() {
  const { data: homeBanner, isLoading, isError } = useGetHomeBannerQuery({});

  const handleImageError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const target = event.target as HTMLImageElement;
      target.src = banner.src;
      target.onerror = null; // Prevent infinite loop if fallback fails
    },
    [],
  );

  // Optimized loading skeleton
  if (isLoading) {
    return (
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[10px] py-[49px] md:py-[106px]">
          <div className="absolute inset-0 z-10">
            <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-200 to-gray-300" />
          </div>
          <div className="container relative z-20 mx-auto text-center">
            <div className="mb-3 flex justify-center md:mb-5">
              <div className="h-[46px] w-[76px] rounded bg-gray-300" />
            </div>
            <div className="mx-auto mb-4 h-8 w-48 rounded bg-gray-300 md:h-10" />
            <div className="mx-auto h-8 w-32 rounded bg-gray-300 md:h-10" />
          </div>
        </div>
      </div>
    );
  }

  // Fallback for API errors
  if (isError || !homeBanner) {
    return (
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[10px] py-[49px] md:py-[106px]">
          <div className="absolute inset-0 z-10">
            <Image
              priority
              fill
              src={banner.src}
              loader={cloudflareLoader}
              className="h-full w-full object-cover object-center"
              alt="Fallback banner"
              quality={75}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div className="container relative z-20 mx-auto text-center text-white">
            <div className="mb-3 flex justify-center md:mb-5">
              <Image
                src={homeBannerWings.src}
                alt="Fallback logo"
                loader={cloudflareLoader}
                width={76}
                height={46}
                quality={75}
              />
            </div>
            <h1 className="lovelace text-[28px] font-normal tracking-[1%] text-white md:text-4xl lg:text-7xl xl:text-7xl">
              Luxe Designs
            </h1>
            <Link href="#" passHref legacyBehavior>
              <button className="focus:ring-accent-700 mt-3 inline-flex shrink-0 items-center justify-center rounded border border-white bg-transparent px-6 py-2 text-[16px] leading-none text-white outline-none transition duration-300 ease-in-out hover:border-accent hover:bg-white hover:text-black focus:shadow focus:outline-0 focus:ring-1 md:mt-5 md:px-12 md:py-3">
                <span className="font-normal tracking-[1%]">Shop Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-[10px] py-[49px] md:py-[106px]">
        <div className="container relative z-20 mx-auto text-center text-white">
          <div className="mb-3 flex justify-center md:mb-5">
            <Image
              src={homeBanner.logo || homeBannerWings.src}
              alt="Company logo"
              loader={cloudflareLoader}
              width={76}
              height={46}
              quality={75}
              onError={handleImageError}
              priority={!homeBanner.logo} // Only prioritize if not using fallback
            />
          </div>
          <h1 className="lovelace text-[28px] font-normal tracking-[1%] text-white md:text-4xl lg:text-7xl xl:text-7xl">
            {homeBanner.text || "Luxe Designs"}
          </h1>
          {homeBanner.button_link && (
            <Link
              href={homeBanner.button_link}
              target="_blank"
              rel="noopener noreferrer"
              passHref
              legacyBehavior
            >
              <button className="focus:ring-accent-700 mt-3 inline-flex shrink-0 items-center justify-center rounded border border-white bg-transparent px-6 py-2 text-[16px] leading-none text-white outline-none transition duration-300 ease-in-out hover:border-accent hover:bg-white hover:text-black focus:shadow focus:outline-0 focus:ring-1 md:mt-5 md:px-12 md:py-3">
                <span className="font-normal tracking-[1%]">Shop Now</span>
              </button>
            </Link>
          )}
        </div>
        <div className="absolute inset-0 z-10">
          <Image
            priority
            fill
            src={homeBanner.banner || banner.src}
            loader={cloudflareLoader}
            className="h-full w-full object-cover object-center"
            alt="Main banner"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </div>
    </div>
  );
}
