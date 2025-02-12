
import { ArrowRight } from "~/components/icons/Arrowfill";
import { Card, CardHeader } from "~/components/ui/card";

interface CardData {
  id: string;
  img: { src: string };
  content: string;
  icon?: React.ReactNode;
}

export default function OurRangesCard({cardData}) {

  const limitedCategories = cardData?.slice(0, 3);
  return (
    <div className="flex w-full flex-col">
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
      <div className="scrollbar-hide grid auto-cols-[minmax(195px,1fr)]  grid-flow-col overflow-x-auto gap-4">
        {limitedCategories?.map((card) => (
          <div key={card.id} className="">
            <div className="card-wrapper relative">
              <Card
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                }}
                className="rounded-lg bg-center object-cover h-[158px] md:h-[337px]"
              >
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
