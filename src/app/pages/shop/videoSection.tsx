import React, { useState, useEffect } from "react";

interface VideoSectionProps {
  videoId: string;
  libraryId: string;
  poster?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
}

export default function VideoSection({
  videoId = "95759f99-42f9-4d09-8fa0-7ee8e6653178",
  libraryId = "430526",
  poster,
  loading = "lazy",
  priority = false,
}: VideoSectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy load with IntersectionObserver
  useEffect(() => {
    if (priority || loading === "eager") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    const element = document.querySelector("#bunny-video-container");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [loading, priority]);

  if (!videoId || !libraryId) return null;

  return (
    <div
      id="bunny-video-container"
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100"
    >
      {/* Poster image with lazy loading */}
      {poster && (
        <img
          src={poster}
          alt="Video preview"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          loading={loading}
          decoding="async"
        />
      )}

      {/* BunnyCDN iframe - only load when in view */}
      {isIntersecting && (
        <iframe
          src={`https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?preload=false`}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          // Critical for performance
          sandbox="allow-same-origin allow-scripts allow-popups"
        />
      )}
    </div>
  );
}
