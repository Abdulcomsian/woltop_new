import React from "react";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import step4 from "../../public/step4.png";

type DesignApplicationDetails = {
  room_type: string;
  pattern_repeat: string;
  pattern_match: string;
  application_guide: string;
};

interface ResponseData {
  data: {
    design_application_details: DesignApplicationDetails[];
  };
}

// Define the component props to accept `responseData`
interface MoreInformationStepsProps {
  responseData: ResponseData;
}

export default function moreInformationSteps({ responseData }: MoreInformationStepsProps) {
  const details = responseData?.data?.design_application_details?.[0];
  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="m-2">
          <div className="mx-auto w-full rounded-md border-2 border-dashed border-gray-300 bg-white p-4">
            <h6 className="p-2 text-xl font-bold text-[#AA4A00]">
              Design & Apllication Details
            </h6>

            <table>
              <tbody>
                <tr>
                  <td className="mx-2 p-4 text-[#AA4A00]">Room Type</td>
                  <td className="mx-2 my-2 p-4 text-[#000000]">
                  {details?.room_type}
                  </td>
                </tr>
                <tr>
                  <td className="mx-2 p-4 text-[#AA4A00]">Pattern Repeat</td>
                  <td className="mx-2 my-2 p-4 text-[#000000]">
                    {" "}
                    {details?.pattern_repeat}
                  </td>
                </tr>
                <tr>
                  <td className="mx-2 p-4 text-[#AA4A00]">Pattern Match</td>
                  <td className="mx-2 my-2 p-4 text-[#000000]">
                    {details?.pattern_match}
                  </td>
                </tr>
                <tr>
                  <td className="mx-2 p-4 text-[#AA4A00]">Application Guide</td>
                  <td className="mx-2 my-2 p-4 text-[#000000]">
                  {details?.application_guide}
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
