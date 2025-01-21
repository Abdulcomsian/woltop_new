import banner from "../../../assets/banner/banner.png";

import product1 from "../../../assets/product/Woltop2222.png";
import product2 from "../../../assets/product/Woltop333333.png";
import product3 from "../../../assets/product/Woltop44444.png";
import product4 from "../../../assets/product/Woltop55555.png";
import { ArrowRight } from "~/components/icons/Arrowfill";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

export default function categorieCard() {
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      img: product1,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "5%",
      content: "Science Fiction",
    },
    {
      id: 2,
      title: "Card Title 2",
      img: product2,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "16%",
      content: "Literature",
    },
    {
      id: 3,
      title: "Card Title 3",
      img: product3,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "10%",
      content: "Children's Literature",
    },
    {
      id: 4,
      title: "Card Title 4",
      img: product4,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "12%",
      content: "Comic books",
    },
  ];

  return (
    <div className="3xl:pb-[60px] flex w-full flex-col pb-[20px] lg:container lg:m-auto lg:pb-[40px] xl:pb-[54px]">
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
      <div className="w-full">
        <div className="3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid grid-cols-2 gap-5 gap-y-10 md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:gap-2 lg:px-0 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {cardData.map((card) => (
            <div key={card.id} style={{ width: "100%", marginRight: "24px" }}>
              <a>
                <div className="card-wrapper relative">
                  <div className="absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2">
                    <div className="flex w-11/12 justify-end"></div>
                  </div>

                  <Card
                    style={{ backgroundImage: `url(${card.img.src})`, backgroundSize: "cover" }}
                    className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-[345]"
                  >
                    <CardHeader></CardHeader>

                    {/* <p>{card.price}</p> */}
                  </Card>

                  <div className="mt-3 flex items-center justify-between px-2.5 md:px-0">
                    <span className="text-heading text-[#383434] text-base font-normal transition-colors group-hover:text-orange-500 md:text-[20px] ltr:text-left rtl:text-right">
                      {card.content}
                    </span>
                    <ArrowRight />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
