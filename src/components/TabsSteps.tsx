import { Steps } from "antd";
import { Payment } from "~/components/icons/Payment";
import { Shipping } from "~/components/icons/Shipping";
import { ShopingCart } from "~/components/icons/ShopingCart";

const { Step } = Steps;

interface TabStepsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabSteps: React.FC<TabStepsProps> = ({ activeTab, setActiveTab }) => {
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
    },
    {
      title: "Payment",
      icon: <Payment activeTab={activeTab} />,
      key: "payment",
    },
  ];

  const currentStep = steps.findIndex((step) => step.key === activeTab);

  return (
    <div className="bg-[#F1FBFF] py-5 md:py-7">
      <div className="mx-auto max-w-[1075px] px-3">
        <Steps
          current={currentStep}
          onChange={(stepIndex) => {
            const step = steps[stepIndex];
            if (step) {
              setActiveTab(step.key);
            }
          }}
          size="default"
          className="custom-stepper"
        >
          {steps.map((step) => (
            <Step
              key={step.key}
              icon={null}
              title={
                <div
                  className={`flex items-center ${
                    activeTab === step.key
                      ? "font-semibold text-black"
                      : "text-gray-400"
                  }`}
                >
                  {/* Custom Radio Button */}
                  <div
                    className={`flex h-3 w-3 md:mt-1 items-center justify-center rounded-full border-2 md:h-4 md:w-4 ${
                      activeTab === step.key
                        ? "border-[#49AD91] bg-[#49AD91]"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        activeTab === step.key ? "bg-white" : "bg-transparent"
                      }`}
                    />
                  </div>

                  {/* Icon */}
                  <div className="ml-2 md:mt-1">{step.icon}</div>

                  {/* Title */}
                  <span className="ml-2 md:mt-1 text-[10px] md:text-base">
                    {step.title}
                  </span>
                </div>
              }
            />
          ))}
        </Steps>
      </div>

      {/* Add this CSS to style the connecting line */}
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

          :where(.css-dev-only-do-not-override-1kf000u).ant-steps .ant-steps-item-title{
            display: flex;
            justify-content: center;
          }
          /* Global CSS to override Ant Design's default styles */
          .ant-steps .ant-steps-item::before {
            border-top: 2px dotted #49AD91 !important; /* Dotted green line */
            background-color: transparent !important; /* Remove default background */
          }
          .ant-steps-vertical{
            display: flex !important;
            flex-direction: row !important;
          }
        `}
      </style>
    </div>
  );
};

export default TabSteps;
