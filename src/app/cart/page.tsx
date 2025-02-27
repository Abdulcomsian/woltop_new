"use client";
import SectionBlock from "~/components/ui/section-block";
import PaymentTab from "../pages/shop/paymentTab";
import CartTab from "../pages/shop/cartTab";
import ShippingTab from "../pages/shop/shippingTab";
import { useState } from "react";
import { useSelector } from "react-redux";
import DetailCard from "../pages/shop/detailCard";
import TabSteps from "~/components/TabsSteps";
import { useGetChargesQuery } from "~/store/api/chargessApi";

export default function page() {
  const { data: chargess } = useGetChargesQuery({});
  const [activeTab, setActiveTab] = useState("cart");
  const cartData = useSelector((state: any) => state?.cart);
  const [shippingData, setShippingData] = useState(null);

  return (
    <>
      <TabSteps activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mx-auto max-w-[1075px]">
        {activeTab === "cart" && (
          <>
            <SectionBlock
              title=""
              subtitle=""
              className="px-3 pt-10 md:pt-[70px]"
              position="left"
            >
              <CartTab
                cartData={cartData}
                chargess={chargess}
                setActiveTab={setActiveTab}
              />
            </SectionBlock>
            <SectionBlock
              title="Your Last Minute Addons"
              subtitle=""
              className="px-3"
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
            className="px-3 pt-10 md:pt-[70px]"
            position="left"
          >
            <ShippingTab
              setActiveTab={setActiveTab}
              setShippingData={setShippingData}
            />
          </SectionBlock>
        )}
      </div>

      {activeTab === "payment" && (
        <div className="mx-auto max-w-6xl">
          <SectionBlock title="" subtitle="" className="px-3" position="left">
            <PaymentTab chargess={chargess} shippingData={shippingData} />
          </SectionBlock>
        </div>
      )}
    </>
  );
}
