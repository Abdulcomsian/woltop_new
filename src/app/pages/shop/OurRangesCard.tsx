import Link from "next/link";
import { Card } from "~/components/ui/card";
import cloudflareLoader from "~/lib/cloudflare-loader";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface CardData {
  id: string;
  image: string;
  content?: string;
  icon?: React.ReactNode;
}

interface OurRangesCardProps {
  cardData: CardData[];
  isLoading: boolean;
}

export default function OurRangesCard({
  cardData,
  isLoading,
}: OurRangesCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize limited categories to prevent unnecessary recalculations
  const limitedCategories = useMemo(() => cardData?.slice(0, 3), [cardData]);

  if (isLoading) {
    return (
      <div className="flex w-full flex-col">
        <div className="scrollbar-hide grid auto-cols-[minmax(195px,1fr)] grid-flow-col gap-4 overflow-x-auto">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="card-wrapper relative">
                <div className="h-[158px] animate-pulse rounded-lg bg-gray-300 md:h-[337px]"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <div className="scrollbar-hide grid auto-cols-[minmax(195px,1fr)] grid-flow-col gap-4 overflow-x-auto">
        {limitedCategories?.map((card) => (
          <Link
            href={`/category/${card.id}`}
            key={card.id}
            className="card-wrapper relative"
            prefetch={false} // Disable prefetching for better performance
          >
            <Card className="h-[158px] rounded-lg bg-center object-cover md:h-[337px]">
              <Image
                src={card.image}
                loader={cloudflareLoader}
                className="h-full rounded-lg object-cover"
                width={isMobile ? 195 : 470} // Dynamic width based on viewport
                height={isMobile ? 158 : 337} // Dynamic height based on viewport
                alt={card.content || "Category image"} // Proper alt text
                sizes="(max-width: 768px) 195px, 470px" // More precise sizes
                quality={isMobile ? 65 : 75} // Lower quality for mobile
                priority={false} // Changed from true to false
                loading="lazy"
                placeholder="blur" // Add blur placeholder
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" // Tiny placeholder
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
