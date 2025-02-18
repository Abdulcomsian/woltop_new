import React from "react";

export default function VideoSection({ responseData }) {
  const video = responseData?.data?.video;

  // console.log(video, "homevideo")

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <video className="aspect-auto w-full rounded-lg" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
