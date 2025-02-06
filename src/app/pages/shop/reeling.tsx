import { useGetStoriesQuery } from "~/store/api/storiesApi";

export default function reeling() {
  const { data: reels, isLoading } = useGetStoriesQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
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
    </>
  );
}
