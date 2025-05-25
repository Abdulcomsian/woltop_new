"use client";

import { Suspense, useMemo } from "react";
import { useGetCategoriesQuery } from "~/store/api/catagoriesApi";
import { useGetContactInfoQuery } from "~/store/api/contactInfoApi";
import { useGetAboutQuery } from "~/store/api/aboutApi";
import { useGetFaviconQuery } from "~/store/api/faviconApi";
import Link from "next/link";
import { MasterCardIcon } from "~/assets/iconsComp/mastercard";
import { PayPalIcon } from "~/assets/iconsComp/paypal";
import { UnionPayIcon } from "~/assets/iconsComp/unionpay";
import { VisaIcon } from "~/assets/iconsComp/visa";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="bg-[#EEF1F6]">
      <div className="mx-auto max-w-[1075px] px-3">
        {/* Logo and Social - Stable Layout */}
        <div className="flex items-center justify-between pt-7 lg:container md:pt-12 lg:m-auto">
          <LogoSection />
          <SocialIconsSection />
        </div>

        <div className="devider my-7 border border-[#DBDBDB] md:my-12"></div>

        {/* Categories - Stable Height Container */}
        <div className="mb-9 min-h-[120px] w-full rounded-md border-2 border-dashed border-[#49AD91] bg-white p-6 lg:container lg:m-auto">
          <Suspense fallback={<CategoriesSkeleton />}>
            <CategoriesSection />
          </Suspense>
        </div>

        {/* About Us - Stable Section */}
        <div className="lg:container lg:m-auto">
          <h2 className="mb-3.5 font-poppins text-xl font-medium md:mb-6 md:text-[28px]">
            About Us
          </h2>
          <Suspense fallback={<AboutSkeleton />}>
            <AboutSection />
          </Suspense>
        </div>

        {/* Quick Links - Stable Grid */}
        <div className="flex flex-col gap-10 pt-8 lg:container lg:m-auto lg:flex-row lg:justify-between">
          <QuickLinksSection />
          <ContactSection />
        </div>

        {/* Shop For - Stable Grid */}
        <div className="flex flex-col gap-10 pt-8 lg:container lg:m-auto lg:flex-row lg:justify-between">
          <ShopForSection />
          <AddressSection />
        </div>

        {/* Footer Bottom - Stable Layout */}
        <FooterBottom year={year} />
      </div>
    </div>
  );
}

// Skeleton Components
function CategoriesSkeleton() {
  return <div className="h-6 w-full animate-pulse bg-gray-200" />;
}

function AboutSkeleton() {
  return <div className="h-24 w-full animate-pulse bg-gray-200" />;
}

// Sub-components
function LogoSection() {
  const { data: faviconData } = useGetFaviconQuery({});
  const Main_Logo = faviconData?.data?.main_logo;

  return (
    <Link href="/" className="inline-flex" aria-label="Home">
      <span className="relative h-[20px] w-[124px] md:h-[42px] md:w-[263.45px]">
        {Main_Logo ? (
          <img
            src={Main_Logo}
            className="absolute inset-0 h-full w-full object-contain"
            alt="Company Logo"
            loading="eager"
            width={263}
            height={42}
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </span>
    </Link>
  );
}

function SocialIconsSection() {
  const { data: contactInfoResponse } = useGetContactInfoQuery({});
  const contactInfo = contactInfoResponse?.data;

  return (
    <div className="flex items-center gap-4">
      {contactInfo?.twitter_link && (
        <SocialIcon
          href={contactInfo.twitter_link}
          icon={<TwitterIcon />}
          label="Twitter"
        />
      )}
      {contactInfo?.facebook_link && (
        <SocialIcon
          href={contactInfo.facebook_link}
          icon={<FacebookIcon />}
          label="Facebook"
        />
      )}
      {contactInfo?.instagram_link && (
        <SocialIcon
          href={contactInfo.instagram_link}
          icon={<InstagramIcon />}
          label="Instagram"
        />
      )}
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-[20px] w-[20px] md:h-[30px] md:w-[30px] lg:h-[44px] lg:w-[45px]"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function CategoriesSection() {
  const { data: categories } = useGetCategoriesQuery({});

  return (
    <div className="text-xs leading-[26px] md:text-[14px]">
      <span className="mr-1 font-bold">Wallpapers :</span>
      {categories?.map((category, index) => (
        <span key={category?.id}>
          <Link
            href={`/category/${category.id}`}
            className="hover:text-gray-900"
          >
            {category?.name}
          </Link>
          {index < categories?.length - 1 && (
            <span className="mr-1 text-[#000000]">,</span>
          )}
        </span>
      ))}
    </div>
  );
}

function AboutSection() {
  const { data: aboutDescription } = useGetAboutQuery({});

  return (
    <p className="font-poppins text-xs font-normal leading-[18.8px] text-[#656567] md:text-[18px] md:leading-[28.8px]">
      {aboutDescription?.data?.description ||
        "Welcome to Wolpin, your premier destination for exquisite wallpapers and decorative designs. At Wolpin, we believe that every space tells a story, and our mission is to help you create environments that reflect your unique style and personality."}
    </p>
  );
}

function QuickLinksSection() {
  return (
    <div className="lg:w-3/4">
      <h3 className="mb-3.5 font-poppins text-xl font-medium md:mb-6 md:text-[28px]">
        Quick Links
      </h3>
      <div className="flex flex-wrap gap-x-4 gap-y-2 font-poppins text-xs font-normal text-[#656567] md:text-[18px]">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/about" className="hover:text-gray-900">
          About
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/careers" className="hover:text-gray-900">
          Careers
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/contact" className="hover:text-gray-900">
          Contact
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/faq" className="hover:text-gray-900">
          FAQs
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/orders" className="hover:text-gray-900">
          Order Tracking
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/account" className="hover:text-gray-900">
          Account
        </Link>
        <span className="text-[#000000]">|</span>
        <Link href="/blogs" className="hover:text-gray-900">
          Blogs
        </Link>
      </div>
    </div>
  );
}

function ContactSection() {
  const { data: contactInfoResponse } = useGetContactInfoQuery({});
  const contactInfo = contactInfoResponse?.data;

  return (
    <div className="hidden lg:block lg:w-1/4">
      <h3 className="mb-3.5 font-poppins text-xl font-medium md:mb-6 md:text-[28px]">
        Contact Us
      </h3>
      <p className="font-poppins text-xs font-normal leading-[18.8px] text-[#656567] md:text-[18px] md:leading-[23.8px]">
        WhatsApp: {contactInfo?.contact_number || "+91 1234 678 1011"}
      </p>
      <p className="font-poppins text-xs font-normal leading-[18.8px] text-[#656567] md:text-[18px] md:leading-[23.8px]">
        Email: {contactInfo?.email || "info@wolpin.com"}
      </p>
    </div>
  );
}

function ShopForSection() {
  const { data: categories } = useGetCategoriesQuery({});

  return (
    <div className="lg:w-3/4">
      <h3 className="mb-3.5 font-poppins text-xl font-medium md:mb-6 md:text-[28px]">
        Shop For
      </h3>
      <div className="flex flex-wrap gap-x-4 gap-y-2 font-poppins text-xs font-normal text-[#656567] md:text-[18px]">
        {categories?.map((category, index) => (
          <div key={category.id}>
            <Link
              href={`/category/${category.id}`}
              className="hover:text-gray-900"
            >
              {category.name}
            </Link>
            {index < categories.length - 1 && (
              <span className="ml-2 text-[#000000]">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AddressSection() {
  return (
    <div className="lg:w-1/4">
      <h3 className="mb-3.5 font-poppins text-xl font-medium md:mb-6 md:text-[28px]">
        Address
      </h3>
      <p className="font-poppins text-xs font-normal leading-[18.8px] text-[#656567] md:text-[18px] md:leading-[23.4px]">
        S.F.NO. 315, Angels Garden,
      </p>
      <p className="font-poppins text-xs font-normal leading-[18.8px] text-[#656567] md:text-[18px] md:leading-[23.4px]">
        Nagamanaickenpalayam, Pattanam,
      </p>
      <p className="font-poppins text-xs font-normal leading-[18.8px] text-[#656567] md:text-[18px] md:leading-[23.4px]">
        Coimbatore, Tamil Nadu, 641016
      </p>
    </div>
  );
}

function FooterBottom({ year }: { year: number }) {
  return (
    <>
      <hr className="my-[29px] text-[#DBDBDB]" />
      <div className="flex flex-col justify-between gap-3 pb-[29px] lg:container md:pb-16 lg:m-auto lg:flex-row lg:items-center lg:pb-12">
        <div className="flex space-x-6 text-xs text-[#656567] md:text-[18px]">
          <Link href="/terms" className="hover:underline">
            Terms &amp; Conditions
          </Link>
          <Link href="/privacyPolicy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-3">
          <MasterCardIcon />
          <VisaIcon />
          <UnionPayIcon />
          <PayPalIcon />
        </div>
        <div className="text-xs text-[#656567] md:text-[18px]">
          © {year} Wolpin. All rights reserved.
        </div>
      </div>
    </>
  );
}

// Social Icons Components
function TwitterIcon() {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect x="0.45459" width="44" height="44" rx="22" fill="#262626"></rect>
      <g clipPath="url(#clip0_586_97)">
        <path
          d="M31.1046 13.1249L13.3885 20.8635C12.1794 21.4136 12.1864 22.1776 13.1666 22.5183L17.7151 24.1255L28.2389 16.6043C28.7365 16.2613 29.1911 16.4458 28.8174 16.8216L20.2911 25.5381H20.2891L20.2911 25.5392L19.9773 30.85C20.437 30.85 20.6398 30.6111 20.8976 30.3293L23.1069 27.8958L27.7023 31.7407C28.5496 32.2693 29.1581 31.9977 29.369 30.8522L32.3856 14.748C32.6944 13.3456 31.913 12.7107 31.1046 13.1249Z"
          fill="white"
        ></path>
      </g>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect x="0.45459" width="44" height="44" rx="22" fill="#262626"></rect>
      <g clipPath="url(#clip0_586_97)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.4546 22C32.4546 16.4771 27.9774 12 22.4546 12C16.9317 12 12.4546 16.4771 12.4546 22C12.4546 26.9912 16.1114 31.1283 20.8921 31.8785V24.8906H18.353V22H20.8921V19.7969C20.8921 17.2906 22.3851 15.9062 24.6692 15.9062C25.763 15.9062 26.9077 16.1016 26.9077 16.1016V18.5625H25.6468C24.4046 18.5625 24.0171 19.3334 24.0171 20.125V22H26.7905L26.3472 24.8906H24.0171V31.8785C28.7978 31.1283 32.4546 26.9912 32.4546 22Z"
          fill="white"
        ></path>
      </g>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect x="0.45459" width="44" height="44" rx="22" fill="#262626"></rect>
      <g clipPath="url(#clip0_586_97)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2974 13.1245C16.311 13.1245 15.3651 13.5162 14.6675 14.2136C13.9699 14.9109 13.5778 15.8567 13.5774 16.8431V26.7631C13.5774 27.7497 13.9693 28.6959 14.667 29.3935C15.3646 30.0912 16.3108 30.4831 17.2974 30.4831H27.2174C28.2037 30.4827 29.1496 30.0906 29.8469 29.393C30.5442 28.6954 30.936 27.7494 30.936 26.7631V16.8431C30.9356 15.857 30.5437 14.9114 29.8464 14.2141C29.1491 13.5168 28.2035 13.1249 27.2174 13.1245H17.2974ZM28.2874 16.8488C28.2874 17.133 28.1745 17.4055 27.9736 17.6064C27.7726 17.8073 27.5001 17.9202 27.216 17.9202C26.9318 17.9202 26.6593 17.8073 26.4583 17.6064C26.2574 17.4055 26.1445 17.133 26.1445 16.8488C26.1445 16.5646 26.2574 16.2921 26.4583 16.0912C26.6593 15.8903 26.9318 15.7774 27.216 15.7774C27.5001 15.7774 27.7726 15.8903 27.9736 16.0912C28.1745 16.2921 28.2874 16.5646 28.2874 16.8488ZM22.2588 18.8317C21.4707 18.8317 20.715 19.1447 20.1577 19.702C19.6005 20.2592 19.2874 21.015 19.2874 21.8031C19.2874 22.5912 19.6005 23.3469 20.1577 23.9042C20.715 24.4615 21.4707 24.7745 22.2588 24.7745C23.0469 24.7745 23.8027 24.4615 24.3599 23.9042C24.9172 23.3469 25.2302 22.5912 25.2302 21.8031C25.2302 21.015 24.9172 20.2592 24.3599 19.702C23.8027 19.1447 23.0469 18.8317 22.2588 18.8317ZM17.8574 21.8031C17.8574 20.6361 18.321 19.517 19.1461 18.6918C19.9713 17.8667 21.0904 17.4031 22.2574 17.4031C23.4243 17.4031 24.5435 17.8667 25.3687 18.6918C26.1938 19.517 26.6574 20.6361 26.6574 21.8031C26.6574 22.97 26.1938 24.0892 25.3687 24.9144C24.5435 25.7395 23.4243 26.2031 22.2574 26.2031C21.0904 26.2031 19.9713 25.7395 19.1461 24.9144C18.321 24.0892 17.8574 22.97 17.8574 21.8031Z"
          fill="white"
        ></path>
      </g>
    </svg>
  );
}
