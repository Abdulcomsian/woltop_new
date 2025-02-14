import { useGetStoriesQuery } from "~/store/api/storiesApi";

export default function Reeling() {
  const { data: reels, isLoading } = useGetStoriesQuery({});

  if (isLoading) {
    return (
      <div className="overflow-hidden">
        <div className="scrollbar-hide grid auto-cols-[minmax(127px,1fr)] grid-flow-col gap-4 overflow-x-auto md:auto-cols-[minmax(195px,1fr)]">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="h-[219px] md:h-[337px] rounded-lg bg-gray-300 animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="scrollbar-hide grid auto-cols-[minmax(127px,1fr)] grid-flow-col gap-4 overflow-x-auto md:auto-cols-[minmax(195px,1fr)]">
        {reels?.map((video, index) => (
          <div key={index} className="relative cursor-pointer">
            <video
              src={video?.path}
              className="h-[219px] rounded-lg object-cover md:h-[337px]"
              muted
              loop
              autoPlay
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}
