"use client";
import Image from "next/image";
import banner from "../../../assets/banner/landingBanner.jpg";

export default function LandingBanner() {
  
  return (
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-[10px] pt-[46px] pb-[129px]">
        <div className="container relative z-20 mx-auto text-center text-white">
          <form className="mx-auto max-w-[734px] rounded-[10px] bg-[#EAFFF9ED] bg-opacity-20 p-8">
            <h1 className="mb-[8px] text-[18px] font-semibold text-black md:mb-[15px] md:text-2xl">
              Bring Our Expertise Straight to{" "}
              <span className="text-[#49AD91]">Your Doorstep!</span>
            </h1>
            <p className="mx-auto mb-4 max-w-[471px] text-xs text-[#4E4949] md:mb-[27px] md:text-base">
              Lorem ipsum dolor sit amet consectetur. Adipiscing erat diam nisl
              diam semper massa.
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-[6.72px] border-[1px] border-[#E1E3E6] px-[18px] py-[13px] text-sm text-black placeholder:text-[#757D8A]"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full rounded-[6.72px] border-[1px] border-[#E1E3E6] px-[18px] py-[13px] text-sm text-black placeholder:text-[#757D8A]"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mt-[8px] md:mt-[15px]">
              <input
                type="text"
                id="address"
                name="address"
                className="w-full rounded-[6.72px] border-[1px] border-[#E1E3E6] px-[18px] py-[13px] text-sm text-black placeholder:text-[#757D8A]"
                placeholder="Home Address"
                required
              />
            </div>

            <div className="mt-[8px] grid grid-cols-1 gap-2 md:mt-[15px] md:grid-cols-3 md:gap-4">
              <div>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full rounded-[6.72px] border-[1px] border-[#E1E3E6] px-[18px] py-[13px] text-sm text-black placeholder:text-[#757D8A]"
                  placeholder="State"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full rounded-[6.72px] border-[1px] border-[#E1E3E6] px-[18px] py-[13px] text-sm text-black placeholder:text-[#757D8A]"
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  className="w-full rounded-[6.72px] border-[1px] border-[#E1E3E6] px-[18px] py-[13px] text-sm text-black placeholder:text-[#757D8A]"
                  placeholder="Zip Code"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 h-[44px] w-full rounded-[4px] bg-[#49AD91] px-[18px] text-base text-white transition duration-300 md:mt-[27px] md:w-[174px]"
            >
              Next
            </button>
          </form>
        </div>
        <Image fill src={banner} className="h-full w-full" alt="img" />
      </div>
    </div>
  );
}
