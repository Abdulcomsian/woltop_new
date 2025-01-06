import banner from "../../../assets/banner/banner.png";
import product1 from "../../../assets/product/Woltop2222.png";
import product2 from "../../../assets/product/Woltop333333.png";
import product3 from "../../../assets/product/Woltop44444.png";
import product4 from "../../../assets/product/Woltop55555.png";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
interface Product {
  id: number;
  title: string;
  featured_image: string;
  price: string;
  sale_price: string;
  discount: string;
}
interface ProductResponse {
  data: Product[];
}
interface PopularWallpaperProps {
  products: ProductResponse;
}
export default function PopularWallpaper({ products }: PopularWallpaperProps) {
  console.log("Products", products);

  const cardData = products.data.map((product) => ({
    id: product.id,
    title: product.title,
    img: product.featured_image,
    description: product.price,
    price: product.price,
    discountPrice: product.sale_price,
    discount: `${product.discount}%`,
    content: `${product.title} - Description`, // You can modify this as needed
  }));
  return (
    <div className="3xl:pb-[60px] flex w-full flex-col pb-[20px] lg:pb-[40px] xl:pb-[54px]">
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
      <div className="w-full">
        <div className="3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid grid-cols-2 gap-5 gap-y-10 px-3 md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:gap-2 lg:px-0 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {cardData.map((card) => (
            <a>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <Card
                  key={card.id}
                  style={{ backgroundImage: `url(${card.img})` }}
                  className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-80"
                >
                  <div className="text-light absolute left-2 top-2 rounded bg-accent bg-emerald-600 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-2 md:px-2.5 ltr:left-3 ltr:md:left-4 rtl:right-2 rtl:md:right-2">
                    {card.discount}
                  </div>
                  <CardHeader></CardHeader>

                  {/* <p>{card.price}</p> */}
                </Card>
                <CardContent>
                  <p>{card.content}</p>
                </CardContent>
                <CardFooter>
                  {/* <CardTitle className="text-blue-500">{card.title}</CardTitle> */}
                  <CardDescription>
                    <span className="text-heading text-sm font-semibold md:text-base">
                      {card.price}
                    </span>
                    <del className="text-body ml-2 text-xs md:text-sm ltr:ml-2 rtl:mr-2">
                      {card.discountPrice}
                    </del>
                  </CardDescription>
                </CardFooter>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
