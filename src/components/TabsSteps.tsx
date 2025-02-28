import { Steps } from "antd";
import { Payment } from "~/components/icons/Payment";
import { Shipping } from "~/components/icons/Shipping";
import { ShopingCart } from "~/components/icons/ShopingCart";
import { useEffect, useState } from "react";

const { Step } = Steps;

interface TabStepsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  hasCartItems: boolean; // New prop to check if cart has items
  isShippingCompleted: boolean; // New prop to check if shipping is completed
}

const TabSteps: React.FC<TabStepsProps> = ({
  activeTab,
  setActiveTab,
  hasCartItems,
  isShippingCompleted,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    {
      title: "Cart",
      icon: <ShopingCart activeTab={activeTab} />,
      key: "cart",
    },
    {
      title: "Shipping",
      icon: <Shipping activeTab={activeTab} />,
      key: "shipping",
      disabled: !hasCartItems, // Disable if cart is empty
    },
    {
      title: "Payment",
      icon: <Payment activeTab={activeTab} />,
      key: "payment",
      disabled: !isShippingCompleted, // Disable if shipping is not completed
    },
  ];

  const currentStep = steps.findIndex((step) => step.key === activeTab);

  return (
    <>
      {isMounted && (
        <div className="bg-[#F1FBFF] py-5 md:py-7">
          <div className="mx-auto max-w-[1075px] px-3">
            <Steps
              current={currentStep}
              onChange={(stepIndex) => {
                const step = steps[stepIndex];
                if (step && !step.disabled) {
                  setActiveTab(step.key);
                }
              }}
              size="default"
              className="custom-stepper"
              direction="horizontal"
            >
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = activeTab === step.key;

                return (
                  <Step
                    key={step.key}
                    icon={null}
                    title={
                      <div
                        className={`flex items-center ${
                          isActive
                            ? "font-semibold text-black"
                            : isCompleted
                              ? "font-semibold text-[#49AD91]"
                              : "text-gray-400"
                        }`}
                      >
                        {/* Custom Radio Button */}
                        <div
                          className={`flex h-3 w-3 items-center justify-center rounded-full border-2 md:mt-1 md:h-4 md:w-4 ${
                            isActive
                              ? "border-[#49AD91] bg-[#49AD91]"
                              : isCompleted
                                ? "border-[#49AD91] bg-[#49AD91]"
                                : "border-gray-400 bg-white"
                          }`}
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${
                              isActive || isCompleted
                                ? "bg-white"
                                : "bg-transparent"
                            }`}
                          />
                        </div>

                        {/* Icon */}
                        <div className="ml-2 md:mt-1">{step.icon}</div>

                        {/* Title */}
                        <span className="ml-2 text-[10px] md:mt-1 md:text-base">
                          {step.title}
                        </span>
                      </div>
                    }
                    disabled={step.disabled} // Disable the step if condition is not met
                  />
                );
              })}
            </Steps>
          </div>

          <style>
            {`
              :where(.css-dev-only-do-not-override-1kf000u).ant-steps .ant-steps-item-wait .ant-steps-item-icon,
              :where(.css-dev-only-do-not-override-1kf000u).ant-steps .ant-steps-item-finish .ant-steps-item-icon,
              :where(.css-dev-only-do-not-override-1kf000u).ant-steps .ant-steps-item-process .ant-steps-item-icon {
                display: none !important;
              }
              :where(.css-dev-only-do-not-override-1kf000u).ant-steps.ant-steps-vertical >.ant-steps-item .ant-steps-item-content{
                min-height:0;
              }
              
              .ant-steps {
                display: flex !important;
                flex-direction: row !important;
              }

              .ant-steps .ant-steps-item-icon {
                display: none !important;
              }

              .ant-steps .ant-steps-item::before {
                border-top: 2px dotted #49AD91 !important;
                background-color: transparent !important;
              }

              .ant-steps .ant-steps-item-title {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .ant-steps-vertical {
                display: flex !important;
                flex-direction: row !important;
              }
            `}
          </style>
        </div>
      )}
    </>
  );
};

export default TabSteps;