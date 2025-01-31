"use client";
import SectionBlock from "~/components/ui/section-block";
import PaymentTab from "../pages/shop/paymentTab";
import CartTab from "../pages/shop/cartTab";
import ShippingTab from "../pages/shop/shippingTab";
import { useState } from "react";
import { useSelector } from "react-redux";
import DetailCard from "../pages/shop/detailCard";
import TabSteps from "~/components/TabsSteps";

export default function page() {
  const [activeTab, setActiveTab] = useState("cart");
  const cartData = useSelector((state: any) => state?.cart);

  return (
    <>
      <div className="bg-[#F1FBFF] mt-[2px]">
        <div className="mx-auto max-w-7xl">
          <TabSteps activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
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
              <DetailCard colorId={0} />
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
      </div>

      {activeTab === "payment" && (
        <div className="bg-[#F0F7F2]">
          <div className="mx-auto max-w-7xl">
            <SectionBlock
              title=""
              subtitle=""
              className="px-3 pt-14 lg:container lg:m-auto"
              position="left"
            >
              <PaymentTab />
            </SectionBlock>
          </div>
        </div>
      )}
    </>
  );
}
