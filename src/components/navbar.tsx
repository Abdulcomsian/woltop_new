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
  const { data: faviconData } = useGetFaviconQuery({});
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

  // Use this for both SimpleHeader and regular header
  const renderLogo = () => (
    <Link
      href="/"
      className="flex items-center text-gray-700 hover:text-gray-900"
    >
      <span className="relative h-[20px] w-32 overflow-hidden md:h-[37px] md:w-[236px]">
        <Image
          src={footerLogo}
          width={236}
          height={37}
          className="object-contain"
          alt="Company Logo"
          loader={isRemoteImage(footerLogo.src) ? cloudflareLoader : undefined}
          unoptimized={!isRemoteImage(footerLogo.src)}
        />
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
                  <Link
                    href="/"
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <span className="relative h-[20px] w-32 overflow-hidden md:h-[37px] md:w-[236px]">
                      <img
                        src={Main_Logo || null}
                        className="object-contain"
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        alt=""
                      />
                    </span>
                  </Link>
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
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  )}

                  {/* <!-- logo --> */}
                  <div>
                    <Link
                      href="/"
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <span className="relative h-[20px] w-32 overflow-hidden md:h-[37px] md:w-[236px]">
                        {/* <img
                          src={Main_Logo}
                          className="object-contain"
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          alt=""
                        /> */}
                      </span>
                    </Link>
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
                <div className="flex shrink-0 items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
                  <Link href="/search">
                    <SearchIcon />
                  </Link>
                  <Link href="/wishlist">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8401 5.11012C20.3294 4.59912 19.7229 4.19376 19.0555 3.9172C18.388 3.64064 17.6726 3.49829 16.9501 3.49829C16.2276 3.49829 15.5122 3.64064 14.8448 3.9172C14.1773 4.19376 13.5709 4.59912 13.0601 5.11012L12.0001 6.17012L10.9401 5.11012C9.90843 4.07842 8.50915 3.49883 7.05012 3.49883C5.59109 3.49883 4.19181 4.07842 3.16012 5.11012C2.12843 6.14181 1.54883 7.54108 1.54883 9.00012C1.54883 10.4591 2.12843 11.8584 3.16012 12.8901L4.22012 13.9501L12.0001 21.7301L19.7801 13.9501L20.8401 12.8901C21.3511 12.3794 21.7565 11.7729 22.033 11.1055C22.3096 10.438 22.4519 9.7226 22.4519 9.00012C22.4519 8.27763 22.3096 7.56222 22.033 6.89476C21.7565 6.2273 21.3511 5.62087 20.8401 5.11012Z"
                        stroke="#0B0A0A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link href="/cart" className="product-cart relative lg:flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z"
                        stroke="#0B0A0A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z"
                        stroke="#0B0A0A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6"
                        stroke="#0B0A0A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="absolute -right-[3px] -top-[3px] flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#49AD91] text-[10px] text-white md:-right-[6px] md:-top-[6px] md:h-[19px] md:w-[19px]">
                      {isMounted ? cartItemsLength : 0}
                    </span>
                  </Link>
                  <Link className="" href="/menu">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 14 19"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99984 8.33342C8.84079 8.33342 10.3332 6.84103 10.3332 5.00008C10.3332 3.15913 8.84079 1.66675 6.99984 1.66675C5.15889 1.66675 3.6665 3.15913 3.6665 5.00008C3.6665 6.84103 5.15889 8.33342 6.99984 8.33342Z"
                        stroke="#121212"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M6.99984 17.5002C10.2215 17.5002 12.8332 16.0078 12.8332 14.1668C12.8332 12.3259 10.2215 10.8335 6.99984 10.8335C3.77818 10.8335 1.1665 12.3259 1.1665 14.1668C1.1665 16.0078 3.77818 17.5002 6.99984 17.5002Z"
                        stroke="#121212"
                        strokeWidth="1.5"
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
