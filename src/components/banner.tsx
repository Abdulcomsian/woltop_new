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
      <div className="container relative mx-auto mt-10 text-black">
        <div className="absolute inset-0 bg-opacity-30">
          <Image
            className="h-full w-full object-cover"
            src={bannerImage}
            alt="Banner Background"
            width={1200}
            height={500}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-0 py-4 sm:px-4 md:px-4 md:py-20 lg:px-8">
          <div className="mx-auto w-96 pl-5 pr-5 text-center md:w-4/5 md:pl-5 md:pr-5">
            <div className="banner-img-container mx-auto text-center align-middle">
              <img
                className="mb-3 ml-auto mr-auto w-20"
                src={"/wings.png"}
                alt=""
              />
              {/* <img
                className="wings-img ml-auto mr-auto mt-2 w-60 p-3"
                src={"/heading.png"}
                alt=""
              /> */}
            </div>
            <p className="mt-4 text-lg font-light sm:my-6 sm:text-xl">
              {bannerData.heading}
            </p>
            <h1 className="text-2xl font-medium sm:text-5xl md:text-4xl lg:text-6xl">
              {bannerData.subHeading}
            </h1>
            <p className="mt-4 text-lg sm:mt-6 sm:text-xl">{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
