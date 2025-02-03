import React from "react";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import step4 from "../../public/step4.png";

type InstallationStep = {
  id: number;
  image: string;
  name: string;
  description: string;
};

type DosDont = {
  id: number;
  name: string;
};

type DesignApplicationDetails = {
  room_type: string;
  pattern_repeat: string;
  pattern_match: string;
  application_guide: string;
};

interface ResponseData {
  data: {
    installation_steps: InstallationStep[];
    dos_dont: DosDont[];
    design_application_details: DesignApplicationDetails[];
  };
}

// Define the component props to accept `responseData`
interface EasyStepsProps {
  responseData: ResponseData;
}

export default function easySteps({ responseData }: EasyStepsProps) {
  const details = responseData?.data?.design_application_details?.[0];
  return (
    <>
      <div className="flex justify-center text-center">
        <p className="btn border-{#0B0A0A} hover:bg-[#0B0A0A]-700 mt-2 flex justify-center rounded-[8px] border-2 bg-[#AA4A00] px-5 py-4 pb-3 pt-3 text-[22px] font-semibold text-white">
          How To Install
        </p>
      </div>
      <div className="scrollbar-hide my-5 grid auto-cols-[minmax(246px,1fr)] grid-flow-col lg:grid-cols-4 overflow-x-auto gap-4">
        {responseData?.data?.installation_steps?.map((step) => (
          <div key={step.id} className="max-w-[246px]">
            <div className="relative">
              <div className="h-[279px] overflow-hidden rounded">
                <img
                  src={step.image}
                  alt={step.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative p-4">
                <div className="mb-2 text-center text-2xl leading-7">
                  <h6 className="hover:text-[#AA4A00]-900 font-bold text-[#AA4A00] hover:underline hover:underline-offset-4">
                    {step.name}
                  </h6>
                  <p className="hover:text-[#656567]-900 pt-4 text-base text-[#656567] hover:underline hover:underline-offset-4">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mx-auto w-full rounded-md border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
            <h6 className="border-b-[0.8px] border-[#D9D9D9] p-2 text-xl font-bold text-[#AA4A00] md:text-2xl">
              Other Dos & Don’ts
            </h6>

            <ul className="list-disc pl-5 pr-4">
              {responseData?.data?.dos_dont?.map((item) => (
                <li
                  key={item.id}
                  className="pt-3 text-xs text-[#AA4A00] md:text-base"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-0 w-full md:w-1/2">
          <div className="mx-auto w-full rounded-md border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
            <h6 className="border-b-[0.8px] border-[#D9D9D9] p-2 text-xl font-bold text-[#AA4A00] md:text-2xl">
              Design & Application Details
            </h6>

            <table className="w-full table-fixed">
              <tbody>
                <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9] text-left">
                  <td className="md:w-[30%] w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                    Room Type
                  </td>
                  <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                    {details?.room_type}
                  </td>
                </tr>
                <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                  <td className="md:w-[30%] w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                    Pattern Repeat
                  </td>
                  <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                    {details?.pattern_repeat}
                  </td>
                </tr>
                <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                  <td className="md:w-[30%] w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                    Pattern Match
                  </td>
                  <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                    {details?.pattern_match}
                  </td>
                </tr>
                <tr>
                  <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                    Application Guide
                  </td>
                  <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                    {details?.application_guide}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
