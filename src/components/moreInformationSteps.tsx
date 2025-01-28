import React from "react";

type DesignApplicationDetails = {
  storage: string;
  coverage: string;
  net_weight: string;
};

interface ResponseData {
  data: {
    storage_usage_details: DesignApplicationDetails[];
  };
}

// Define the component props to accept `responseData`
interface MoreInformationStepsProps {
  responseData: ResponseData;
}

export default function moreInformationSteps({
  responseData,
}: MoreInformationStepsProps) {
  const details = responseData?.data?.storage_usage_details?.[0];
  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="">
          <div className="mx-auto w-full rounded-md border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
            <h6 className="p-2 text-xl md:text-2xl font-bold text-[#AA4A00] border-b-[0.8px] border-[#D9D9D9]">
              Storage & Usage Guide
            </h6>

            <table>
              <tbody>
                <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                  <td className="py-[10px] md:py-[15px] pr-3 font-[500] text-xs md:text-base text-[#AA4A00]">Storage</td>
                  <td className="py-[10px] md:py-[15px] text-xs md:text-base text-[#000000]">
                    {details?.storage}
                  </td>
                </tr>
                <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                  <td className="py-[10px] md:py-[15px] pr-3 font-[500] text-xs md:text-base text-[#AA4A00]">Net Weight</td>
                  <td className="py-[10px] md:py-[15px] text-xs md:text-base text-[#000000]">
                    {" "}
                    {details?.net_weight}
                  </td>
                </tr>
                <tr>
                  <td className="py-[10px] md:py-[15px] pr-3 font-[500] text-xs md:text-base text-[#AA4A00]">Coverage</td>
                  <td className="py-[10px] md:py-[15px] text-xs md:text-base text-[#000000]">
                    {details?.coverage}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
