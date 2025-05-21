import React, { useState, useEffect, useRef } from "react";

interface VideoSectionProps {
  responseData: {
    video?: string;
    data?: {
      video?: string;
      category?: {
        video?: string;
      };
    };
  };
  isLoading: boolean;
  poster?: string; // Optional poster image
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

  // Get the video source
  const videoSrc =
    responseData?.video ||
    responseData?.data?.video ||
    responseData?.data?.category?.video ||
    "";

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

    // Start loading when component is in view
    const handleCanPlay = () => {
      setIsLoaded(true);
      video.removeEventListener("canplay", handleCanPlay);
    };

    video.addEventListener("canplay", handleCanPlay);

    // Set a small buffer to help with initial playback
    video.preload = "metadata";
    video.src = videoSrc;

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.src = ""; // Clean up
    };
  }, [isInView, isLoading, videoSrc]);

  // Handle poster image visibility
  useEffect(() => {
    if (isLoaded) {
      // Keep poster visible for a moment after load for smoother transition
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
        {/* Poster image or loading state */}
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

        {/* Video element */}
        <video
          ref={videoRef}
          className={`w-full rounded-lg ${showPoster ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          controls
          muted
          playsInline
          preload="metadata" // Changed from "none" to "metadata"
          aria-label="Featured video"
          poster={poster} // Fallback for browsers that support it
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
