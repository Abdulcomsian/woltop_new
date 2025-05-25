"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../assets/banner/banner.png";
import homeBannerWings from "../../../../public/homeBannerWings.png";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";
import cloudflareLoader from "~/lib/cloudflare-loader";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function Banner() {
  const { data: homeBanner, isLoading, isError } = useGetHomeBannerQuery({});

  const handleImageError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const target = event.target as HTMLImageElement;
      target.src = banner.src;
      target.onerror = null;
    },
    [],
  );
  console.log("homeBanner", homeBanner);

  // Preload the actual banner image (not logo)
  if (typeof window !== "undefined" && homeBanner?.banner) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = homeBanner.button_link;
    document.head.appendChild(link);
  }

  if (isLoading) {
    return (
      <div className="container mx-auto">
        <div className="relative aspect-[3/1] overflow-hidden rounded-[10px] bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-200 to-gray-300" />
          </div>
        </div>
      </div>
    );
  }

  // Use banner image from API or fallback
  const bannerSrc = homeBanner?.banner || banner.src;
  const logoAlt = homeBanner?.text ? `${homeBanner.text} logo` : "Company logo";
  const bannerAlt = homeBanner?.text
    ? `${homeBanner.text} banner`
    : "Main banner";

  return (
    <div className="container mx-auto">
      <div className="relative aspect-[3/1] overflow-hidden rounded-[10px] bg-gray-100">
        {/* Background Image - Corrected source */}
        <div className="absolute inset-0 z-10">
          <Image
            priority
            fill
            src={typeof bannerSrc === "string" ? bannerSrc : ""}
            loader={cloudflareLoader}
            className="object-cover object-center"
            alt={bannerAlt}
            onError={handleImageError}
            sizes="100vw"
            quality={75}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>

        {/* Content Overlay - Ensure white text visibility */}
        <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center text-center">
          {/* Logo - Only show if exists */}
          {homeBanner?.logo && (
            <div className="mb-3 md:mb-5">
              <Image
                src={homeBanner.logo}
                alt={logoAlt}
                loader={cloudflareLoader}
                width={76}
                height={46}
                quality={75}
                priority={false}
                onError={handleImageError}
                className="h-auto w-[76px]"
              />
            </div>
          )}

          {/* Heading - Only show if text exists */}
          {homeBanner?.name && (
            <h1 className="lovelace text-[28px] font-normal tracking-[1%] text-white md:text-4xl lg:text-7xl">
              {homeBanner.name}
            </h1>
          )}

          {/* CTA Button - Only show if link exists */}
          {homeBanner?.button_link && (
            <Link
              href={homeBanner.button_link}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:ring-accent-700 mt-3 inline-flex shrink-0 items-center justify-center rounded border border-white bg-transparent px-6 py-2 text-[16px] leading-none text-white outline-none transition duration-300 ease-in-out hover:border-accent hover:bg-white hover:text-black focus:shadow focus:outline-0 focus:ring-1 md:mt-5 md:px-12 md:py-3"
            >
              <span className="font-normal tracking-[1%]">Shop Now</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
