import React from "react";

export default function VideoSection({ responseData, isLoading }) {

  const videoSrc = responseData?.video || responseData?.data?.video || responseData?.data?.category?.video;
  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-full rounded-lg bg-gray-300 animate-pulse"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <video className="w-full rounded-lg" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}