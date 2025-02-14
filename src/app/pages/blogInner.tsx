"use client";

import Image from "next/image";
import bannerImage from "../../../public/aboutbanner.jpg";

interface ResData {
  data: {
    image: string;
    title: string;
    short_description: string;
    description: string;
  };
}

export default function BlogInner({ resData }: { resData: ResData }) {
  console.log(resData, "blog details resData");

  return (
    <>
      <div className="container relative mx-auto min-h-96 text-black">
        <div className="absolute inset-0 overflow-hidden rounded-[8px] bg-opacity-30">
          <Image
            className="h-full w-full object-cover"
            src={resData?.data.image || bannerImage}
            alt="Banner Background"
            width={1200}
            height={500}
          />
        </div>
        <div className="mx-auto max-w-7xl px-0 py-4 sm:px-4 md:px-4 md:py-20 lg:px-8">
          <div className="absolute bottom-5 left-5 text-left text-white">
            <h1 className="text-2xl font-medium sm:text-5xl md:text-4xl">
              {resData?.data.title || "Bill Walsh leadership lessons"}
            </h1>
            <div className="mt-4 flex items-center gap-1 text-sm sm:text-[16px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9993 12L9.66602 13.5555M11.9993 8.11108V12"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mr-1">2 minute read</span>
              <svg
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="20" height="1" fill="white" />
              </svg>
              <div className="ml-1"></div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4 12H0V3.6H2.4V12ZM7.2 12H4.8V0H7.2V6V12ZM12 12H9.6V7.2H12V12Z"
                  fill="white"
                />
              </svg>
              <span className="ml-1">1.6K views</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        {resData?.data?.short_description}
      </p>
      <p className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        {resData?.data.description}
      </p>

      <div className="mb-[50px] flex items-start gap-2">
        <svg
          width="41"
          height="38"
          viewBox="0 0 41 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.6047 38L25.1085 34.5021C26.8036 31.5342 28.2868 28.5662 29.5581 25.5983C30.8295 22.7364 31.5711 19.9275 31.7829 17.1715L23.8372 15.4226V0H41L41 11.1297C41 17.7015 39.7287 23.0014 37.186 27.0293C34.5375 31.1632 31.677 34.8201 28.6047 38ZM4.76744 38L1.27132 34.5021C2.96641 31.5342 4.44961 28.5662 5.72093 25.5983C6.99225 22.7364 7.73385 19.9275 7.94574 17.1715L0 15.4226L0 0L17.1628 0V11.1297C17.1628 17.7015 15.8915 23.0014 13.3488 27.0293C10.7003 31.1632 7.83979 34.8201 4.76744 38Z"
            fill="#A9A9A9"
          />
        </svg>
        <span className="text-[48px] font-medium text-[#000000] leading-[72px]">
          Knicker lining concealed back zip fasten swing style high waisted
          double layer full pattern floral.
        </span>
      </div>

      <p className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        {resData?.data?.short_description}
      </p>
      <p className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        {resData?.data.description}
      </p>

      <p className="mb-[20px] text-[48px] font-medium text-[#000000] leading-[72px]">
        Eu ridiculus fringilla aenean
      </p>
      <p className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque
        vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus
        mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed
        enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget
        venenatis dui ante luctus ultricies tellus montes. Quis in sapien
        tempus.
      </p>
      <ul className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        <li>Crisp fresh iconic elegant timeless clean perfume</li>
        <li>Neck straight sharp silhouette and dart detail</li>
        <li>
          Machine wash cold slim fit premium stretch selvedge denim comfortable
          low waist
        </li>
      </ul>
      <p className="mb-[50px] text-[18px] text-[#0B0A0A] font-normal">
        See-through delicate embroidered organza blue lining luxury acetate-mix
        stretch pleat detailing. Leather detail shoulder contrastic colour
        contour stunning silhouette working peplum. Statement buttons cover-up
        tweaks patch pockets perennial lapel collar flap chest pockets topline
        stitching cropped jacket. Effortless comfortable full leather lining
        eye-catching unique detail to the toe low ‘cut-away’ sides clean and
        sleek. Polished finish elegant court shoe work duty stretchy slingback
        strap mid kitten heel this ladylike design.
      </p>

      <div className="flex items-center gap-[33px] text-[18px] font-normal text-[#9497A1]">
        <div className="flex items-center gap-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7988 6.04999C19.7989 6.50092 19.6881 6.94495 19.4763 7.34299C19.2644 7.74102 18.9578 8.08085 18.5837 8.33253C18.2095 8.58421 17.7792 8.74002 17.3307 8.78624C16.8821 8.83247 16.4291 8.76768 16.0115 8.59759L14.6013 10.7129C14.8694 10.9838 15.0783 11.3075 15.2147 11.6634C15.3511 12.0194 15.412 12.3998 15.3936 12.7805C15.3751 13.1612 15.2778 13.534 15.1076 13.8751C14.9374 14.2162 14.6982 14.5181 14.4051 14.7619C14.1121 15.0056 13.7715 15.1857 13.4051 15.2908C13.0387 15.3959 12.6545 15.4237 12.2768 15.3724C11.8991 15.3211 11.5361 15.1919 11.211 14.9929C10.8859 14.7939 10.6058 14.5294 10.3883 14.2164L7.64269 15.3934C7.78015 16.0608 7.6649 16.7555 7.31928 17.3428C6.97365 17.9302 6.42229 18.3682 5.77205 18.5721C5.12182 18.776 4.41904 18.7312 3.79995 18.4464C3.18086 18.1616 2.68956 17.6571 2.42129 17.0307C2.15301 16.4043 2.12688 15.7006 2.34795 15.056C2.56902 14.4114 3.02155 13.8718 3.61781 13.5419C4.21407 13.212 4.91159 13.1152 5.57515 13.2703C6.23872 13.4254 6.82106 13.8213 7.20929 14.3814L9.95489 13.2055C9.85377 12.7173 9.88727 12.2108 10.0518 11.7402C10.2163 11.2696 10.5057 10.8525 10.8889 10.5337C11.2722 10.2148 11.7349 10.0062 12.2276 9.93C12.7203 9.85384 13.2244 9.91305 13.6861 10.1013L15.0963 7.98709C14.7782 7.66636 14.544 7.27219 14.4144 6.83944C14.2848 6.40669 14.2638 5.94867 14.3533 5.50588C14.4427 5.06309 14.6399 4.64916 14.9274 4.30067C15.2148 3.95219 15.5837 3.67988 16.0014 3.50782C16.4191 3.33576 16.8727 3.26925 17.3222 3.31416C17.7717 3.35908 18.2032 3.51403 18.5786 3.76534C18.954 4.01664 19.2617 4.35655 19.4745 4.75502C19.6873 5.15349 19.7987 5.59825 19.7988 6.04999Z"
              fill="#9497A1"
            />
          </svg>
          <span>481 Views</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6166 6.27883V3.93583C13.6166 3.40783 14.1996 3.12403 14.5956 3.41883L14.6638 3.47823L19.6105 8.34023C19.8415 8.56793 19.8624 8.93313 19.6732 9.18503L19.6105 9.25653L14.6638 14.1218C14.292 14.487 13.6881 14.2527 13.6221 13.7544L13.6166 13.6642V11.3586L13.3328 11.3839C11.3528 11.5962 9.45418 12.5103 7.62708 14.1416C7.19808 14.5244 6.53588 14.1636 6.60628 13.585C7.15408 9.08603 9.44978 6.60553 13.3691 6.29533L13.6166 6.27883ZM6.05078 4.40003C5.32144 4.40003 4.62196 4.68976 4.10624 5.20548C3.59051 5.72121 3.30078 6.42068 3.30078 7.15003V15.95C3.30078 16.6794 3.59051 17.3788 4.10624 17.8946C4.62196 18.4103 5.32144 18.7 6.05078 18.7H14.8508C15.5801 18.7 16.2796 18.4103 16.7953 17.8946C17.3111 17.3788 17.6008 16.6794 17.6008 15.95V14.85C17.6008 14.7042 17.5428 14.5643 17.4397 14.4611C17.3365 14.358 17.1967 14.3 17.0508 14.3C16.9049 14.3 16.765 14.358 16.6619 14.4611C16.5587 14.5643 16.5008 14.7042 16.5008 14.85V15.95C16.5008 16.3876 16.3269 16.8073 16.0175 17.1168C15.7081 17.4262 15.2884 17.6 14.8508 17.6H6.05078C5.61317 17.6 5.19349 17.4262 4.88405 17.1168C4.57462 16.8073 4.40078 16.3876 4.40078 15.95V7.15003C4.40078 6.71242 4.57462 6.29274 4.88405 5.9833C5.19349 5.67387 5.61317 5.50003 6.05078 5.50003H9.35078C9.49665 5.50003 9.63655 5.44208 9.73969 5.33894C9.84284 5.23579 9.90078 5.0959 9.90078 4.95003C9.90078 4.80416 9.84284 4.66426 9.73969 4.56112C9.63655 4.45797 9.49665 4.40003 9.35078 4.40003H6.05078Z"
              fill="#9497A1"
            />
          </svg>
          <span className="mr-1">Share:</span>
          <div className="flex items-center gap-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.6729" cy="11" r="10.6729" fill="#5625DF" />
              <path
                d="M11.8957 15.6944V11.029H13.4696L13.7036 9.20237H11.8957V8.03888C11.8957 7.51177 12.0426 7.15089 12.7991 7.15089H13.7576V5.52234C13.2912 5.47236 12.8224 5.44822 12.3534 5.45005C10.9622 5.45005 10.007 6.29933 10.007 7.85843V9.19895H8.44336V11.0256H10.0104V15.6944H11.8957Z"
                fill="white"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.9718" cy="11" r="10.6729" fill="#FF27B7" />
              <path
                d="M15.6375 8.46988C15.6317 8.03876 15.551 7.61193 15.399 7.20848C15.2671 6.86817 15.0657 6.55911 14.8077 6.30104C14.5496 6.04297 14.2405 5.84157 13.9002 5.70971C13.5019 5.56021 13.0812 5.47937 12.6559 5.47064C12.1083 5.44616 11.9347 5.43933 10.5446 5.43933C9.1546 5.43933 8.97643 5.43933 8.43282 5.47064C8.0077 5.47944 7.58715 5.56027 7.18907 5.70971C6.84871 5.84148 6.5396 6.04285 6.28152 6.30093C6.02344 6.55901 5.82207 6.86811 5.6903 7.20848C5.5405 7.60644 5.45984 8.02708 5.4518 8.45223C5.42732 9.00039 5.41992 9.17401 5.41992 10.564C5.41992 11.9541 5.41992 12.1317 5.4518 12.6759C5.46034 13.1016 5.5406 13.5217 5.6903 13.9208C5.82229 14.261 6.02381 14.57 6.28197 14.828C6.54014 15.0859 6.84928 15.2872 7.18964 15.419C7.58663 15.5745 8.00725 15.6611 8.43339 15.6751C8.98155 15.6996 9.15517 15.707 10.5452 15.707C11.9353 15.707 12.1134 15.707 12.657 15.6751C13.0823 15.6667 13.5031 15.5861 13.9013 15.4366C14.2416 15.3046 14.5506 15.1031 14.8086 14.8451C15.0666 14.587 15.2681 14.2781 15.4001 13.9378C15.5498 13.5394 15.6301 13.1193 15.6386 12.6929C15.6631 12.1454 15.6705 11.9717 15.6705 10.5811C15.6694 9.19108 15.6694 9.01462 15.6375 8.46988ZM10.5412 13.1927C9.08743 13.1927 7.9097 12.015 7.9097 10.5612C7.9097 9.10741 9.08743 7.92968 10.5412 7.92968C11.2391 7.92968 11.9085 8.20693 12.402 8.70044C12.8955 9.19394 13.1727 9.86328 13.1727 10.5612C13.1727 11.2591 12.8955 11.9285 12.402 12.422C11.9085 12.9155 11.2391 13.1927 10.5412 13.1927ZM13.2775 8.44597C12.9377 8.44597 12.6639 8.1716 12.6639 7.83235C12.6639 7.7518 12.6797 7.67205 12.7105 7.59763C12.7414 7.52322 12.7865 7.4556 12.8435 7.39865C12.9005 7.3417 12.9681 7.29652 13.0425 7.2657C13.1169 7.23487 13.1967 7.21901 13.2772 7.21901C13.3577 7.21901 13.4375 7.23487 13.5119 7.2657C13.5863 7.29652 13.6539 7.3417 13.7109 7.39865C13.7678 7.4556 13.813 7.52322 13.8438 7.59763C13.8747 7.67205 13.8905 7.7518 13.8905 7.83235C13.8905 8.1716 13.6162 8.44597 13.2775 8.44597Z"
                fill="white"
              />
              <path
                d="M10.5414 12.2702C11.4855 12.2702 12.2508 11.5049 12.2508 10.5608C12.2508 9.61676 11.4855 8.85144 10.5414 8.85144C9.59735 8.85144 8.83203 9.61676 8.83203 10.5608C8.83203 11.5049 9.59735 12.2702 10.5414 12.2702Z"
                fill="white"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11.2706" cy="11" r="10.6729" fill="#37DAF3" />
              <g clipPath="url(#clip0_1459_2299)">
                <path
                  d="M17.4717 6.55236C16.9964 6.76297 16.4858 6.90527 15.949 6.9696C16.5028 6.63819 16.9172 6.1166 17.1148 5.50214C16.5944 5.81122 16.0249 6.02878 15.431 6.14536C15.0316 5.71894 14.5026 5.43629 13.9262 5.34132C13.3497 5.24634 12.758 5.34434 12.2429 5.62011C11.7278 5.89588 11.3182 6.33398 11.0777 6.8664C10.8371 7.39882 10.779 7.99576 10.9125 8.56456C9.85812 8.51162 8.82665 8.23757 7.88504 7.76019C6.94343 7.28282 6.11272 6.61278 5.44682 5.79358C5.21913 6.18634 5.08821 6.64172 5.08821 7.1267C5.08795 7.56329 5.19547 7.9932 5.40121 8.37827C5.60695 8.76334 5.90456 9.09168 6.26764 9.33415C5.84657 9.32075 5.43479 9.20698 5.06658 9.00229V9.03645C5.06653 9.64878 5.27835 10.2423 5.66607 10.7162C6.0538 11.1902 6.59356 11.5154 7.19376 11.6367C6.80315 11.7424 6.39363 11.7579 5.99612 11.6822C6.16546 12.2091 6.49532 12.6698 6.93953 12.9999C7.38374 13.33 7.92004 13.5129 8.47338 13.5231C7.53406 14.2604 6.37402 14.6604 5.17985 14.6587C4.96832 14.6587 4.75696 14.6464 4.54688 14.6217C5.75902 15.401 7.17005 15.8147 8.61113 15.813C13.4894 15.813 16.1562 11.7727 16.1562 8.26856C16.1562 8.15472 16.1533 8.03974 16.1482 7.92589C16.6669 7.55076 17.1147 7.08623 17.4705 6.55406L17.4717 6.55236Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1459_2299">
                  <rect
                    width="13.6614"
                    height="13.6614"
                    fill="white"
                    transform="translate(4.01367 3.74231)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
