import React from "react";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import step4 from "../../public/step4.png";
import Image from "next/image";
import Link from "next/link";
import cloudflareLoader from "~/lib/cloudflare-loader";

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
  finish_type: string;
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

export default function EasySteps({ responseData }: EasyStepsProps) {
  const details = responseData?.data?.design_application_details?.[0];

  return (
    <>
      <div className="flex justify-center text-center">
        <Link href='/blogs' className="mb-[35px] md:mb-[45px] flex justify-center rounded-[8px] bg-[#AA4A00] px-5 py-2 text-base font-semibold text-white md:py-4 md:text-[22px]">
          How To Install
        </Link>
      </div>

      {/* Installation Steps Section */}
      {responseData?.data?.installation_steps?.length > 0 && (
        <div className="scrollbar-hide grid auto-cols-[minmax(146px,1fr)] grid-flow-col gap-4 overflow-x-auto md:auto-cols-[minmax(246px,1fr)] lg:grid-cols-4 mb-[35px]">
          {responseData.data.installation_steps.map((step) => (
            <div key={step.id} className="max-w-[146px] md:max-w-[246px]">
              <div className="relative">
                <div className="relative min-h-[146] overflow-hidden rounded-[8px] md:h-[279px]">
                  <Image
                    src={step.image}
                    alt={step.name}
                    className="h-full w-full object-cover"
                    fill
                    loader={cloudflareLoader}
                  />
                </div>

                <div className="relative mt-[22px]">
                  <div className="mb-2 text-center">
                    <h6 className="hover:text-[#AA4A00]-900 text-[17px] font-semibold text-[#AA4A00] md:text-2xl">
                      {step.name}
                    </h6>
                    <p className="hover:text-[#656567]-900 pt-[10px] text-xs text-[#656567] md:pt-4 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dos & Don’ts and Design & Application Details Sections */}
      {(responseData?.data?.dos_dont?.length > 0 ||
        responseData?.data?.design_application_details?.length > 0) && (
        <div
          className={`flex flex-col ${
            responseData?.data?.dos_dont?.length > 0 &&
            responseData?.data?.design_application_details?.length > 0
              ? "justify-between"
              : "justify-center"
          } gap-6 md:flex-row`}
        >
          {/* Dos & Don’ts Section */}
          {responseData?.data?.dos_dont?.length > 0 && (
            <div className="w-full md:w-1/2">
              <div className="mx-auto w-full rounded-md border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
                <h6 className="border-b-[0.8px] pb-[15px] border-[#D9D9D9] text-xl font-semibold text-[#AA4A00] md:text-2xl">
                  Other Dos & Don’ts
                </h6>

                <ul className="list-disc pl-5 pr-4">
                  {responseData.data.dos_dont.map((item) => (
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
          )}

          {/* Design & Application Details Section */}
          {responseData?.data?.design_application_details?.length > 0 && (
            <div className="m-0 w-full md:w-1/2">
              <div className="mx-auto w-full rounded-md border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
                <h6 className="border-b-[0.8px] border-[#D9D9D9] pb-[15px] text-xl font-semibold text-[#AA4A00] md:text-2xl">
                  Design & Application Details
                </h6>

                <table className="w-full table-fixed">
                  <tbody>
                    {details?.room_type && (
                      <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9] text-left">
                        <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:w-[30%] md:py-[15px] md:text-base">
                          Room Type
                        </td>
                        <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                          {details?.room_type}
                        </td>
                      </tr>
                    )}
                    {details?.finish_type && (
                      <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9] text-left">
                        <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:w-[30%] md:py-[15px] md:text-base">
                          Finish Type
                        </td>
                        <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                          {details?.finish_type}
                        </td>
                      </tr>
                    )}
                    {details?.pattern_repeat && (
                      <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                        <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:w-[30%] md:py-[15px] md:text-base">
                          Pattern Repeat
                        </td>
                        <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                          {details?.pattern_repeat}
                        </td>
                      </tr>
                    )}
                    {details?.pattern_match && (
                      <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                        <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:w-[30%] md:py-[15px] md:text-base">
                          Pattern Match
                        </td>
                        <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                          {details?.pattern_match}
                        </td>
                      </tr>
                    )}
                    {details?.application_guide && (
                      <tr>
                        <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:w-[30%] md:py-[15px] md:text-base">
                          Application <br />
                          Guide
                        </td>
                        <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                          {details?.application_guide}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
