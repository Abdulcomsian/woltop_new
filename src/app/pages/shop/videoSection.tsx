import React from "react";

interface ResponseData {
  data: {
    video: string;
  };
}

export default function VideoSection({ responseData }: { responseData: ResponseData }) {
  const {video} = responseData?.data;
  // console.log(video, "vedio")
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center p-8 md:p-1">
        <video className="aspect-video w-full rounded-lg" controls>
          <source
            src={video || "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
