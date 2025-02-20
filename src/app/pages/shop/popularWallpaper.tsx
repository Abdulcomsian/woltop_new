import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { ProductCard } from "~/components/products/productCard";
import Link from "next/link";

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
  isLoading: boolean; // Added isLoading prop to handle loading state
}

export default function PopularWallpaper({ products, isLoading }: PopularWallpaperProps) {
  const cardData = products?.data?.map((product) => ({
    id: product.id,
    title: product.title,
    img: product.featured_image,
    description: product.price,
    price: product.price,
    range: product?.range?.sale_price,
    discountPrice: product.sale_price,
    discount: `${product.discount}%`,
    content: `${product.title}`,
  }));

  if (isLoading) {
    return (
      <div className="flex w-full flex-col">
        <h3 className="font-poppins text-[#000000] text-2xl mb-[26px] md:mb-[43px] mx-auto font-semibold lg:text-[34px]">
          Popular Wallpaper
        </h3>
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array(4) // Adjust the number based on the expected grid items
              .fill(null)
              .map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 h-[250px] w-full rounded-lg"></div>
                  <div className="mt-4 bg-gray-300 h-[20px] w-3/4 rounded-md"></div>
                  <div className="mt-2 bg-gray-300 h-[15px] w-1/2 rounded-md"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <h3 className="font-poppins text-[#000000] text-2xl mb-[26px] md:mb-[43px] mx-auto font-semibold lg:text-[34px]">
        Popular Wallpaper
      </h3>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {cardData?.map((card) => (
            <Link key={card?.id} href={`/product/${card.id}`}>
              <ProductCard
                key={card.id}
                id={card.id}
                img={card.img}
                title={card.title}
                price={card.price}
                discountPrice={card.discountPrice}
                discount={card.discount}
                content={card.content}
                range={card?.range}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
