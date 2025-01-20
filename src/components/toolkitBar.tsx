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
        <div className="w-full max-w-sm lg:flex lg:max-w-full">
          <div
            className="m-4 h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
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

          <div className="flex flex-col justify-between rounded-b bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r">
            <div className="mb-8 pt-4">
              <div className="mb-2 text-xl font-bold text-gray-900">
                {randomTool.name}
              </div>
              <p className="text-base text-gray-700">{randomTool.description}</p>
              <button className="border-{#0B0A0A} bg-[#49AD91]-500 hover:bg-[#0B0A0A]-700 mt-5 flex w-4/5 justify-center rounded border-2 px-6 py-2 pb-3 pt-3 font-medium text-[#0B0A0A]">
                Add - ₹{randomTool.price}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="p-4 text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}
