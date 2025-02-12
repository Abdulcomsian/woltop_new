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
}
export default function PopularWallpaper({ products }: PopularWallpaperProps) {
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
    <div className="flex w-full flex-col">
      <h3 className="3xl:text-3xl font-poppins text-xl mb-[26px] md:mb-[43px] mx-auto font-semibold lg:text-[27px]">
        Popular Wallpaper
      </h3>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {cardData.map((card) => (
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
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
