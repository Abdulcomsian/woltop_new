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
    <div>
      <div className="flex justify-center text-center">
        <div className="btn border-{#0B0A0A} hover:bg-[#0B0A0A]-700 mt-2 flex w-40 justify-center rounded border-2 bg-[#AA4A00] px-6 py-2 pb-3 pt-3 font-medium text-white">
          How To Install
        </div>
      </div>
      <div className="scrollbar-hide mt-5 flex grid auto-cols-[minmax(145px,1fr)] grid-flow-col justify-between overflow-x-auto md:gap-4">
        {responseData?.data?.installation_steps?.map((step) => (
          <div
            key={step.id}
            className="grid content-center justify-items-center"
          >
            <div className="relative mx-4 overflow-hidden rounded">
              <div className="">
                <img
                  src={step.image}
                  alt={step.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative h-auto p-4">
                <div className="mb-2 text-center text-2xl leading-7">
                  <h6 className="hover:text-[#AA4A00]-900 font-bold text-[#AA4A00] hover:underline hover:underline-offset-4">
                    {step.name}
                  </h6>
                  <p className="text-[#AA4A00]-800 hover:text-[#656567]-900 pt-4 text-base hover:underline hover:underline-offset-4">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between md:flex-row">
        <div className="m-2">
          <div className="md:w-90 mx-auto w-full rounded-md border-2 border-dashed border-gray-300 bg-white p-4">
            <h6 className="p-2 text-xl font-bold text-[#AA4A00]">
              Other Dos & Don’ts
            </h6>

            <ul className="list-disc pl-5 pr-4">
              {responseData?.data?.dos_dont?.map((item) => (
                <li key={item.id} className="pt-3 text-[#AA4A00]">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-2">
          <div className="md:w-90 mx-auto w-full rounded-md border-2 border-dashed border-gray-300 bg-white p-4">
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
