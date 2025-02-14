import React from "react";

export default function VideoSection({ responseData}) {
  const video = responseData?.data?.video;

  // console.log(video, "homevideo")

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <video className="aspect-auto w-full rounded-lg" controls>
          <source
            src={
              video ||
              "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
