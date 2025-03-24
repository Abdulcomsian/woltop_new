"use client";

import React, { Suspense, useEffect } from "react";
import { CheckoutArrow } from "~/components/icons/CheckoutArrow";
import Image from "next/image";
import coins from "../../../public/icons/coin.svg";
import { useSelector } from "react-redux";
import installationIcon from "../../../public/installationIcon.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Link from "next/link";
import { WhatsApp } from "~/components/icons/WhatsApp";
import { CheckCircle } from "~/components/icons/CheckCircle";
import { useSearchParams } from "next/navigation";

// Force dynamic rendering
export const dynamic = "force-dynamic";

function ThankYouPageContent() {
  const searchParams = useSearchParams();

  const order_id = searchParams.get("order_id");
  const total_amount = searchParams.get("total_amount");
  const shipping_charges = searchParams.get("shipping_charges");
  const installation_charges = searchParams.get("installation_charges");
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phone_number");
  const address = searchParams.get("address");

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const cartData = useSelector((state: any) => state?.cart);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  const totalDiscount = useSelector((state: any) => state.cart.totalDiscount);
  const hasItems = cartData?.items?.length > 0;

  return (
    <section className="mb-5 w-full">
      <div className="m-auto bg-white md:w-3/6">
        <div className="flex flex-col items-center border-b-[1px] border-[#DBDBDB] py-5">
          <p className="text-[16px] font-semibold uppercase text-black">
            THANK YOU {name || "John Doe"}
          </p>
          <p className="text-xs text-black">
            Order ID: <span className="font-[600]">{order_id || "N/A"}</span>
          </p>
        </div>
        <div className="rounded px-3">
          <div className="orderStatus flex items-center gap-2 py-5">
            <CheckCircle />
            <div className="flex flex-col">
              <p className="text-[18px] font-medium text-black md:text-lg">
                Your order is confirmed
              </p>
              <p className="w-[70%] text-xs text-[#7A7474] md:text-base">
                Order will delivered to you in 2 -3 days on following address
              </p>
            </div>
          </div>
          <div className="deliveryAddress mb-5">
            <div className="mb-2 flex justify-between">
              <span className="text-base font-bold md:text-xl">
                Delivery Address
              </span>
            </div>
            <div className="rounded-md border p-3 text-[12px] md:text-base">
              <div className="contact border-b pb-2">
                <div className="mb-1 flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0939 11.6874C13.5977 11.1874 12.3958 10.4577 11.8127 10.1636C11.0533 9.78113 10.9908 9.74988 10.3939 10.1933C9.9958 10.4893 9.73112 10.7536 9.26518 10.6543C8.79924 10.5549 7.78674 9.99457 6.90018 9.11082C6.01362 8.22707 5.4208 7.18519 5.32112 6.72082C5.22143 6.25644 5.49018 5.99488 5.7833 5.59582C6.19643 5.03332 6.16518 4.93957 5.81205 4.18019C5.53674 3.58957 4.7858 2.39894 4.28393 1.90519C3.74705 1.37488 3.74705 1.46863 3.40112 1.61238C3.11948 1.73088 2.84929 1.87491 2.59393 2.04269C2.09393 2.37488 1.81643 2.65082 1.62237 3.0655C1.4283 3.48019 1.34112 4.45238 2.3433 6.273C3.34549 8.09363 4.04862 9.02457 5.50393 10.4758C6.95924 11.9271 8.0783 12.7074 9.71424 13.6249C11.738 14.7583 12.5142 14.5374 12.9302 14.3436C13.3461 14.1499 13.6233 13.8749 13.9561 13.3749C14.1243 13.1199 14.2687 12.8501 14.3874 12.5686C14.5314 12.2239 14.6252 12.2239 14.0939 11.6874Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <span className="font-medium text-black">Contact</span>
                </div>
                <div className="flex gap-2">
                  <span className="name font-medium text-[#0B0A0A]">
                    {name || "John Doe"}
                  </span>
                  <span>•</span>
                  <span className="text-[#7A7474]">
                    {phoneNumber || "+911 1234 30789"}
                  </span>
                </div>
              </div>
              <div className="address pt-2">
                <div className="mb-1 flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.5C5.51562 1.5 3.5 3.41844 3.5 5.78125C3.5 8.5 6.5 12.8084 7.60156 14.2966C7.64729 14.3594 7.70722 14.4105 7.77646 14.4457C7.84571 14.481 7.9223 14.4994 8 14.4994C8.0777 14.4994 8.15429 14.481 8.22354 14.4457C8.29278 14.4105 8.35271 14.3594 8.39844 14.2966C9.5 12.8091 12.5 8.50219 12.5 5.78125C12.5 3.41844 10.4844 1.5 8 1.5Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 7.5C8.82843 7.5 9.5 6.82843 9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium text-black">Ship To</span>
                </div>
                <span className="name text-[#7A7474]">
                  {address || "Lorem ipsum dolor sit amet diam in lacus"}
                </span>
              </div>
            </div>
          </div>
          {installation_charges !== null && (
            <div className="installation relative flex items-center rounded-md border bg-[#2ECDA01A] p-3 opacity-90">
              <input
                type="checkbox"
                className="absolute right-3 top-2 h-5 w-5 cursor-pointer"
                id="installationCheckbox"
              />
              <label
                htmlFor="installationCheckbox"
                className="absolute inset-0 right-1 hidden cursor-pointer"
              ></label>
              <div className="icon mr-2 h-14 w-24 md:h-28 md:w-28">
                <Image
                  src={installationIcon}
                  className="h-full w-full"
                  alt="Installation Icon"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-black md:text-base">
                  Installation Service Added
                </span>
                <span
                  className="text-[9px] text-[#7A7474] md:text-xs"
                  style={{ width: "95%" }}
                >
                  Installation will be done post-delivery. We'll contact you on
                  your mobile/WhatsApp to schedule it.
                </span>
              </div>
            </div>
          )}
          <Accordion
            type="single"
            collapsible
            className="accordian mt-5 w-full rounded-lg border p-2"
            style={{ paddingBottom: "0px" }}
            defaultValue={hasItems ? "item-1" : undefined}
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger
                className="mb-2 text-sm font-semibold md:text-lg"
                style={{ textDecoration: "none", padding: "0px" }}
              >
                {cartData?.items?.length} Item - ₹{totalPrice}
              </AccordionTrigger>
              <AccordionContent>
                <div className="checkout-cart grid grid-cols-1">
                  {cartData?.items?.map((item: any) => (
                    <div
                      key={`${item.id}-${item.variableId}`}
                      className={`border-border-200 flex w-full ${cartData?.items?.length > 1 && "border-b-2 pb-4"} border-opacity-75  text-sm`}
                      style={{ opacity: "1" }}
                    >
                      <div className="relative flex h-[102px] w-[71px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-gray-100 md:h-[179] md:w-1/4">
                        <img
                          alt={item.name}
                          className="h-full w-full object-cover"
                          src={
                            item?.featured_image ||
                            "https://placehold.co/600x400.png"
                          }
                        />
                      </div>
                      <div className="relative w-full px-2">
                        <h3 className="text-heading text-xs font-medium md:text-base">
                          {item.name}
                        </h3>
                        <p className="color-[#000000] text-[10px] md:text-[12px]">
                          Size: {item.variableName || "N/A"}
                        </p>{" "}
                        <div className="flex">
                          <p className="my-2.5 text-sm font-semibold text-[#49AD91] md:text-lg">
                            ₹{item.sale_price}
                          </p>
                          <div className="text-body my-2.5 ml-2 w-20 text-[10px] text-[#9e9e9e] line-through md:text-sm">
                            ₹{item.price}{" "}
                          </div>
                        </div>
                        <div className="inline rounded-[50px] bg-[#49AD911A] bg-opacity-10">
                          <span className="px-[7px] py-[2px] text-[10px] text-[#49AD91] md:text-xs">
                            {item.discount
                              ? `${item.discount}% off`
                              : "No Discount"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bill-detail px-3">
          <div className="border-border-200 flex flex-col mt-3">
            <h4 className="font-medium text-black">Bill Details</h4>
            {/* <div className="mt-2 flex">
              <Image src={coins || null} className="w-4" alt="" />
              <p className="ml-2 text-[8px] text-base text-[#7A7474]">
                Total Wol Cash <span className="font-semibold">₹0</span>
              </p>
            </div> */}
          </div>
          <div className="border-border-200 border-b py-3">
            <ul>
              <li className="text-body mb-2 flex justify-between text-[12px] text-[#7A7474] md:text-base">
                <div>Total MRP</div>
                <div className="font-medium text-[#000000]">₹{totalPrice}</div>
              </li>
              <li className="text-body mb-2 flex justify-between text-[12px] text-[#7A7474] md:text-base">
                <div>Cart Discount</div>
                <div className="font-medium text-[#000000]">
                  -₹{totalDiscount}
                </div>
              </li>
              <li className="text-body mb-2 flex justify-between text-[12px] text-[#7A7474] md:text-base">
                <div>Shipping Charges</div>
                <div className="font-medium text-[#000000]">
                  {shipping_charges == 0 ? (
                    <span className="ml-1 text-[12px] text-[#49AD91] md:text-base">
                      FREE
                    </span>
                  ) : (
                    <span>₹{shipping_charges || 0}</span>
                  )}
                </div>
              </li>
              <li className="text-body flex justify-between text-[12px] text-[#7A7474] md:text-base">
                <div>Installation Charges</div>
                <div className="font-medium text-[#000000]">
                  ₹{installation_charges || 0}
                </div>
              </li>
            </ul>
          </div>
          <div className="subtotal mt-2 border-b pb-3">
            <h4 className="flex items-center justify-between text-[#000000] font-medium">
              <span className="">Subtotal</span>
              <span>₹{total_amount || 0}</span>
            </h4>
          </div>
          <div className="py-3">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="text-xs font-medium md:text-base">
                For updates. reach out to us on this number
              </p>
              <div className="flex items-center gap-2">
                <WhatsApp />
                <span className="text-[#7A7474] text-xs">+91 123456789</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F0F7F2] py-3">
          <p className="flex items-center justify-center gap-2">
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
            <span className="text-[13px] text-[#749362]">
              Yay! You have saved <span className="font-semibold">₹{totalDiscount}</span> on this order
            </span>
          </p>
        </div>
        <Link
          href="/"
          data-variant="normal"
          className="focus:ring-accent-700 hover:bg-accent-hover m-3 flex h-12 shrink-0 items-center justify-center gap-[9px] rounded border border-transparent bg-[#49AD91] px-5 py-0 font-semibold leading-none text-white outline-none transition duration-300 ease-in-out focus:shadow focus:outline-0 focus:ring-1 md:m-0 md:mt-3"
        >
          <div className="flex items-center uppercase">
            <span>Continue Shopping</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouPageContent />
    </Suspense>
  );
}
