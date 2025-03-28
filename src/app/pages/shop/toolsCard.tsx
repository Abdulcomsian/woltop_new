import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { useGetToolsQuery } from "~/store/api/toolsApi";
export default function ToolsCard() {
  const { data: tools } = useGetToolsQuery({});
 

  return (
    <div className="3xl:pb-[60px] flex w-full flex-col pb-[20px] lg:container lg:m-auto lg:pb-[40px] xl:pb-[54px]">
      <div className="w-full">
        <div className="3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid grid-cols-2 gap-5 gap-y-10 md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:gap-2 lg:px-0 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {tools?.data?.map((card: any) => (
            
            <Link key={card?.id}  href={`/product/${card.id}`}  className="card-wrapper relative cursor-pointer">
              <div className="absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2">
                <div className="flex w-11/12 justify-end">
                  <button className="text-heading hover:text-light focus:text-light flex h-7 w-7 items-center justify-center rounded border border-blue-200 bg-[#F5FFFC] text-sm transition-colors hover:border-accent hover:bg-accent focus:border-accent focus:bg-accent focus:outline-0 md:h-9 md:w-9">
                    <svg
                      fill="#49AD91"
                      viewBox="0 0 24 24"
                      stroke="#49AD91"
                      className="h-5 w-5 stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <Card
                key={card.id}
                style={{ backgroundImage: `url(${card.image})`, backgroundRepeat: "no-repeat", objectFit: "cover", backgroundSize: "cover" }}
                className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-80"
              >
                <div className="text-light absolute left-2 top-2 rounded bg-accent bg-emerald-600 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-2 md:px-2.5 ltr:left-3 ltr:md:left-4 rtl:right-2 rtl:md:right-2">
                  {card.discount}
                </div>
                <CardHeader></CardHeader>
              </Card>
              <CardContent>
                <p>{card.name}</p>
              </CardContent>
              <CardFooter>
                <CardDescription>
                  <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                  ₹{card.sale_price}
                  </span>
                  {/* <del className="text-body ml-2 text-xs md:text-sm ltr:ml-2 rtl:mr-2">
                    {card.price}
                  </del> */}
                </CardDescription>
              </CardFooter>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
