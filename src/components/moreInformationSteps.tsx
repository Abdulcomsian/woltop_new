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
        <div className="md:w-[646px]">
          <div className="mx-auto w-full rounded-md border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
            <h6 className="border-b-[0.8px] border-[#D9D9D9] p-2 text-xl font-bold text-[#AA4A00] md:text-2xl">
              Storage & Usage Guide
            </h6>

            <table className="w-full table-fixed md:w-auto">
              <tbody>
                {details?.storage && (
                  <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                    <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                      Storage
                    </td>
                    <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                      {details?.storage}
                    </td>
                  </tr>
                )}
                {details?.net_weight && (
                  <tr className="border-b-[0.8px] border-dashed border-[#D9D9D9]">
                    <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                      Net Weight
                    </td>
                    <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                      {" "}
                      {details?.net_weight} g
                    </td>
                  </tr>
                )}
                {details?.coverage && (
                  <tr>
                    <td className="w-[35%] max-w-[150px] whitespace-nowrap py-[10px] pr-3 text-xs font-[500] text-[#AA4A00] md:py-[15px] md:text-base">
                      Coverage
                    </td>
                    <td className="py-[10px] text-xs text-[#000000] md:py-[15px] md:text-base">
                      {details?.coverage}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
