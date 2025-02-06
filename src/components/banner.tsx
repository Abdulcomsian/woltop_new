import Image from "next/image";
import bannerImage from "../../public/aboutbanner.jpg";

interface BannerData {
  heading: string;
  subHeading: string;
  desc: string;
}

interface BannerProps {
  bannerData: BannerData;
}

export default function Banner({ bannerData }: BannerProps) {
  return (
    <>
      <div className="relative w-full mx-auto text-black">
        <div className="absolute inset-0 bg-opacity-30">
          <Image
            className="h-full w-full object-cover"
            src={bannerImage}
            alt="Banner Background"
            width={1200}
            height={500}
          />
        </div>
        <div className="relative w-full mx-auto px-0 py-4 sm:px-4 md:px-4 md:py-20 lg:px-8">
          <div className="mx-auto text-center">
            <div className="banner-img-container mx-auto text-center align-middle">
              <img
                className="mb-3 ml-auto mr-auto w-20"
                src={"/wings.png"}
                alt=""
              />
            </div>
            <p className="mt-4 text-lg font-light sm:my-6 sm:text-xl tracking-[5%]">
              {bannerData.heading}
            </p>
            <h1 className="text-2xl font-medium sm:text-5xl md:text-4xl lg:text-[50px]">
              {bannerData.subHeading}
            </h1>
            <p className="mt-4 text-lg sm:mt-6 sm:text-[18px] max-w-[730.8px] mx-auto text-[#4E4949]">{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
