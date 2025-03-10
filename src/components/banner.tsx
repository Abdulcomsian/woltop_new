import Image from "next/image";
import bannerImage from "../../public/aboutbanner.jpg";

interface BannerData {
  title: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
}

interface BannerProps {
  bannerData: BannerData;
}

export default function Banner({ bannerData }: BannerProps) {
  return (
    <>
      <div className="relative mx-auto w-full text-black">
        <div className="absolute inset-0 bg-opacity-30">
          <Image
            className="h-full w-full object-cover"
            src={bannerData?.banner}
            alt="Banner Background"
            width={1200}
            height={500}
          />
        </div>
        <div className="relative mx-auto w-full px-0 py-4 sm:px-4 md:px-4 md:py-20 lg:px-8">
          <div className="mx-auto text-center">
            <div className="banner-img-container mx-auto text-center align-middle">
              <img
                className="mb-3 ml-auto mr-auto w-20"
                src={bannerData?.logo}
                alt=""
              />
            </div>
            <p className="mt-4 text-lg font-light tracking-[5%] sm:my-6 sm:text-xl">
              {bannerData?.name}
            </p>
            <h1 className="text-2xl font-medium sm:text-5xl md:text-4xl lg:text-[50px]">
              {bannerData?.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[730.8px] text-lg text-[#4E4949] sm:mt-6 sm:text-[18px]">
              {bannerData?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
