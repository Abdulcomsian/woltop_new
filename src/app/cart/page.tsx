"use client";
import SectionBlock from "~/components/ui/section-block";
import PaymentTab from "../pages/shop/paymentTab";
import CartTab from "../pages/shop/cartTab";
import ShippingTab from "../pages/shop/shippingTab";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TabSteps from "~/components/TabsSteps";
import { useGetChargesQuery } from "~/store/api/chargessApi";
import UpsellingCard from "../pages/shop/upsellingCard";

export default function page() {
  const { data: chargess } = useGetChargesQuery({});
  const [activeTab, setActiveTab] = useState("cart");
  const cartData = useSelector((state: any) => state?.cart);
  const [shippingData, setShippingData] = useState(null);
  const [hasCartItems, setHasCartItems] = useState(false);
  const [isShippingCompleted, setIsShippingCompleted] = useState(false);

  useEffect(() => {
    if (cartData && cartData.items && cartData.items.length > 0) {
      setHasCartItems(true);
    } else {
      setHasCartItems(false);
    }
  }, [cartData]);

  useEffect(() => {
    if (shippingData) {
      setIsShippingCompleted(true);
    } else {
      setIsShippingCompleted(false);
    }
  }, [shippingData]);

  return (
    <>
      <TabSteps activeTab={activeTab} setActiveTab={setActiveTab}   hasCartItems={hasCartItems}
  isShippingCompleted={isShippingCompleted} />

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
              title=""
              subtitle=""
              className="px-3"
              position="left"
            >
              <UpsellingCard />
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
