import Image from "next/image";
import banner from "../../../assets/banner/banner.png";
import homeBannerWings from "../../../../public/homeBannerWings.png";

export default function Banner() {
  return (
    <div className="container mx-auto">
      <div className="relative px-4 py-24">
        <div className="container relative z-20 mx-auto text-center text-white">
          <div className="mb-5 flex justify-center">
            <Image src={homeBannerWings} alt="img" width={76} height={46} />
          </div>
          <h1 className="font-lovelace text-3xl font-normal tracking-[1%] text-white md:text-4xl lg:text-7xl xl:text-7xl">
            Luxe Designs
          </h1>
          <button
            data-variant="outline"
            className="focus:ring-accent-700 border-border-400 text-body px-12 py-3 mt-5 inline-flex shrink-0 items-center justify-center rounded border bg-transparent text-[16px] leading-none text-white outline-none transition duration-300 ease-in-out hover:border-accent hover:text-black hover:bg-white focus:shadow focus:outline-0 focus:ring-1"
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
            src={banner}
            className="h-full w-full"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
