import React, { useState, useEffect, useRef } from "react";

interface VideoSectionProps {
  responseData: {
    id?: number;
    name?: string;
    image?: string;
    logo?: string;
    text?: string;
    button_link?: string;
    video?: string;
  };
  isLoading: boolean;
  poster?: string;
}

export default function VideoSection({
  responseData,
  isLoading,
  poster,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  // Get the video source - now checking image field as well
  const videoSrc = responseData?.video || responseData?.image || "";

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.1 },
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [videoSrc]);

  // Handle video loading when in view
  useEffect(() => {
    if (!isInView || isLoading || !videoRef.current) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.removeEventListener("canplay", handleCanPlay);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.preload = "metadata";
    video.src = videoSrc;

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.src = "";
    };
  }, [isInView, isLoading, videoSrc]);

  // Handle poster image visibility
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShowPoster(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (isLoading) {
    return (
      <div className="container mx-auto">
        <div className="flex aspect-video items-center justify-center">
          <div className="h-full w-full animate-pulse rounded-lg bg-gray-300"></div>
        </div>
      </div>
    );
  }

  if (!videoSrc) return null;

  return (
    <div className="container mx-auto">
      <div className="relative flex aspect-video items-center justify-center rounded-lg bg-gray-100">
        {showPoster &&
          (poster ? (
            <img
              src={poster}
              alt="Video preview"
              className="absolute h-full w-full rounded-lg object-cover"
            />
          ) : (
            <div className="absolute h-full w-full animate-pulse rounded-lg bg-gray-300"></div>
          ))}

        <video
          ref={videoRef}
          className={`w-full rounded-lg ${showPoster ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          controls
          muted
          playsInline
          preload="metadata"
          aria-label="Featured video"
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
