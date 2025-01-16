import React from "react";
import { CheckoutArrow } from "~/components/icons/CheckoutArrow";
import Image from "next/image";
import coins from "../../../../public/icons/coin.svg";

const PaymentTab = () => {
  return (
    <section>
      <div className="w-full">
        <div className="md:p-4d m-auto w-2/3 bg-white p-3 max-[568px]:w-full">
          <div className="rounded border">
            <div className="header bg-[#F0F7F2] p-2">
              <p className="flex items-center gap-2">
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
                <span className="text-[12px] text-[#7A7474]">
                  Yay! You have saved ₹799 on this order
                </span>
              </p>
            </div>
            <div className="bill-detail mx-3">
              <div className="border-border-200 flex flex-col border-b p-2 py-3">
                <h4 className="mt-3 font-medium">Bill Details</h4>
                <div className="mt-2 flex">
                  <Image src={coins || null} className="w-4" alt="" />
                  <p className="ml-2 text-[8px] text-base text-[#7A7474]">
                    Total Wol Cash
                  </p>
                </div>
              </div>
            </div>
            <div className="border-border-200 mx-3 border-b p-2 py-3">
              <ul>
                <li className="text-body mb-2 flex justify-between text-[14px]">
                  <div>Total MRP</div>
                  <div className="font-medium text-[#000000]">₹799</div>
                </li>
                <li className="text-body mb-2 flex justify-between text-[14px]">
                  <div>Cart Discount</div>
                  <div className="font-medium text-[#000000]">-₹155</div>
                </li>
                <li className="text-body flex justify-between text-[14px]">
                  <div>Shipping Charges</div>
                  <div className="font-medium text-[#000000]">
                    ₹50 <span className="text-[14px] text-[#49AD91]">FREE</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="subtotal mx-3 mt-2 pb-3">
              <h4 className="flex items-center justify-between font-medium">
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
              className="focus:ring-accent-700 hover:bg-accent-hover mt-5 inline-flex h-12 w-full shrink-0 items-center justify-center rounded border border-transparent bg-[#49AD91] px-5 py-0 font-semibold leading-none text-white outline-none transition duration-300 ease-in-out focus:shadow focus:outline-0 focus:ring-1"
            >
              Checkout
              <CheckoutArrow></CheckoutArrow>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTab;
