import landding from "../../../assets/cards/landing.png";
import checkMark from "../../../assets/img/eva_checkmark-square-outline.svg";
import Image from "next/image";

export default function LandingAbout() {
  return (
    <div className="">
      <div className="flex items-start gap-10 md:gap-[62px]">
        <div className="relative max-h-[542px] min-h-[542px] min-w-[462px] max-w-[462px] overflow-hidden rounded-[20px]">
          <Image
            src={landding}
            fill
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text">
          <h2 className="mb-5 max-w-[499px] text-[36px] leading-[46.8px] font-semibold text-black md:mb-8">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <div className="item mb-6">
            <div className="md-3 flex gap-[6px] md:mb-5">
              <div className="icon">
                <Image src={checkMark} alt="" />
              </div>
              <div className="title text-lg font-semibold text-black md:text-[22px]">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <p className="text-sm text-black md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Elit rutrum magna amet
              orci ipsum orci egestas nulla. Velit non scelerisque sagittis
              convallis arcu quis aliquam mi viverra.
            </p>
          </div>
          <div className="item mb-6">
            <div className="md-3 flex gap-[6px] md:mb-5">
              <div className="icon">
                <Image src={checkMark} alt="" />
              </div>
              <div className="title text-lg font-semibold text-black md:text-[22px]">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <p className="text-sm text-black md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Elit rutrum magna amet
              orci ipsum orci egestas nulla. Velit non scelerisque sagittis
              convallis arcu quis aliquam mi viverra.
            </p>
          </div>
          <div className="item">
            <div className="md-3 flex gap-[6px] md:mb-5">
              <div className="icon">
                <Image src={checkMark} alt="" />
              </div>
              <div className="title text-lg font-semibold text-black md:text-[22px]">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <p className="text-sm text-black md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Elit rutrum magna amet
              orci ipsum orci egestas nulla. Velit non scelerisque sagittis
              convallis arcu quis aliquam mi viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
