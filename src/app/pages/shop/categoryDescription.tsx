import React from "react";
import parse from "html-react-parser"; // Import the library

export default function CategoryDescription({ responseData, isLoading }) {
  const description = responseData?.data?.category?.description;

  return (
    <>
      {/* Render the static content */}
      {/* <div className="item mb-5 text-center md:text-left">
        <h2 className="text-xl font-semibold text-black md:text-[34px]">
          Guest Room Wallpaper
        </h2>
        <p className="mt-4 text-base leading-[21.6px] text-[#000000] md:text-lg">
          Are you looking to transform your space for a while? Don't look any
          further, as Magicdecor's Guest Room Wallpaper has just elevated the
          style quotient in your space.
        </p>
      </div> */}

      {description && (
        <div className="item mb-5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-black md:text-[34px]">
            Category Description
          </h2>
          <div className="mt-4 text-base leading-[21.6px] text-[#000000] md:text-lg">
            {parse(description)}
          </div>
        </div>
      )}
    </>
  );
}