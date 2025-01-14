import TopBar from "~/components/topBar";
// import topBar from "~/components/topBar";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { CheckoutArrow } from "~/components/icons/CheckoutArrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Cart } from "~/components/icons/Cart";
import { ShopingCart } from "~/components/icons/ShopingCart";
import { Payment } from "~/components/icons/Payment";
import { Shipping } from "~/components/icons/Shipping";
import { RightArrow } from "~/components/icons/RightArrow";
import { Offer } from "~/components/icons/Offer";
import { Yay } from "~/components/icons/Yay";
import { Minus } from "~/components/icons/Minus";
import { Plus } from "~/components/icons/Plus";
import Image from "next/image";
import coins from "../../../public/icons/coin.svg";
import gift from "../../../public/icons/gift.svg";
import objectsBg from "../../../public/objects.png";
import bgrender from "../../../public/bgrender.png";
import { Gift } from "~/components/icons/Gift";
import SectionBlock from "~/components/ui/section-block";

export default function page() {
  return (
    <main className="">
      <TopBar time={{ hours: 0, minutes: 7, seconds: 27 }}></TopBar>
      <Navbar></Navbar>
      <div className="">
        <div
          className="start-0 top-0 flex w-full items-center justify-center space-x-8 bg-[#F1FBFF] px-6 py-4"
          role="tablist"
          aria-orientation="horizontal"
        >
          <div
            id="headlessui-tabs-tab-:rp:"
            role="tab"
            aria-selected="true"
            tabIndex="0"
            data-headlessui-state="selected"
            aria-controls="headlessui-tabs-panel-:rv:"
          >
            <button className="custom-tab text-[#000000]-600 active relative flex items-center space-x-2 max-[568px]:text-[14px]">
              <div className="icon-with-text before:transform: translate(-16px, 8px); relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:h-[15px] before:w-[10px] before:w-[15px] before:rounded-full before:border-[1px] before:border-[3px] before:border-solid before:border-[#49AD91] before:content-['']">
                <ShopingCart></ShopingCart>

                <span>Cart</span>
              </div>
            </button>
          </div>
          <div
            id="headlessui-tabs-tab-:rr:"
            role="tab"
            aria-selected="false"
            tabIndex="-1"
            data-headlessui-state=""
            aria-controls="headlessui-tabs-panel-:r11:"
          >
            <button className="custom-tab middle-tab relative flex items-center justify-center space-x-2 text-gray-400 before:absolute before:start-0 before:w-[5rem] before:border before:border-dashed before:border-[#49AD91] before:content-[''] after:absolute after:end-0 after:w-[5rem] after:border after:border-dashed after:border-[#49AD91] after:content-[''] max-[568px]:w-[8rem] max-[568px]:text-[14px] max-[568px]:before:content-[none] max-[568px]:after:content-[none] min-[568px]:w-[20rem] md:w-[30rem] before:md:w-[30%] after:md:w-[30%] lg:w-[40rem] before:lg:w-[38%] after:lg:w-[38%]">
              <div className="icon-with-text before:transform: translate(-16px, 8px); false relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:w-[10px] before:rounded-full before:border-[1px] before:border-solid before:border-[#49AD91] before:content-['']">
                <Shipping></Shipping>
                <span>Shipping</span>
              </div>
            </button>
          </div>
          <div
            id="headlessui-tabs-tab-:rt:"
            role="tab"
            aria-selected="false"
            tabIndex="-1"
            data-headlessui-state=""
            aria-controls="headlessui-tabs-panel-:r13:"
          >
            <button className="custom-tab flex items-center space-x-2 text-gray-400 max-[568px]:text-[14px]">
              <div className="icon-with-text before:transform: translate(-16px, 8px); false relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:w-[10px] before:rounded-full before:border-[1px] before:border-solid before:border-[#49AD91] before:content-['']">
                <Payment></Payment>

                <span>Payment</span>
              </div>
            </button>
          </div>
        </div>
               <div className="test m-auto w-2/3 bg-white p-3 max-[568px]:w-full md:p-4">
        <div className="container w-full mx-auto px-5">
          <div className="flex flex-col justify-around md:flex-row">
            <div className="checkout-cart lg:w-auto">
              <div
                className="border-border-200 flex w-4/5 border-opacity-75 pb-5 pt-6 text-sm"
                style={{ opacity: "1" }}
              >
                <div className="relative flex h-[173px] w-2/5 shrink-0 items-center justify-center overflow-hidden bg-gray-100">
                  <image
                    alt="The Bed Time Story Part 2"
                    className="object-contain"
                    src="https://placehold.co/600x400.png"

                    // objectFit="contain"
                    // Maintain the aspect ratio
                    // alt="The Bed Time Story Part 2"

                    // className="object-contain"
                    // // sizes="(max-width: 768px) 100vw"

                    // style={{
                    //   position: "absolute",
                    //   height: "100%",
                    //   width: "100%",
                    //   inset: "0px",
                    //   color: "transparent",
                    // }}
                  />
                </div>
                <div className="relative w-full px-2">
                  <h3 className="text-heading text-[18px] font-bold">
                    The Bed Time Story Part 2{" "}
                  </h3>
                  <p className="color-[#000000] text-[12px]">53CM x 6M</p>
                  <div className="flex">
                    <p className="my-2.5 text-lg font-semibold text-[#49AD91]">
                      $120.00
                    </p>
                    <div className="text-body my-2.5 ml-2 w-20 pt-2 text-xs text-[#9e9e9e] line-through">
                      ₹1630
                    </div>
                  </div>
                  <div className="badge">
                    <span className="inline-flex items-center rounded-lg bg-[#baecde] px-2 py-1 text-xs font-medium text-[#49AD91] text-green-700 opacity-70">
                      49% off
                    </span>
                  </div>
                  <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                    <div className="trash-icon pl-1 pt-2">
                      <img src="../../../public/img/trash1.png" alt="" />
                    </div>
                    <div className="flex w-full justify-between align-middle">
                      <div className="icon">
                        <Cart></Cart>
                      </div>

                      <div className="flex rounded border border-[#49AD91]">
                        <button className="hover:bg-accent-hover flex w-[35px] cursor-pointer items-center justify-center rounded p-2 text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0">
                          <span className="sr-only">minus</span>
                          <Minus></Minus>
                        </button>
                        <div className="flex w-[35px] flex-1 items-center justify-center bg-[#49AD91] px-0 px-3 text-sm font-semibold text-[#fff]">
                          68
                        </div>
                        <button
                          className="hover:bg-accent-hover flex w-[35px] cursor-pointer items-center justify-center rounded p-2 text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                          title=""
                        >
                          <span className="sr-only">plus</span>
                          <Plus></Plus>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="save-content md:p-0">
                <div className="flex">
                  <div className="text-content">
                    <p className="flex items-center gap-2">
                      <span className="icon">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.90034 0.754047C7.23451 0.560137 7.61399 0.458008 8.00034 0.458008C8.38669 0.458008 8.76618 0.560137 9.10034 0.754047L9.10117 0.75488L14.6103 3.92155C14.9448 4.11604 15.2224 4.395 15.4151 4.73051C15.6079 5.06601 15.7091 5.44628 15.7087 5.83321V12.169C15.7079 12.5554 15.6061 12.9348 15.4134 13.2697C15.2208 13.6046 14.9439 13.8833 14.6103 14.0782L14.6078 14.0799L9.10117 17.2457H9.09951C8.76544 17.4395 8.38611 17.5415 7.99992 17.5415C7.61374 17.5415 7.23441 17.4395 6.90034 17.2457H6.89951L1.39284 14.079H1.39034C1.05514 13.8851 0.777068 13.6062 0.584215 13.2704C0.391362 12.9346 0.290564 12.5538 0.292007 12.1665V5.83155C0.29283 5.4452 0.394614 5.06578 0.587271 4.73089C0.779928 4.39601 1.05677 4.1173 1.39034 3.92238L1.39284 3.92071L6.90034 0.754047ZM6.35867 6.47488C6.30146 6.41347 6.23246 6.36422 6.15579 6.33006C6.07912 6.2959 5.99636 6.27753 5.91244 6.27605C5.82852 6.27457 5.74517 6.29001 5.66734 6.32144C5.58952 6.35288 5.51883 6.39967 5.45948 6.45901C5.40013 6.51836 5.35334 6.58906 5.32191 6.66688C5.29047 6.74471 5.27503 6.82806 5.27651 6.91198C5.278 6.9959 5.29636 7.07866 5.33052 7.15533C5.36468 7.23199 5.41394 7.30099 5.47534 7.35821L5.76951 7.65321C5.82673 7.71462 5.89573 7.76387 5.97239 7.79803C6.04906 7.83219 6.13182 7.85056 6.21574 7.85204C6.29966 7.85352 6.38302 7.83808 6.46084 7.80665C6.53866 7.77521 6.60936 7.72843 6.66871 7.66908C6.72806 7.60973 6.77484 7.53903 6.80628 7.46121C6.83771 7.38339 6.85315 7.30003 6.85167 7.21611C6.85019 7.13219 6.83182 7.04943 6.79766 6.97276C6.7635 6.8961 6.71425 6.8271 6.65284 6.76988L6.35867 6.47488ZM9.35034 10.3499C9.2333 10.4671 9.16756 10.6259 9.16756 10.7915C9.16756 10.9572 9.2333 11.116 9.35034 11.2332L9.64451 11.5282C9.76299 11.6386 9.91969 11.6987 10.0816 11.6959C10.2435 11.693 10.398 11.6274 10.5125 11.5129C10.627 11.3984 10.6926 11.2439 10.6955 11.082C10.6983 10.9201 10.6382 10.7634 10.5278 10.6449L10.2337 10.3499C10.1165 10.2328 9.95763 10.1671 9.79201 10.1671C9.62638 10.1671 9.46753 10.2328 9.35034 10.3499ZM10.5253 7.35821C10.5867 7.30099 10.636 7.23199 10.6702 7.15533C10.7043 7.07866 10.7227 6.9959 10.7242 6.91198C10.7256 6.82806 10.7102 6.74471 10.6788 6.66688C10.6473 6.58906 10.6006 6.51836 10.5412 6.45901C10.4819 6.39967 10.4112 6.35288 10.3333 6.32144C10.2555 6.29001 10.1722 6.27457 10.0882 6.27605C10.0043 6.27753 9.92156 6.2959 9.84489 6.33006C9.76823 6.36422 9.69923 6.41347 9.64201 6.47488L5.47534 10.6415C5.41394 10.6988 5.36468 10.7678 5.33052 10.8444C5.29636 10.9211 5.278 11.0039 5.27651 11.0878C5.27503 11.1717 5.29047 11.2551 5.32191 11.3329C5.35334 11.4107 5.40013 11.4814 5.45948 11.5407C5.51883 11.6001 5.58952 11.6469 5.66734 11.6783C5.74517 11.7097 5.82852 11.7252 5.91244 11.7237C5.99636 11.7222 6.07912 11.7039 6.15579 11.6697C6.23246 11.6355 6.30146 11.5863 6.35867 11.5249L10.5253 7.35821Z"
                            fill="#49AD91"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-[#49AD91]">
                        Save ₹139 with combo upgrade{" "}
                      </span>
                    </p>
                    <p className="w-72 pt-1 text-xs text-[#7A7474]">
                      Lorem ipsum dolor sit amet consectetur. Est velit ac
                      integer
                    </p>
                  </div>
                  <div className="img-contain h-18 flex items-center justify-center">
                    <div className="media-contain">
                      <Image
                        alt="The Bed Time Story Part 2"
                        className="object-contain"
                        // src="https://placehold.co/600x400.png"
                      />
                    </div>
                    <div className="m-1 font-black">+</div>
                    <div className="media-contain">
                      <Image
                        alt="The Bed Time Story Part 2"
                        className="object-contain"
                        // src="https://placehold.co/600x400.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mb-14 mt-2 h-10 w-4/5 object-cover">
                  {/* <Image className=" h-48 object-cover"
             src={bgrender} 
             alt="Flower and sky"/> */}
                  <div
                    className="h-20 object-cover opacity-10"
                    style={{
                      background: "rgb(46,205,160)",

                      background:
                        "linear-gradient(0deg, rgba(46,205,160,1) 25%, rgba(255,255,255,1) 100%)",
                    }}
                  ></div>
                  <div className="price-bar absolute left-0 top-0 mt-4 flex w-full justify-between p-4">
                    <div className="price-contain flex items-center">
                      <div className="first-price text-lg text-[#505050]">
                        ₹799
                      </div>
                      <div className="second-price ml-2 text-sm text-[#BAB8B8]">
                        ₹1630
                      </div>
                      <div className="third-price ml-2 text-sm text-[#49AD91]">
                        Save ₹799
                      </div>
                    </div>
                    <div className="btn rounded bg-[#49AD91] px-4 py-1 text-sm font-normal text-white hover:bg-[#49AD91]">
                      UPGRADE
                    </div>
                  </div>
                </div>

                <div
                  className="border-border-200 flex w-4/5 border-b-2 border-opacity-75 pb-5 pt-6 text-sm"
                  style={{ opacity: "1" }}
                >
                  <div className="relative flex h-[173px] w-2/5 shrink-0 items-center justify-center overflow-hidden bg-gray-100">
                    <image
                      alt="The Bed Time Story Part 2"
                      className="object-contain"
                      src="https://placehold.co/600x400.png"

                      // objectFit="contain"
                      // Maintain the aspect ratio
                      // alt="The Bed Time Story Part 2"

                      // className="object-contain"
                      // // sizes="(max-width: 768px) 100vw"

                      // style={{
                      //   position: "absolute",
                      //   height: "100%",
                      //   width: "100%",
                      //   inset: "0px",
                      //   color: "transparent",
                      // }}
                    />
                  </div>
                  <div className="relative w-full px-2">
                    <h3 className="text-heading text-[18px] font-bold">
                      The Bed Time Story Part 2{" "}
                    </h3>
                    <p className="color-[#000000] text-[12px]">53CM x 6M</p>
                    <div className="flex">
                      <p className="my-2.5 text-lg font-semibold text-[#49AD91]">
                        $120.00
                      </p>
                      <div className="text-body my-2.5 ml-2 w-20 pt-1 text-xs text-[#9e9e9e] line-through">
                        ₹1630
                      </div>
                    </div>
                    <div className="badge">
                      <span className="inline-flex items-center rounded-lg bg-[#baecde] px-2 py-1 text-xs font-medium text-[#49AD91] text-green-700 opacity-70">
                        49% off
                      </span>
                    </div>
                    <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                      <div className="trash-icon pl-1 pt-2">
                        <img src="../../../public/img/trash1.png" alt="" />
                      </div>
                      <div className="flex w-full justify-between align-middle">
                        <div className="icon">
                          <Cart></Cart>
                        </div>

                        <div className="flex rounded border border-[#49AD91]">
                          <button className="hover:bg-accent-hover flex w-[35px] cursor-pointer items-center justify-center rounded p-2 text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0">
                            <span className="sr-only">minus</span>
                            <Minus></Minus>
                          </button>
                          <div className="flex w-[35px] flex-1 items-center justify-center bg-[#49AD91] px-0 px-3 text-sm font-semibold text-[#fff]">
                            68
                          </div>
                          <button
                            className="hover:bg-accent-hover flex w-[35px] cursor-pointer items-center justify-center rounded p-2 text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                            title=""
                          >
                            <span className="sr-only">plus</span>
                            <Plus></Plus>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="border-border-200 flex w-4/5 border-b-2 border-opacity-75 pb-5 pt-6 text-sm"
                  style={{ opacity: "1" }}
                >
                  <div className="relative flex h-[173px] w-2/5 shrink-0 items-center justify-center overflow-hidden bg-gray-100">
                    <image
                      alt="The Bed Time Story Part 2"
                      className="object-contain"
                      src="https://placehold.co/600x400.png"

                      // objectFit="contain"
                      // Maintain the aspect ratio
                      // alt="The Bed Time Story Part 2"

                      // className="object-contain"
                      // // sizes="(max-width: 768px) 100vw"

                      // style={{
                      //   position: "absolute",
                      //   height: "100%",
                      //   width: "100%",
                      //   inset: "0px",
                      //   color: "transparent",
                      // }}
                    />
                  </div>
                  <div className="relative w-full px-2">
                    <h3 className="text-heading text-[18px] font-bold">
                      The Bed Time Story Part 2{" "}
                    </h3>
                    <p className="color-[#000000] text-[12px]">53CM x 6M</p>
                    <div className="flex">
                      <p className="my-2.5 text-base font-semibold text-[#49AD91]">
                        $120.00
                      </p>
                      <div className="text-body my-2.5 ml-2 w-20 pt-1 text-xs text-[#9e9e9e] line-through">
                        ₹1630
                      </div>
                    </div>
                    <div className="badge">
                      <span className="inline-flex items-center rounded-lg bg-[#baecde] px-2 py-1 text-xs font-medium text-[#49AD91] text-green-700 opacity-70">
                        49% off
                      </span>
                    </div>
                    <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                      <div className="trash-icon pl-1 pt-2">
                        <img src="../../../public/img/trash1.png" alt="" />
                      </div>
                      <div className="flex w-full justify-between align-middle">
                        <div className="icon">
                          <Cart></Cart>
                        </div>

                        <div className="flex rounded border border-[#49AD91]">
                          <button className="hover:bg-accent-hover flex w-[35px] cursor-pointer items-center justify-center rounded p-2 text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0">
                            <span className="sr-only">minus</span>
                            <Minus></Minus>
                          </button>
                          <div className="flex w-[35px] flex-1 items-center justify-center bg-[#49AD91] px-0 px-3 text-sm font-semibold text-[#fff]">
                            68
                          </div>
                          <button
                            className="hover:bg-accent-hover flex w-[35px] cursor-pointer items-center justify-center rounded p-2 text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                            title=""
                          >
                            <span className="sr-only">plus</span>
                            <Plus></Plus>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mb-10 overflow-hidden pt-3 sm:mb-12 md:p-4 md:pt-0 lg:mb-0 lg:w-auto lg:p-4">
              <div className="gift-wrapper mb-3">
                <Image
                  className="h-48 w-full object-cover"
                  src={objectsBg}
                  alt="Flower and sky"
                />
                <div className="absolute left-0 top-0 w-full p-3 lg:p-8">
                  <div className="flex w-full max-w-sm lg:max-w-full">
                    <div
                      className="h-26 w-14 flex-none overflow-hidden rounded-t bg-cover pt-3 text-center md:h-28 lg:h-28 lg:h-auto lg:w-14 lg:rounded-l lg:rounded-t-none"
                      title="Woman holding a mug"
                    ></div>
                    <div
                      className="flex flex-col justify-between rounded-b p-2 leading-normal lg:rounded-b-none"
                      style={{ width: "100%" }}
                    >
                      <div className="mb-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex pb-2 pt-2">
                            <span className="icon pr-2">
                              <Image src={gift} className="w-4 pt-1" alt="" />
                            </span>
                            <span className="text-[12px] text-xl font-bold">
                              Free Gift Set{" "}
                            </span>
                          </div>
                          <a
                            className="text-black-950 text-[12px] text-[#7A7474] underline"
                            href=""
                          >
                            Tap to Apply
                          </a>
                        </div>
                        <p className="font-poppins w-60 text-[12px] text-sm text-[#7A7474]">
                          Enjoy your ultimate wallpaper tool set worth ₹799
                        </p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="offer-bar relative mb-2 flex justify-center overflow-hidden">
                    <div
                      className="w-full"
                      style={{
                        display: "flex",
                        margin: "auto",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="box-1 basis-20 bg-white"
                        style={{
                          border: "1px solid pink",
                          paddingInline: "10px",
                          paddingBlock: "10px",
                        }}
                      >
                        <div className="offer-text flex justify-center align-middle text-[12px] text-[#FF4C7B]">
                          <span>
                            <Offer></Offer>
                          </span>
                          OFFERS
                        </div>
                      </div>
                      <div
                        className="box-4"
                        style={{
                          background: "#FFF3F6",
                          borderRadius: "50%",
                          width: "12px",
                          height: "12px",
                          position: "absolute",
                          left: "80px",
                          zIndex: 999,
                          border: "1px solid #FF4C7B",
                          top: "-4px",
                        }}
                      ></div>
                      <div
                        className="box-3"
                        style={{
                          background: "#FFF3F6",
                          borderRadius: "50%",
                          width: "12px",
                          height: "12px",
                          position: "absolute",
                          left: "80px",
                          zIndex: 999,
                          border: "1px solid #FF4C7B",
                          bottom: "-4px",
                        }}
                      ></div>
                      <div
                        className="box-2 basis-40 bg-white text-[12px]"
                        style={{
                          border: "1px solid pink",
                          flexBasis: "100%",
                          paddingInline: "10px",
                          paddingBlock: "10px",
                        }}
                      >
                        <div className="text-center " style={{fontSize:"9px"}}>
                          Apply coupon or tap to explore more offers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="rounded border">
                  <div className="header bg-[#F0F7F2] p-2">
                    <p className="flex items-center gap-2">
                      <span className="icon">
                        <Yay></Yay>
                      </span>
                      <span className="text-[12px] text-[#749362]">
                        Yay! You have saved ₹799 on this order
                      </span>
                    </p>
                  </div>
                  <div className="bill-detail mx-3">
                    <div className="border-border-200 flex flex-col border-b p-2 py-3">
                      <h4 className="mt-3 font-medium">Bill Details</h4>
                      <div className="mt-2 flex">
                        {/* <img src="assets/img/coin.svg" className="w-4" alt="" /> */}

                        <Image src={coins} className="w-4" alt="" />
                        <p className="ml-2 text-[8px] text-base text-[#7A7474]">
                          Total Wol Cash
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-border-200 mx-3 border-b p-2 py-3">
                    <ul>
                      <li className="text-body mb-2 flex justify-between text-[14px]">
                        <div className="text-[#7A7474]">Total MRP</div>
                        <div className="font-medium text-[#000000]">₹799</div>
                      </li>
                      <li className="text-body mb-2 flex justify-between text-[14px]">
                        <div className="text-[#7A7474]">Cart Discount</div>
                        <div className="font-medium text-[#000000]">-₹155</div>
                      </li>
                      <li className="text-body flex justify-between text-[14px]">
                        <div className="text-[#7A7474]">Shipping Charges</div>
                        <div className="font-medium text-[#000000]">
                          ₹50
                          <span className="pl-3 text-[14px] text-[#49AD91]">
                            FREE
                          </span>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="subtotal mx-3 mt-2 pb-3 pl-2 pr-2">
                    <h4 className="flex items-center justify-between font-medium">
                      <span>Sub Total</span>
                      <span>$8,160.00</span>
                    </h4>
                    <p className="text-body text-[14px] text-[#7A7474]">
                      You can send a gift note on the next step
                    </p>
                  </div>
                </div>
                <div className="">
                  <button
                    data-variant="normal"
                    className="focus:ring-accent-700 text-light hover:bg-accent-hover mt-5 inline-flex h-12 w-full shrink-0 items-center justify-center rounded border border-transparent bg-[#49AD91] px-5 py-0 font-semibold leading-none text-accent outline-none transition duration-300 ease-in-out focus:shadow focus:outline-0 focus:ring-1"
                  >
                    Checkout
                    <div className="ml-1 pl-3">
                      <RightArrow></RightArrow>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <SectionBlock
        title="Your Last Minute Addons"
        subtitle=""
        className="px-5 pt-14 lg:container lg:m-auto"
        position="left"
      ></SectionBlock>

      <section>
        <div className="m-auto w-2/3 bg-white p-3 max-[568px]:w-full md:p-4">
          <h5 className="text-center text-[18px] font-semibold text-gray-800">
            ADD ADDRESS
          </h5>
          <hr className="my-4 border-t-2 border-gray-200" />

          <h5 className="mb-4 text-[18px] font-semibold">Contact Details</h5>

          <div className="mb-4">
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Name *"
            />
          </div>

          <div className="react-tel-input mb-4">
            <div className="special-label text-gray-700">Phone</div>
            <input
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="1 (702) 123-4567"
              disabled=""
              type="tel"
              value="+1"
            />
          </div>

          <h5 className="mb-4 text-[18px] font-semibold text-gray-800">
            Address
          </h5>

          <div className="mb-4">
            <input
              id="pincode"
              name="pincode"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Pincode *"
            />
          </div>

          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <input
                id="mobile1"
                name="mobile1"
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Mobile Number *"
              />
            </div>
            <div className="flex-1">
              <input
                id="mobile2"
                name="mobile2"
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Mobile Number *"
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              id="address"
              name="address"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Address *"
            />
          </div>

          <div className="mb-4">
            <input
              id="locality"
              name="locality"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Locality *"
            />
          </div>

          <div className="mb-4">
            <input
              id="landmark"
              name="landmark"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Landmark (optional)"
            />
          </div>

          <h5 className="mb-4 text-[18px] font-semibold text-gray-800">
            Delivery Preference
          </h5>

          
       


    <div className="w-full mb-5 mx-auto">
      <fieldset className="space-y-6">
       
        <div className="flex gap-6">
      

         
               <div className="flex-1">

               
          <label
            htmlFor="plan-business"
            className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
          >
            <h4 className="font-semibold text-gray-800">Home</h4>
              <p className="text-[12px] text-[#7A7474]">
                9 AM to 9 PM Delivery
              </p>
            <input
              type="radio"
              name="plan"
              id="plan-business"
              value="business"
              className="absolute h-0 w-0 appearance-none"
            />
            <span
              aria-hidden="true"
              className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
            >
              <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </label>
          </div>
          <div className="flex-1">
          <label
            htmlFor="plan-enterprise"
            className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
          >
                <h4 className="font-semibold text-gray-800">Work</h4>
                <p className="text-[12px] text-[#7A7474]">9 AM to 5 PM</p>
            <input
              type="radio"
              name="plan"
              id="plan-enterprise"
              value="enterprise"
              className="absolute h-0 w-0 appearance-none"
            />
            <span
              aria-hidden="true"
              className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
            >
              <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </label>
          </div>
        </div>
      </fieldset>
    </div>





          <button className="hover:bg-accent-hover focus:ring-accent-700 
          inline-flex w-full items-center justify-center rounded-lg border border-transparent
           bg-[#49AD91]  px-5 py-2 font-semibold text-white focus:ring-2">
            ADD ADDRESS
          </button>

          <a
            href="/checkout"
            className="font-regular hover:text-accent-hover mt-4 block text-center
             text-[#49AD91]  transition-colors duration-200"
          >
            Cancel to go back
          </a>
        </div>
      </section>
           
<section>

    <div className="w-full">
      <div className="m-auto w-2/3 bg-white p-3 max-[568px]:w-full md:p-4d">
      <div className="border rounded">
        <div className="header bg-[#F0F7F2] p-2">
          <p className="flex gap-2 items-center">
            <span className="icon">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.45469 1.66625C8.77215 1.48203 9.13266 1.38501 9.49969 1.38501C9.86672 1.38501 10.2272 1.48203 10.5447 1.66625L10.5455 1.66704L15.7792 4.67537C16.097 4.86014 16.3606 5.12516 16.5437 5.44389C16.7269 5.76261 16.823 6.12386 16.8226 6.49145V12.5105C16.8218 12.8775 16.7251 13.238 16.5421 13.5561C16.3591 13.8743 16.0961 14.139 15.7792 14.3242L15.7768 14.3258L10.5455 17.3333H10.5439C10.2265 17.5174 9.86617 17.6143 9.49929 17.6143C9.13242 17.6143 8.77205 17.5174 8.45469 17.3333H8.4539L3.22256 14.325H3.22019C2.90175 14.1408 2.63758 13.8758 2.45437 13.5567C2.27116 13.2377 2.1754 12.876 2.17677 12.5081V6.48987C2.17755 6.12284 2.27425 5.76239 2.45727 5.44425C2.6403 5.12611 2.90329 4.86133 3.22019 4.67616L3.22256 4.67458L8.45469 1.66625ZM7.94011 7.10104C7.88575 7.0427 7.8202 6.99591 7.74736 6.96346C7.67453 6.93101 7.59591 6.91356 7.51619 6.91215C7.43646 6.91075 7.35727 6.92541 7.28334 6.95527C7.20941 6.98514 7.14225 7.02958 7.08587 7.08597C7.02949 7.14235 6.98504 7.20951 6.95517 7.28344C6.92531 7.35737 6.91065 7.43656 6.91205 7.51628C6.91346 7.59601 6.93091 7.67463 6.96336 7.74746C6.99581 7.8203 7.0426 7.88585 7.10094 7.9402L7.3804 8.22045C7.43475 8.27879 7.5003 8.32558 7.57314 8.35803C7.64597 8.39048 7.72459 8.40793 7.80432 8.40934C7.88404 8.41075 7.96323 8.39608 8.03716 8.36622C8.11109 8.33636 8.17825 8.29191 8.23464 8.23553C8.29102 8.17914 8.33546 8.11199 8.36533 8.03805C8.39519 7.96412 8.40986 7.88493 8.40845 7.80521C8.40704 7.72548 8.38959 7.64686 8.35714 7.57403C8.32469 7.5012 8.2779 7.43565 8.21956 7.38129L7.94011 7.10104ZM10.7822 10.7823C10.671 10.8936 10.6085 11.0445 10.6085 11.2019C10.6085 11.3592 10.671 11.5101 10.7822 11.6215L11.0616 11.9017C11.1742 12.0066 11.3231 12.0637 11.4769 12.061C11.6307 12.0583 11.7775 11.9959 11.8863 11.8872C11.995 11.7784 12.0574 11.6316 12.0601 11.4778C12.0628 11.324 12.0057 11.1751 11.9008 11.0625L11.6214 10.7823C11.51 10.6711 11.3591 10.6086 11.2018 10.6086C11.0444 10.6086 10.8935 10.6711 10.7822 10.7823ZM11.8984 7.9402C11.9568 7.88585 12.0036 7.8203 12.036 7.74746C12.0685 7.67463 12.0859 7.59601 12.0873 7.51628C12.0887 7.43656 12.0741 7.35737 12.0442 7.28344C12.0143 7.20951 11.9699 7.14235 11.9135 7.08597C11.8571 7.02958 11.79 6.98514 11.716 6.95527C11.6421 6.92541 11.5629 6.91075 11.4832 6.91215C11.4035 6.91356 11.3248 6.93101 11.252 6.96346C11.1792 6.99591 11.1136 7.0427 11.0593 7.10104L7.10094 11.0594C7.0426 11.1137 6.99581 11.1793 6.96336 11.2521C6.93091 11.3249 6.91346 11.4036 6.91205 11.4833C6.91065 11.563 6.92531 11.6422 6.95517 11.7161C6.98504 11.7901 7.02949 11.8572 7.08587 11.9136C7.14225 11.97 7.20941 12.0144 7.28334 12.0443C7.35727 12.0742 7.43646 12.0888 7.51619 12.0874C7.59591 12.086 7.67453 12.0686 7.74736 12.0361C7.8202 12.0037 7.88575 11.9569 7.94011 11.8985L11.8984 7.9402Z"
                  fill="#749362"
                ></path>
              </svg>
            </span>
            <span className="text-[#7A7474] text-[12px]">
              Yay! You have saved ₹799 on this order
            </span>
          </p>
        </div>
        <div className="bill-detail mx-3">
          <div className="flex flex-col border-b border-border-200 py-3 p-2">
            <h4 className="font-medium mt-3">Bill Details</h4>
            <div className="flex mt-2">
            <Image src={coins} className="w-4" alt="" />
              <p className="text-base text-[#7A7474] ml-2 text-[8px]">
                Total Wol Cash
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-border-200 py-3 p-2 mx-3">
          <ul>
            <li className="text-body text-[14px] mb-2 flex justify-between">
              <div>Total MRP</div>
              <div className="text-[#000000] font-medium">₹799</div>
            </li>
            <li className="text-body text-[14px] mb-2 flex justify-between">
              <div>Cart Discount</div>
              <div className="text-[#000000] font-medium">-₹155</div>
            </li>
            <li className="text-body text-[14px] flex justify-between">
              <div>Shipping Charges</div>
              <div className="text-[#000000] font-medium">
                ₹50{" "}
                <span className="text-[14px] text-[#49AD91]">FREE</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="subtotal mx-3 mt-2 pb-3">
          <h4 className="font-medium flex justify-between items-center">
            <span>Sub Total</span>
            <span>$8,160.00</span>
          </h4>
          <p className="text-body text-[14px]">
            You can send a gift note on the next step
          </p>
        </div>
      </div>
      <div className="ml-3 mr-3 md:ml-2 md:mr-2">
        <button
          data-variant="normal"
          className="inline-flex items-center justify-center shrink-0
           font-semibold leading-none rounded outline-none transition duration-300 
           ease-in-out focus:outline-0 focus:shadow focus:ring-1
            focus:ring-accent-700 bg-[#49AD91] text-white border border-transparent
             hover:bg-accent-hover px-5 py-0 h-12 mt-5 w-full"
        >
          Checkout
         <CheckoutArrow></CheckoutArrow>
        </button>
      </div>
    </div>
    </div>


</section>
             


      <Footer></Footer>
    </main>
  );
}
