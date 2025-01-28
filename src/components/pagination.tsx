import React from "react";

export default function pagination() {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-0">
        <div className="flex w-full items-center justify-between lg:w-3/5">
          <div className="flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1667 18.1673L9 14.0007L13.1667 9.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0026 18.1673L14.8359 14.0007L19.0026 9.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="ml-3 text-sm font-medium leading-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#49AD91"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
          <div className="hidden sm:flex">
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              1
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              2
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              3
            </p>
            <p className="mr-4 cursor-pointer bg-[#49AD91] p-2 px-2 text-sm font-medium leading-none text-white">
              4
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              5
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              6
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              7
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              8
            </p>
          </div>
          <div className="flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700">
            <p className="mr-3 text-sm font-medium leading-none">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 19L16.5 14L11.5 9"
                  stroke="#49AD91"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8359 14.1673L15.0026 10.0007L10.8359 5.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 14.1673L9.16667 10.0007L5 5.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
