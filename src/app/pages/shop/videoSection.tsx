import React, { useEffect, useState } from "react";

export default function VideoSection({ responseData, isLoading }) {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (responseData && !isLoading) {
      const src =
        responseData?.video ||
        responseData?.data?.video ||
        responseData?.data?.category?.video;
      setVideoSrc(src);
    }
  }, [responseData, isLoading]);

  const isValidVideoSrc =
    videoSrc && typeof videoSrc === "string" && videoSrc.trim() !== "";

  // const videoSrc = responseData?.video || responseData?.data?.video || responseData?.data?.category?.video;
  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-full animate-pulse rounded-lg bg-gray-300"></div>
        </div>
      ) : (
        <>
          {isValidVideoSrc && (
            <div className="flex items-center justify-center">
              <video className="w-full rounded-lg" controls preload="auto">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </>
      )}
    </div>
  );
}
