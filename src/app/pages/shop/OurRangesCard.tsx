import Link from "next/link";
import { ArrowRight } from "~/components/icons/Arrowfill";
import { Card } from "~/components/ui/card";
import cloudflareLoader from "~/lib/cloudflare-loader";
import Image from "next/image";
interface CardData {
  id: string;
  img: { src: string };
  content: string;
  icon?: React.ReactNode;
}

export default function OurRangesCard({ cardData, isLoading }) {
  const limitedCategories = cardData?.slice(0, 3);

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
          >
            <Card className="h-[158px] rounded-lg bg-center object-cover md:h-[337px]">
              <Image
                src={card?.image}
                loader={cloudflareLoader}
                className="rounded-lg object-cover md:h-80 lg:block"
                width={470}
                height={550}
                alt=""
                sizes="(max-width: 768px) 100vw, 50vw" // Responsive breakpoints
                quality={80}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
