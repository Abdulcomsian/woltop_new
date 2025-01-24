"use client";
import SectionBlock from "~/components/ui/section-block";
import PaymentTab from "../pages/shop/paymentTab";
import CartTab from "../pages/shop/cartTab";
import ShippingTab from "../pages/shop/shippingTab";
import { ShopingCart } from "~/components/icons/ShopingCart";
import { Payment } from "~/components/icons/Payment";
import { Shipping } from "~/components/icons/Shipping";
import { useState } from "react";
import { useSelector } from "react-redux";
import DetailCard from "../pages/shop/detailCard";

export default function page() {
  const [activeTab, setActiveTab] = useState("cart");
  const cartData = useSelector((state: any) => state?.cart);

  return (
    <>
      <div className="bg-[#F1FBFF]">
        <div
          className="flex w-full items-center justify-between px-3 py-7 lg:container lg:m-auto lg:px-7 xl:px-10"
          role="tablist"
          aria-orientation="horizontal"
        >
          <div
            id="headlessui-tabs-tab-:rp:"
            role="tab"
            aria-selected={activeTab === "cart"}
            tabIndex={activeTab === "cart" ? 0 : -1}
            onClick={() => setActiveTab("cart")}
            className={`cursor-pointer px-5 ${
              activeTab === "cart"
                ? "font-semibold text-black"
                : "text-gray-400"
            }`}
          >
            <button className="custom-tab text-[#000000]-600 active relative flex items-center  max-[568px]:text-[14px]">
              <div
                className={`${activeTab === "cart" ? "icon-with-text before:transform: translate(-16px, 8px); relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:h-[15px] before:w-[10px] before:w-[15px] before:rounded-full before:border-[1px] before:border-[3px] before:border-solid before:border-[#49AD91] before:content-['']" : "icon-with-text before:transform: translate(-16px, 8px); false relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:w-[10px] before:rounded-full before:border-[1px] before:border-solid before:border-[#49AD91] before:content-['']"}`}
              >
                <ShopingCart activeTab={activeTab}></ShopingCart>
                <span>Cart</span>
              </div>
            </button>
          </div>
          <div
            id="headlessui-tabs-tab-:rr:"
            role="tab"
            aria-selected={activeTab === "shipping"}
            tabIndex={activeTab === "shipping" ? 0 : -1}
            onClick={() => setActiveTab("shipping")}
            className={`cursor-pointer text-black ${
              activeTab === "shipping"
                ? "font-semibold text-black"
                : "text-gray-400"
            }`}
          >
            <button className="custom-tab middle-tab relative flex items-center justify-center space-x-2 before:absolute before:start-0 before:w-[5rem] before:border before:border-dashed before:border-[#49AD91] before:content-[''] after:absolute after:end-0 after:w-[5rem] after:border after:border-dashed after:border-[#49AD91] after:content-[''] max-[568px]:w-[8rem] max-[568px]:text-[14px] max-[568px]:before:content-[none] max-[568px]:after:content-[none] min-[568px]:w-[20rem] md:w-[30rem] before:md:w-[30%] after:md:w-[30%] lg:w-[40rem] before:lg:w-[38%] after:lg:w-[38%] xl:w-[50rem] 2xl:w-[73rem]">
              <div
                className={`${activeTab === "shipping" ? "icon-with-text before:transform: translate(-16px, 8px); relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:h-[15px] before:w-[10px] before:w-[15px] before:rounded-full before:border-[1px] before:border-[3px] before:border-solid before:border-[#49AD91] before:content-['']" : "icon-with-text before:transform: translate(-16px, 8px); false relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:w-[10px] before:rounded-full before:border-[1px] before:border-solid before:border-[#49AD91] before:content-['']"}`}
              >
                <Shipping activeTab={activeTab}></Shipping>
                <span>Shipping</span>
              </div>
            </button>
          </div>
          <div
            id="headlessui-tabs-tab-:rt:"
            role="tab"
            aria-selected={activeTab === "payment"}
            tabIndex={activeTab === "payment" ? 0 : -1}
            onClick={() => setActiveTab("payment")}
            className={`cursor-pointer ${
              activeTab === "payment"
                ? "font-semibold text-black"
                : "text-gray-400"
            }`}
          >
            <button className="custom-tab flex items-center space-x-2 max-[568px]:text-[14px]">
              <div
                className={`${activeTab === "payment" ? "icon-with-text before:transform: translate(-16px, 8px); relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:h-[15px] before:w-[10px] before:w-[15px] before:rounded-full before:border-[1px] before:border-[3px] before:border-solid before:border-[#49AD91] before:content-['']" : "icon-with-text before:transform: translate(-16px, 8px); false relative flex items-center gap-2 before:absolute before:left-[-20px] before:top-[6px] before:h-[10px] before:w-[10px] before:rounded-full before:border-[1px] before:border-solid before:border-[#49AD91] before:content-['']"}`}
              >
                <Payment activeTab={activeTab}></Payment>
                <span>Payment</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {activeTab === "cart" && (
        <>
          <SectionBlock
            title=""
            subtitle=""
            className="px-3 pt-14 lg:container lg:m-auto"
            position="left"
          >
            <CartTab cartData={cartData} setActiveTab={setActiveTab} />
          </SectionBlock>
          <SectionBlock
            title="Your Last Minute Addons"
            subtitle=""
            className="px-3 pt-14 lg:container lg:m-auto"
            position="left"
          >
            <DetailCard />
          </SectionBlock>
        </>
      )}
      {activeTab === "shipping" && (
        <SectionBlock
          title=""
          subtitle=""
          className="px-3 pt-14 lg:container lg:m-auto"
          position="left"
        >
          <ShippingTab setActiveTab={setActiveTab} />
        </SectionBlock>
      )}
      {activeTab === "payment" && (
        <div className="bg-[#F0F7F2]">
          <SectionBlock
            title=""
            subtitle=""
            className="px-3 pt-14 lg:container lg:m-auto"
            position="left"
          >
            <PaymentTab />
          </SectionBlock>
        </div>
      )}
    </>
  );
}
