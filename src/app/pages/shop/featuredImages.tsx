import Image from "next/image";
import banner from "../../../assets/banner/banner.png";

export default function FeaturedImages() {
  return (
    <div className="max-w-[822px] mx-auto">
      <div className="flex w-full gap-3 overflow-x-auto md:gap-6">
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={banner}
            alt=""
            fill
          />
        </div>
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={banner}
            alt=""
            fill
          />
        </div>
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={banner}
            alt=""
            fill
          />
        </div>
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={banner}
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
}
