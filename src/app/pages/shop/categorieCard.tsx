import Link from "next/link";
import { ArrowRight } from "~/components/icons/Arrowfill";
import { Card } from "~/components/ui/card";

export default function CategorieCard({ cardData, isLoading }) {
  return (
    <div className="flex w-full flex-col">
      <div className="scrollbar-hide grid auto-cols-[minmax(151px,1fr)] md:auto-cols-[minmax(250px,1fr)] grid-flow-col overflow-x-auto gap-4">
        {isLoading
          ?
            Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative h-[158px] md:h-[337px] rounded-lg bg-gray-300 animate-pulse"
                >
                  <div className="h-full bg-gray-400 rounded-lg"></div>
                  <div className="mt-3 flex justify-between px-4">
                    <div className="h-5 w-1/3 bg-gray-300 rounded-md"></div>
                    <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              ))
          : 
            cardData?.map((card) => (
              <Link href={`/category/${card.id}`} key={card?.id}>
                <div className="card-wrapper relative">
                  <Card
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                    }}
                    className="rounded-lg bg-center object-cover h-[158px] md:h-[337px]"
                  ></Card>

                  <div className="mt-3 flex items-center justify-between md:px-0">
                    <span className="text-heading text-base font-normal text-[#383434] transition-colors group-hover:text-orange-500 md:text-[20px] ltr:text-left rtl:text-right">
                      {card.name}
                    </span>
                    <div>
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
