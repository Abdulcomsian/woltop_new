"use client";
import { useEffect, useState } from "react";
import footerLogo from "~/assets/img/footer-logo.svg";
import { SearchIcon } from "./icons/searchIcon";
import { FavriouteIcon } from "./icons/favriouteIcon";
import { useSelector } from "react-redux";
import Link from "next/link";
import LoginModal from "../components/LoginModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsLength = useSelector((state: any) => state.cart.items.length);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

  return (
    <>
      {/* <!-- navbar goes here --> */}
      <nav
        className="bg-[#FFFFFF] font-poppins"
        style={{ boxShadow: "0px 4px 4px 0px #0000001A" }}
      >
        <div className="mx-auto max-w-[1075px] px-3 py-[11px] md:py-[16px]">
          <div className="flex items-center justify-between">
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
                    <img
                      src={footerLogo.src || null}
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
            </div>
            {/* <!-- primary nav --> */}
            <div className="hidden items-center text-[18px] md:flex md:gap-2.5 lg:gap-10">
              <a href="#" className="text-[#000000] hover:text-gray-900">
                New Arrival
              </a>
              <a href="/about" className="text-[#000000] hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-[#000000] hover:text-gray-900">
                Tools
              </a>
              <a href="/careers" className="text-[#000000] hover:text-gray-900">
                Careers
              </a>
              <a href="/contact" className="text-[#000000] hover:text-gray-900">
                Contact
              </a>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="flex shrink-0 items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
              <Link
                href="/search"
                //  onClick={toggleSearch}
              >
                <SearchIcon />
              </Link>
              <Link href="/wishlist">
                <FavriouteIcon />
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
              <Link
                className=""
                href="#"
                onClick={() => setIsLoginModalOpen(true)}
              >
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
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}
        >
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            New Arrival
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
          >
            About
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
            Tools
          </a>
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
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
