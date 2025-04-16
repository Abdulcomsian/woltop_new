import Image from "next/image";

import cloudflareLoader from "~/lib/cloudflare-loader";

const ConsultationSection = ({ responseData, isLoading }) => {
  const logoSrc = responseData?.first_consultation_img || null;
  const consultantgirl = responseData?.second_consultation_img || null;

  // console.log(consultantgirl, logoSrc, "test");
  return (
    <div className="relative mt-8 flex h-[598px] justify-end p-8 md:h-[481px] md:rounded-lg">
      <Image
        src={logoSrc}
        loader={cloudflareLoader}
        fill
        alt="Background"
        className="rounded-lg object-cover object-center"
        unoptimized={false}
        quality={80}
        priority
      />
      <Image
        src={consultantgirl}
        loader={cloudflareLoader}
        className="absolute bottom-0 left-20 hidden object-cover lg:block"
        width={470}
        height={550}
        unoptimized={false}
        alt=""
        sizes="(max-width: 768px) 100vw, 50vw" // Responsive breakpoints
        quality={80}
      />
      {/* Right Side - Content */}
      <div className="relative z-10 w-full p-6 pl-0 text-left sm:w-[36%]">
        <p className="text-base text-[#000000] md:text-[20px]">In-Home</p>
        <h2 className="mb-4 text-[34px] font-bold text-[#000000]">
          Consultation
        </h2>
        <p className="mb-[22px] text-base text-[#000000] md:text-[20px]">
          Tailored Wallpaper Consultation Brought to Your Doorstep
        </p>
        <ul className="mb-[28px] list-disc text-left text-base text-[#000000] md:mb-[40px] md:text-[20px]">
          <li className="mb-5 flex items-center gap-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16.5"
                r="16"
                fill="#49AD91"
                fillOpacity="0.25"
              />
              <rect
                x="4"
                y="4.5"
                width="24"
                height="24"
                rx="12"
                fill="#49AD91"
              />
              <path
                d="M15.619 24.5C16.2286 24.5 16.8381 24.42 17.3714 24.26C17.0667 23.86 16.7619 23.38 16.6095 22.82C16.3048 22.9 15.9238 22.9 15.619 22.9C12.2667 22.9 9.52381 20.02 9.52381 16.5C9.52381 12.98 12.2667 10.1 15.619 10.1C16.2286 10.1 16.7619 10.18 17.2952 10.34L18.5143 9.06C17.6 8.74 16.6095 8.5 15.619 8.5C11.4286 8.5 8 12.1 8 16.5C8 20.9 11.4286 24.5 15.619 24.5ZM11.4286 16.1L12.4952 14.98L14.8571 17.46L21.4095 10.58L22.4762 11.7L14.8571 19.7L11.4286 16.1ZM20.9524 18.1L19.9924 20.3L17.9048 21.3L19.9924 22.308L20.9524 24.5L21.9048 22.308L24 21.3L21.9048 20.3L20.9524 18.1Z"
                fill="white"
              />
            </svg>
            Design Consultation
          </li>
          <li className="mb-5 flex items-center gap-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16.5"
                r="16"
                fill="#49AD91"
                fillOpacity="0.25"
              />
              <rect
                x="4"
                y="4.5"
                width="24"
                height="24"
                rx="12"
                fill="#49AD91"
              />
              <path
                d="M15.619 24.5C16.2286 24.5 16.8381 24.42 17.3714 24.26C17.0667 23.86 16.7619 23.38 16.6095 22.82C16.3048 22.9 15.9238 22.9 15.619 22.9C12.2667 22.9 9.52381 20.02 9.52381 16.5C9.52381 12.98 12.2667 10.1 15.619 10.1C16.2286 10.1 16.7619 10.18 17.2952 10.34L18.5143 9.06C17.6 8.74 16.6095 8.5 15.619 8.5C11.4286 8.5 8 12.1 8 16.5C8 20.9 11.4286 24.5 15.619 24.5ZM11.4286 16.1L12.4952 14.98L14.8571 17.46L21.4095 10.58L22.4762 11.7L14.8571 19.7L11.4286 16.1ZM20.9524 18.1L19.9924 20.3L17.9048 21.3L19.9924 22.308L20.9524 24.5L21.9048 22.308L24 21.3L21.9048 20.3L20.9524 18.1Z"
                fill="white"
              />
            </svg>
            Material Exploration
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16.5"
                r="16"
                fill="#49AD91"
                fillOpacity="0.25"
              />
              <rect
                x="4"
                y="4.5"
                width="24"
                height="24"
                rx="12"
                fill="#49AD91"
              />
              <path
                d="M15.619 24.5C16.2286 24.5 16.8381 24.42 17.3714 24.26C17.0667 23.86 16.7619 23.38 16.6095 22.82C16.3048 22.9 15.9238 22.9 15.619 22.9C12.2667 22.9 9.52381 20.02 9.52381 16.5C9.52381 12.98 12.2667 10.1 15.619 10.1C16.2286 10.1 16.7619 10.18 17.2952 10.34L18.5143 9.06C17.6 8.74 16.6095 8.5 15.619 8.5C11.4286 8.5 8 12.1 8 16.5C8 20.9 11.4286 24.5 15.619 24.5ZM11.4286 16.1L12.4952 14.98L14.8571 17.46L21.4095 10.58L22.4762 11.7L14.8571 19.7L11.4286 16.1ZM20.9524 18.1L19.9924 20.3L17.9048 21.3L19.9924 22.308L20.9524 24.5L21.9048 22.308L24 21.3L21.9048 20.3L20.9524 18.1Z"
                fill="white"
              />
            </svg>
            Measurement
          </li>
        </ul>
        <button className="rounded-md bg-[#49AD91] px-[18px] py-[8px] text-[18px] font-semibold tracking-[-2%] text-white hover:bg-[#498f7b] md:text-[20px]">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ConsultationSection;
