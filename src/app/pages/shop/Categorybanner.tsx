import Image from "next/image";
import banner from "../../../assets/banner/banner.png";
import Link from "next/link";
import cloudflareLoader from "~/lib/cloudflare-loader";

export default function Categorybanner({ responseData, isLoading }) {
  const { name, banner } = responseData?.data?.category || {};
  const handleImageError = (event) => {
    event.target.src = banner.src;
  };

  const handleShopNowClick = () => {
    const targetElement = document.getElementById("categoryPopluarProducts");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="relative animate-pulse overflow-hidden rounded-[10px] py-[49px] md:py-[106px]">
          <div className="container relative z-20 mx-auto text-center text-white">
            <div className="mb-3 flex justify-center md:mb-5">
              <div className="h-12 w-20 rounded bg-gray-300"></div>
            </div>
            <div className="mx-auto mb-4 h-10 w-48 rounded bg-gray-300"></div>
            <div className="mx-auto h-10 w-32 rounded bg-gray-300"></div>
          </div>
          <div className="absolute inset-0 z-10">
            <div className="h-full w-full bg-gray-300"></div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-[10px] py-[49px] md:py-[106px]">
          <div className="container relative z-20 mx-auto text-center text-white">
            <h1 className="lovelace text-[28px] font-normal tracking-[1%] text-white md:text-4xl lg:text-7xl xl:text-7xl">
              {name || "3D Wallpaper"}
            </h1>
            <button
              onClick={handleShopNowClick}
              data-variant="outline"
              className="focus:ring-accent-700 border-border-400 text-body mt-3 inline-flex shrink-0 items-center justify-center rounded border bg-transparent px-6 py-2 text-[16px] leading-none text-white outline-none transition duration-300 ease-in-out hover:border-accent hover:bg-white hover:text-black focus:shadow focus:outline-0 focus:ring-1 md:mt-5 md:px-12 md:py-3"
            >
              <span className="font-normal tracking-[1%]">Shop Now</span>
            </button>
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
              loader={cloudflareLoader}
              src={banner}
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
