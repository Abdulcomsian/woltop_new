import React from "react";
import Image from "next/image";
import background from "../../public/background.png";
import { useGetToolsQuery } from "~/store/api/toolsApi";

export default function ToolkitBar() {
  const { data: tools } = useGetToolsQuery({});

  // Get a random tool if tools exist
  const randomTool = tools?.data?.length
    ? tools.data[Math.floor(Math.random() * tools.data.length)]
    : null;

  return (
    <div className="border-1 mt-5 w-full rounded border-b border-l border-r border-t border-gray-400">
      {randomTool ? (
        <div className="w-full flex">
          <div
            className="m-4 h-[92px] md:h-[124px] flex-none overflow-hidden rounded-t"
            title={randomTool.name}
          >
            <Image
              className="h-full w-full object-cover"
              src={randomTool.image}
              alt={randomTool.name}
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-col items-start justify-between text-left rounded-b bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r">
            <div className="">
              <div className="mb-2 text-xs md:text-sm font-bold text-gray-900">
                {randomTool.name}
              </div>
              <p className="text-[10px] md:text-xs text-gray-700">{randomTool.description}</p>
            </div>
              <button className="border-{#0B0A0A} text-[13px] md:text-[18px] bg-[#49AD91]-500 hover:bg-[#0B0A0A]-700 flex w-full lg:w-4/5 justify-center rounded border-2 px-6 py-2 font-medium text-[#0B0A0A]">
                Add - ₹{randomTool.price}
              </button>
          </div>
        </div>
      ) : (
        <p className="p-4 text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}
