import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

interface ProductCardProps {
  id?: number;
  img?: string;
  title?: string;
  price?: string;
  discountPrice?: string;
  discount?: string;
  content?: string;
  range?: string;
}

export function ProductCard({
  img,
  title,
  price,
  discountPrice,
  discount,
  content,
  range,
}: ProductCardProps) {
  return (
    <div className="card-wrapper relative">
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
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-80"
      >
        {/* <div className="text-light absolute left-2 top-2 rounded bg-accent bg-emerald-600 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-2 md:px-2.5 ltr:left-3 ltr:md:left-4 rtl:right-2 rtl:md:right-2">
          {discount || 0}
        </div> */}
      </Card>
      <p className="truncate text-[#505050] mt-[11px]">{content}</p>
      <CardFooter>
        <CardDescription>
          {discountPrice !== null ? (
            <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
              ₹{discountPrice}
            </span>
          ) : (
            <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
              ₹{range}
            </span>
          )}
          {/* <del className="text-body ml-2 text-xs md:text-sm ltr:ml-2 rtl:mr-2">
            {discountPrice}
          </del> */}
        </CardDescription>
      </CardFooter>
    </div>
  );
}
