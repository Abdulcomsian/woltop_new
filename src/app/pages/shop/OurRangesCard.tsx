import Link from "next/link";
import { ArrowRight } from "~/components/icons/Arrowfill";
import { Card } from "~/components/ui/card";

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
        <div className="scrollbar-hide grid auto-cols-[minmax(195px,1fr)] grid-flow-col overflow-x-auto gap-4">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="card-wrapper relative">
                <div className="rounded-lg h-[158px] md:h-[337px] bg-gray-300 animate-pulse"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <div className="scrollbar-hide grid auto-cols-[minmax(195px,1fr)] grid-flow-col overflow-x-auto gap-4">
        {limitedCategories?.map((card) => (
          <Link href={`/category/${card.id}`} key={card.id} className="card-wrapper relative">
            <Card
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
              }}
              className="rounded-lg bg-center object-cover h-[158px] md:h-[337px]"
            ></Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
