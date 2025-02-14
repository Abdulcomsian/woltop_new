import Image from "next/image";
import banner from "../../../assets/banner/banner.png";
import homeBannerWings from "../../../../public/homeBannerWings.png";
import placeholderImage from "../../../../public/aboutbanner.jpg";
import { useGetHomeBannerQuery } from "~/store/api/homeBannerApi";

export default function Banner() {
  const { data: homeBanner, isLoading } = useGetHomeBannerQuery({});

  const handleImageError = (event) => {
    event.target.src = placeholderImage.src;
  };

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="relative rounded-[10px] overflow-hidden py-[49px] md:py-[106px] animate-pulse">
          <div className="container relative z-20 mx-auto text-center text-white">
            <div className="mb-3 md:mb-5 flex justify-center">
              <div className="h-12 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-10 w-48 bg-gray-300 mx-auto rounded mb-4"></div>
            <div className="h-10 w-32 bg-gray-300 mx-auto rounded"></div>
          </div>
          <div className="absolute inset-0 z-10">
            <div className="h-full w-full bg-gray-300"></div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-[10px] overflow-hidden py-[49px] md:py-[106px]">
          <div className="container relative z-20 mx-auto text-center text-white">
            <div className="mb-3 md:mb-5 flex justify-center">
              <Image
                src={homeBanner?.logo || placeholderImage.src}
                alt="img"
                width={76}
                height={46}
                onError={handleImageError}
              />
            </div>
            <h1 className="font-lovelace text-[28px] font-normal tracking-[1%] text-white md:text-4xl lg:text-7xl xl:text-7xl">
              {homeBanner?.text || "Luxe Designs"}
            </h1>
            <a
              href={homeBanner?.button_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                data-variant="outline"
                className="focus:ring-accent-700 border-border-400 text-body px-6 md:px-12 py-2 md:py-3 mt-3 md:mt-5 inline-flex shrink-0 items-center justify-center rounded border bg-transparent text-[16px] leading-none text-white outline-none transition duration-300 ease-in-out hover:border-accent hover:text-black hover:bg-white focus:shadow focus:outline-0 focus:ring-1"
              >
                <span className="font-normal tracking-[1%]">Shop Now</span>
              </button>
            </a>
          </div>
          <div className="absolute inset-0 z-10">
            <Image
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: "0",
                top: "0",
                right: "0",
                bottom: "0",
                color: "transparent",
              }}
              fill
              src={homeBanner?.banner || placeholderImage.src}
              className="h-full w-full object-cover object-center"
              alt="img"
              onError={handleImageError}
            />
          </div>
        </div>
      )}
    </div>
  );
}
