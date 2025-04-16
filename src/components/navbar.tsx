"use client";
import { useEffect, useState } from "react";
import footerLogo from "~/assets/img/footer-logo.svg";
import { SearchIcon } from "./icons/searchIcon";
import { useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cloudflareLoader from "~/lib/cloudflare-loader";
import { useGetFaviconQuery } from "~/store/api/faviconApi";

export default function Navbar() {
  const { data: faviconData, isLoading: isLogoLoading } = useGetFaviconQuery(
    {},
  );
  const Main_Logo = faviconData?.data?.main_logo || "";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsLength = useSelector((state: any) => state.cart.items.length);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const SimpleHeader = pathname === "/cart" || pathname === "/thankYou";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isRemoteImage = (src: string) => {
    return src.startsWith("http://") || src.startsWith("https://");
  };

  const LogoPlaceholder = () => (
    <div className="animate-pulse">
      <div className="h-[20px] w-32 rounded bg-gray-200 md:h-[37px] md:w-[236px]"></div>
    </div>
  );
  // Use this for both SimpleHeader and regular header
  const renderLogo = () => (
    <Link
      href="/"
      className="flex items-center text-gray-700 hover:text-gray-900"
    >
      <span className="relative h-[20px] w-32 overflow-hidden md:h-[37px] md:w-[236px]">
        {isLogoLoading ? (
          <LogoPlaceholder />
        ) : (
          <Image
            src={Main_Logo}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            width={236}
            height={37}
            className="object-contain"
            alt="Logo"
            loader={cloudflareLoader}
            unoptimized={!isRemoteImage(Main_Logo)}
          />
        )}
      </span>
    </Link>
  );

  return (
    <>
      {/* <!-- navbar goes here --> */}
      <nav
        className="sticky top-0 z-50 bg-[#FFFFFF]"
        style={{ boxShadow: "0px 4px 4px 0px #0000001A" }}
      >
        <div className="mx-auto max-w-[1075px] px-3 py-[11px] md:py-[16px]">
          <div className="flex items-center justify-between">
            {SimpleHeader ? (
              <>
                <div className="flex items-center">
                  <Link href="/" className="text-gray-700 hover:text-gray-900">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2969 23.4375L5.85938 15L14.2969 6.5625"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.03125 15L24.1406 15"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-gray-700 hover:text-gray-900">
                    <span className="relative h-[20px] w-32 overflow-hidden md:h-[37px] md:w-[236px]">
                      {isLogoLoading ? <LogoPlaceholder /> : renderLogo()}
                    </span>
                  </div>
                </div>
                <div></div> {/* Empty div to balance the flex layout */}
              </>
            ) : (
              <>
                <div className="flex items-center space-x-[10px]">
                  {isMobileView && (
                    <button
                      className="mobile-menu-button md:hidden"
                      onClick={toggleMenu}
                    >
                      {isMobileMenuOpen ? (
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 22 22"
                        version="1.1"
                        viewBox="0 0 22 22"
                        xmlSpace="preserve"
                        width="26"
                        height="26"
                        fill="#404543"
                      >
                        <title id="menu">menu</title>
                        <path d="M3.4 4.2h15.2v1.7H3.4V4.2zm0 6h10.1v1.7H3.4v-1.7zm0 5.9h15.2v1.7H3.4v-1.7z"></path>
                        <path
                          d="M-7.1 5.2c.8-.6 1.4-1.5 1.7-2.5s.3-2.1-.1-3c-.3-1-1-1.8-1.8-2.4-.8-.6-1.9-.9-2.9-.9s-2.1.3-2.9.9c-.9.5-1.5 1.3-1.9 2.3s-.4 2-.1 3c.3 1 .9 1.9 1.7 2.5-1.4.6-2.6 1.5-3.5 2.7-.9 1.2-1.5 2.6-1.6 4.1v.3c0 .1.1.2.2.3.1.2.3.3.6.3.2 0 .4 0 .6-.2.2-.1.3-.3.3-.6.2-1.6 1-3.1 2.2-4.2 1.2-1.1 2.8-1.7 4.4-1.7 1.6 0 3.2.6 4.4 1.7 1.2 1.1 2 2.6 2.2 4.2 0 .2.1.4.3.5.2.1.4.2.6.2h.1c.2 0 .4-.1.6-.3.1-.2.2-.4.2-.6-.3-1.3-.9-2.8-1.8-4-.9-1.2-2.1-2.1-3.5-2.6zm-3.1-.6c-.7 0-1.3-.2-1.9-.6-.5-.4-1-.9-1.2-1.5-.3-.6-.3-1.3-.2-1.9.1-.6.4-1.2.9-1.7s1.1-.8 1.7-.9c.6-.1 1.3-.1 1.9.2.6.3 1.1.7 1.5 1.2.4.5.6 1.2.6 1.9 0 .9-.4 1.7-1 2.4-.6.5-1.4.9-2.3.9z"
                          className="st0"
                        ></path>
                      </svg>
                      )}
                    </button>
                  )}

                  {/* <!-- logo --> */}
                  <div>
                    <div className="flex items-center text-gray-700 hover:text-gray-900">
                      <span className="relative h-[20px] w-32 overflow-hidden md:h-[37px] md:w-[236px]">
                        {isLogoLoading ? <LogoPlaceholder /> : renderLogo()}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- primary nav --> */}
                <div className="hidden items-center text-[18px] md:flex md:gap-2.5 lg:gap-10">
                  <a href="#" className="text-[#000000] hover:text-gray-900">
                    New Arrival
                  </a>
                  <a
                    href="/about"
                    className="text-[#000000] hover:text-gray-900"
                  >
                    About
                  </a>
                  {/* <a href="#" className="text-[#000000] hover:text-gray-900">
                    Tools
                  </a> */}
                  <a
                    href="/careers"
                    className="text-[#000000] hover:text-gray-900"
                  >
                    Careers
                  </a>
                  <a
                    href="/contact"
                    className="text-[#000000] hover:text-gray-900"
                  >
                    Contact
                  </a>
                </div>

                {/* <!-- secondary nav --> */}
                <div className="flex shrink-0 items-center gap-[10px]">
                  <Link href="/search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      enableBackground="new 0 0 23 23"
                      version="1.1"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      height="28"
                      width="28"
                      fill="#404543"
                    >
                      <title id="search-icon">search-icon</title>
                      <path d="M16.4 15.2l3.6 3.6-1.2 1.2-3.6-3.6c-1.3 1-2.9 1.7-4.7 1.7-4.2 0-7.6-3.4-7.6-7.6S6.4 3 10.5 3s7.6 3.4 7.6 7.6c0 1.7-.6 3.4-1.7 4.6zm-1.7-.6c1-1.1 1.7-2.5 1.7-4.1 0-3.2-2.6-5.9-5.9-5.9s-5.9 2.6-5.9 5.9 2.6 5.9 5.9 5.9c1.6 0 3-.6 4.1-1.7l.1-.1z"></path>
                      <path d="M25.2-11.9c.8-.6 1.4-1.5 1.7-2.5s.3-2.1-.1-3-1-1.8-1.8-2.4c-.8-.6-1.9-.9-2.9-.9s-2.1.3-2.9.9c-.8.6-1.5 1.5-1.8 2.4s-.4 2-.1 3c.3 1 .9 1.9 1.7 2.5-1.4.6-2.6 1.5-3.5 2.7-.9 1.2-1.5 2.6-1.7 4.1v.3c0 .1.1.2.2.3.1.2.3.3.6.3.2 0 .4 0 .6-.2.2-.1.3-.3.3-.6.2-1.6 1-3.1 2.2-4.2 1.2-1.1 2.8-1.7 4.4-1.7 1.6 0 3.2.6 4.4 1.7 1.2 1.1 2 2.6 2.2 4.2 0 .2.1.4.3.5.2.1.4.2.6.2h.1c.2 0 .4-.1.6-.3.1-.2.2-.4.2-.6-.2-1.5-.7-2.9-1.7-4.1-1-1.1-2.2-2-3.6-2.6zm-3.1-.6c-.7 0-1.3-.2-1.9-.6-.5-.4-1-.9-1.2-1.5-.3-.6-.3-1.3-.2-1.9.1-.6.4-1.2.9-1.7s1.1-.8 1.7-.9 1.3-.1 1.9.2c.6.3 1.1.7 1.5 1.2.4.5.6 1.2.6 1.9 0 .9-.4 1.7-1 2.4-.6.6-1.4.9-2.3.9z"></path>
                    </svg>
                  </Link>
                  <Link href="/wishlist">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      enableBackground="new 0 0 24 24"
                      version="1.1"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      height="28"
                      width="28"
                      fill="#404543"
                    >
                      <title id="heart-icon">heart-icon</title>
                      <path d="M15.8 4.1c2.6 0 4.7 2.1 4.7 5.1 0 6-6.4 9.4-8.5 10.7-2.1-1.3-8.5-4.7-8.5-10.7 0-3 2.1-5.1 4.7-5.1 1.6 0 3 .9 3.8 1.7.9-.9 2.3-1.7 3.8-1.7zm-3 13.3c.8-.5 1.4-.9 2.1-1.5 2.5-2 4-4.2 4-6.8 0-2-1.3-3.4-3-3.4-.9 0-1.9.5-2.6 1.2L12 8.2 10.8 7c-.7-.7-1.7-1.2-2.6-1.2-1.7 0-3 1.4-3 3.4 0 2.5 1.4 4.7 4 6.8.6.5 1.3 1 2.1 1.5.3.2.5.3.8.5.2-.3.4-.4.7-.6z"></path>
                    </svg>
                  </Link>
                  <Link href="/cart" className="product-cart relative lg:flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      enableBackground="new 0 0 24 24"
                      version="1.1"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      height="28"
                      width="28"
                      fill="#404543"
                    >
                      <title id="cart-icon">cart-icon</title>
                      <path d="M7.4 3.6h9.3c.3 0 .5.1.7.3l2.3 3v12.6c0 .5-.4.8-.8.8H5.3c-.5 0-.8-.4-.8-.8V6.9l2.3-3c.1-.2.3-.3.6-.3zm10.5 5H6.1v10.1h11.8V8.6zm-.4-1.7l-1.3-1.7H7.8L6.5 6.9h11zm-8 3.4V12c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-1.7h1.7V12c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2v-1.7h1.7z"></path>
                      <path d="M40.5 12.2c.8-.6 1.4-1.5 1.7-2.5.3-1 .3-2.1-.1-3-.3-1-1-1.8-1.8-2.4-.8-.6-1.9-.9-2.9-.9s-2.1.3-2.9.9c-.8.6-1.5 1.5-1.8 2.4-.3 1-.4 2-.1 3 .3 1 .9 1.9 1.7 2.5-1.4.6-2.6 1.5-3.5 2.7-.9 1.2-1.5 2.6-1.6 4.1v.3c0 .1.1.2.2.3.1.2.3.3.6.3.2 0 .4 0 .6-.2.2-.1.3-.3.3-.6.2-1.6 1-3.1 2.2-4.2 1.2-1.1 2.8-1.7 4.4-1.7 1.6 0 3.2.6 4.4 1.7 1.2 1.1 2 2.6 2.2 4.2 0 .2.1.4.3.5.2.1.4.2.6.2.2 0 .4-.1.6-.3.1-.2.2-.4.2-.6-.2-1.5-.7-2.9-1.7-4.1-1-1.1-2.2-2-3.6-2.6zm-3.1-.6c-.7 0-1.3-.2-1.9-.6-.5-.4-1-.9-1.2-1.5-.2-.5-.3-1.2-.2-1.9.2-.6.5-1.2.9-1.7.5-.5 1.1-.8 1.7-.9.6-.1 1.3-.1 1.9.2.6.3 1.1.7 1.5 1.2.4.5.6 1.2.6 1.9 0 .9-.4 1.7-1 2.4-.6.6-1.4.9-2.3.9z"></path>
                    </svg>
                    <span className="absolute -right-[3px] -top-[3px] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#49AD91] text-[10px] text-white md:-right-[6px] md:-top-[6px] md:h-[17px] md:w-[17px]">
                      {isMounted ? cartItemsLength : 0}
                    </span>
                  </Link>
                  <Link className="" href="/menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      enableBackground="new 0 0 24 24"
                      version="1.1"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      height="28"
                      width="28"
                      fill="#404543"
                    >
                      <title id="account-icon">account-icon</title>
                      <path d="M12 3.6c4.6 0 8.4 3.7 8.4 8.4 0 4.6-3.7 8.4-8.4 8.4-4.6 0-8.4-3.7-8.4-8.4 0-4.6 3.8-8.4 8.4-8.4zm.1 11.7c-1.7 0-3.2.7-4.3 1.9 1.1.9 2.6 1.5 4.2 1.5s3.2-.6 4.3-1.6c-1-1.1-2.5-1.8-4.2-1.8zm-.1-10c-3.7 0-6.7 3-6.7 6.7 0 1.5.5 2.9 1.3 4 1.4-1.5 3.3-2.4 5.5-2.4 2.1 0 4 .8 5.3 2.2.8-1.1 1.2-2.4 1.2-3.9.1-3.6-2.9-6.6-6.6-6.6zm0 .9c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3zm0 1.6c-.9 0-1.7.7-1.7 1.7 0 .9.7 1.7 1.7 1.7s1.7-.7 1.7-1.7c0-.9-.8-1.7-1.7-1.7z"></path>
                      <path
                        d="M-13.2 19.6c.8-.6 1.4-1.5 1.7-2.5.3-1 .3-2.1-.1-3-.3-1-1-1.8-1.8-2.4-.8-.6-1.9-.9-2.9-.9s-2.1.3-2.9.9c-.8.5-1.4 1.3-1.8 2.3-.3 1-.4 2-.1 3 .3 1 .9 1.9 1.7 2.5-1.4.6-2.6 1.5-3.5 2.7-.9 1.2-1.5 2.6-1.6 4.1v.3c0 .1.1.2.2.3.1.2.3.3.6.3.2 0 .4 0 .6-.2.2-.1.3-.3.3-.6.2-1.6 1-3.1 2.2-4.2 1.2-1.1 2.8-1.7 4.4-1.7 1.6 0 3.2.6 4.4 1.7 1.2 1.1 2 2.6 2.2 4.2 0 .2.1.4.3.5.2.1.4.2.6.2h.1c.2 0 .4-.1.6-.3.1-.2.2-.4.2-.6-.2-1.5-.7-2.9-1.7-4.1-1-1-2.3-2-3.7-2.5zm-3.1-.6c-.7 0-1.3-.2-1.9-.6-.5-.4-1-.9-1.2-1.5-.3-.6-.3-1.3-.2-1.9.1-.6.4-1.2.9-1.7s1.1-.8 1.7-.9 1.3-.1 1.9.2c.6.3 1.1.7 1.5 1.2.4.5.6 1.2.6 1.9 0 .9-.4 1.7-1 2.4-.5.5-1.4.9-2.3.9z"
                        className="st0"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}
        >
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            New Arrival
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
          >
            About
          </a>
          {/* <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            Tools
          </a> */}
          <a
            href="/careers"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
          >
            Careers
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
