import Link from "next/link";
import { ArrowRight } from "~/components/icons/Arrowfill";
import { Card } from "~/components/ui/card";
import Image from "next/image";
import cloudflareLoader from "~/lib/cloudflare-loader";
export default function CategorieCard({ cardData, isLoading }) {
  return (
    <div className="flex w-full flex-col">
      <div className="scrollbar-hide grid auto-cols-[minmax(151px,1fr)] grid-flow-col gap-4 overflow-x-auto md:auto-cols-[minmax(250px,1fr)]">
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative h-[158px] animate-pulse rounded-lg bg-gray-300 md:h-[337px]"
                >
                  <div className="h-full rounded-lg bg-gray-400"></div>
                  <div className="mt-3 flex justify-between px-4">
                    <div className="h-5 w-1/3 rounded-md bg-gray-300"></div>
                    <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              ))
          : cardData?.map((card) => (
              <Link href={`/category/${card.id}`} key={card?.id}>
                <div className="card-wrapper relative">
                  <Card
                    // style={{
                    //   backgroundImage: `url(${card.image})`,
                    //   backgroundSize: "cover",
                    // }}
                    className="h-[158px] rounded-lg bg-center object-cover md:h-[337px]"
                  >
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
