import React from "react";

export const LandingBannerStepper = () => {
  const stepperData = [
    {
      id: 1,
      title: "Booking",
    },
    {
      id: 2,
      title: "Home Visit & Design Consultation",
    },
    {
      id: 3,
      title: "Design Selection Order Placement",
    },
    {
      id: 4,
      title: "Production & Dispatch",
    },
    {
      id: 5,
      title: "Installation by Magicdecor",
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center space-x-4 px-4 md:space-x-8">
        {stepperData?.map((step) => (
          <div
            key={step.id}
            className="flex w-[120px] flex-col items-center sm:w-[150px] md:w-[180px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[#49AD91] bg-white p-2 sm:h-16 sm:w-16">
              <span className="text-sm font-semibold text-[#49AD91] sm:text-base">
                {step?.id}
              </span>
            </div>
            <span className="mt-2 text-center text-sm text-black md:text-[18px]">
              {step?.title}
            </span>
            {step.id === 1 && <span className="text-[#F11C54]">₹500</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
