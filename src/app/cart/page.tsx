import TopBar from "~/components/topBar";
// import topBar from "~/components/topBar";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
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
              <div className="icon-with-text before:transform: translate(-16px, 8px); relative flex items-center gap-2 before:absolute
               before:left-[-20px] before:top-[6px] before:h-[10px] before:h-[15px] before:w-[10px]
                before:w-[15px] before:rounded-full before:border-[1px] before:border-[3px] before:border-solid before:border-[#49AD91] before:content-['']">
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

        <div className="container mx-auto ">
        <div className="flex justify-around">
          <div className="checkout-cart lg:w-auto">
            <div
              className="border-border-200 flex w-4/5  border-opacity-75 pb-5 pt-6 text-sm"
              style={{ opacity: "1" }}
            >
              <div className="relative flex h-[173px] w-2/5 shrink-0 items-center 
              justify-center overflow-hidden bg-gray-100">
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
              <div className="relative px-2 w-full ">
                <h3 className="text-heading text-[18px] font-bold">
                  The Bed Time Story Part 2{" "}
                </h3>
                <p className="color-[#000000] text-[12px]">53CM x 6M</p>
                <div className="flex">
                  <p className="  my-2.5 text-lg font-semibold text-[#49AD91]">
                    $120.00
                  </p>
                  <div className="text-body my-2.5 ml-2 w-20 text-[#9e9e9e] pt-2 text-xs line-through">
                  ₹1630
                  </div>
                </div>
                <div className="badge">
                  <span className="inline-flex items-center rounded-lg text-[#49AD91] opacity-70 bg-[#baecde] px-2 py-1 text-xs font-medium text-green-700">
                    49% off
                  </span>
                </div>
                <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                  <div className="trash-icon pl-1 pt-2 ">
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
                    <span className="text-[#49AD91]">Save ₹139 with combo upgrade </span>
                  </p>
                  <p className="w-72 pt-1 text-xs text-[#7A7474]">
                    Lorem ipsum dolor sit amet consectetur. Est velit ac integer
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

              <div className="relative w-4/5 h-10 object-cover  mt-2  mb-14"  >
              {/* <Image className=" h-48 object-cover"
             src={bgrender} 
             alt="Flower and sky"/> */}
             <div  className=" h-20 object-cover opacity-10 " style={{
                background:"rgb(46,205,160)",
                
                background:"linear-gradient(0deg, rgba(46,205,160,1) 25%, rgba(255,255,255,1) 100%)"
                }} ></div>
              <div className="price-bar mt-4 flex justify-between  
              absolute left-0 top-0 p-4 w-full ">
                <div className="price-contain flex items-center">
                  <div className="first-price text-lg text-[#505050]">₹799</div>
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
              className="border-border-200 flex w-4/5  border-b-2    border-opacity-75 pb-5 pt-6 text-sm"
              style={{ opacity: "1" }}
            >
              <div className="relative flex h-[173px] w-2/5 shrink-0 items-center 
              justify-center overflow-hidden bg-gray-100">
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
              <div className="relative px-2 w-full ">
                <h3 className="text-heading text-[18px] font-bold">
                  The Bed Time Story Part 2{" "}
                </h3>
                <p className="color-[#000000] text-[12px]">53CM x 6M</p>
                <div className="flex">
                  <p className="  my-2.5 text-lg font-semibold text-[#49AD91]">
                    $120.00
                  </p>
                  <div className="text-body my-2.5 ml-2 w-20 text-[#9e9e9e] pt-1 text-xs line-through">
                  ₹1630
                  </div>
                </div>
                <div className="badge">
                  <span className="inline-flex items-center rounded-lg text-[#49AD91] opacity-70 bg-[#baecde] px-2 py-1 text-xs font-medium text-green-700">
                    49% off
                  </span>
                </div>
                <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                  <div className="trash-icon pl-1 pt-2 ">
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
              className="border-border-200 flex w-4/5  border-b-2    border-opacity-75 pb-5 pt-6 text-sm"
              style={{ opacity: "1" }}
            >
              <div className="relative flex h-[173px] w-2/5 shrink-0 items-center 
              justify-center overflow-hidden bg-gray-100">
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
              <div className="relative px-2 w-full ">
                <h3 className="text-heading text-[18px] font-bold">
                  The Bed Time Story Part 2{" "}
                </h3>
                <p className="color-[#000000] text-[12px]">53CM x 6M</p>
                <div className="flex">
                  <p className="  my-2.5 text-base font-semibold text-[#49AD91]">
                    $120.00
                  </p>
                  <div className="text-body my-2.5 ml-2 w-20 text-[#9e9e9e] pt-1 text-xs line-through">
                  ₹1630
                  </div>
                </div>
                <div className="badge">
                  <span className="inline-flex items-center rounded-lg text-[#49AD91] opacity-70 bg-[#baecde] px-2 py-1 text-xs font-medium text-green-700">
                    49% off
                  </span>
                </div>
                <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                  <div className="trash-icon pl-1 pt-2 ">
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

          <div className="mb-10 pt-3 sm:mb-12 md:p-4 md:pt-0 lg:mb-0 lg:w-auto lg:p-4
          overflow-hidden  relative">
            <div className="gift-wrapper mb-3 ">
            <Image className="w-full h-48 object-cover"
             src={objectsBg} 
             alt="Flower and sky"/>
             <div className="absolute left-0 top-0 p-8 w-full">
              <div className="flex w-full max-w-sm lg:max-w-full   " >
                <div
                  className="h-26 w-14 flex-none overflow-hidden rounded-t bg-cover pt-3 text-center md:h-28 lg:h-28 lg:h-auto lg:w-14 lg:rounded-l lg:rounded-t-none"
                  title="Woman holding a mug"
                >
                
                </div>
                <div
                  className="flex flex-col justify-between  rounded-b p-2 leading-normal lg:rounded-b-none"
                  style={{ width: "100%" }}
                >
                  <div className="mb-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex pb-2 pt-2">
                        <span className="icon pr-2">
                        
                          
                          <Image src={gift}  className="w-4 pt-1" alt="" />
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
              <div className="offer-bar mb-2 flex justify-center">
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
                    <div className="offer-text text-[#FF4C7B] flex justify-center  align-middle
                     text-[12px]">
                      <span>
                        <Offer></Offer>
                      </span>
                      OFFERS
                    </div>
                  </div>
                  <div
                    className="box-2 basis-40 bg-white text-[12px]"
                    style={{
                      border: "1px solid pink",
                      flexBasis: "100%",
                      paddingInline: "10px",
                      paddingBlock: "10px",
                    }}
                  >
                    <div className="text-center">Apply coupon or tap to explore more offers</div>
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

                      <Image    src={coins} className="w-4" alt="" /> 
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
                        <span className="text-[14px] pl-3 text-[#49AD91]">
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
                  className="focus:ring-accent-700 text-light hover:bg-accent-hover mt-5 
                  inline-flex h-12 w-full shrink-0 items-center justify-center rounded border
                   border-transparent bg-[#49AD91] text-accent   px-5 py-0 font-semibold leading-none outline-none
                    transition duration-300 ease-in-out focus:shadow focus:outline-0 focus:ring-1"
                >
                  Checkout 
                  <div className="ml-1 pl-3">

                  <RightArrow ></RightArrow>
                  </div>
                </button>
              </div>
            </div>
          </div>


        </div>
        </div>
      </div>

      <SectionBlock
       title="Your Last Minute Addons"
       subtitle=""
       className="pt-14 lg:container lg:m-auto"
       position="left"
      >
           

      </SectionBlock>
      <Footer></Footer>
    </main>
  );
}
