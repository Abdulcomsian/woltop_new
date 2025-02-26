import React from "react";
import Image from "next/image";
import ToolkitImg from "../assets/cards/toolkit.png";

// Static data for tools
const staticTools = [
  {
    id: 1,
    name: "Complete Your Decorating Toolkit",
    description: "All your DIY essentials",
    price: 799,
    image: ToolkitImg,
  }
];

export default function ToolkitBar() {
  const randomTool =
    staticTools.length > 0
      ? staticTools[Math.floor(Math.random() * staticTools.length)]
      : null;

  return (
    <div className="border-1 mt-5 w-full rounded border-b border-l border-r border-t border-gray-400">
      {randomTool ? (
        <div className="w-full p-4 flex gap-[18px]">
          <div
            className="h-[92px] md:h-[124px] flex-none overflow-hidden rounded-t"
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

          <div className="flex flex-col items-start justify-between text-left rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
            <div>
              <div className="mb-1 text-xs md:text-sm font-medium text-black">
                {randomTool.name}
              </div>
              <p className="text-[10px] md:text-xs text-[#7A7474]">
                <span>{randomTool.description}</span>
                <span className="underline"> More Info</span>
              </p>
            </div>
            <button className="border-{#0B0A0A} text-[13px] md:text-[18px] bg-[#49AD91]-500 hover:bg-[#0B0A0A]-700 flex w-full lg:w-4/5 justify-center rounded border-2 px-6 py-2 font-medium text-[#0B0A0A]">
              Add - ₹{randomTool.price}
            </button>
          </div>
        </div>
      ) : (
        <p className="p-4 text-center text-gray-500">No tools available.</p>
      )}
    </div>
  );
}