import { useGetStoriesQuery } from "~/store/api/storiesApi";
import { useEffect, useRef } from "react";

export default function Reeling() {
  const { data: reels, isLoading } = useGetStoriesQuery({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reels || !containerRef.current) return;

    const videos = containerRef.current.querySelectorAll('video');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch((e) => console.log('Autoplay prevented:', e));
          } else {
            video.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, [reels]);

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
    <div className="overflow-hidden" ref={containerRef}>
      <div className="scrollbar-hide grid auto-cols-[minmax(127px,1fr)] grid-flow-col gap-4 overflow-x-auto md:auto-cols-[minmax(195px,1fr)]">
        {reels?.map((video, index) => (
          <div key={index} className="relative cursor-pointer">
            <video
              src={video?.path}
              className="h-[219px] rounded-lg object-cover md:h-[337px]"
              muted
              loop
              playsInline
              webkit-playsinline="true"
              preload="metadata"
              disablePictureInPicture
              controlsList="nodownload nofullscreen"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}