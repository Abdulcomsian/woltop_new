import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { ProductCard } from "~/components/products/productCard";
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
    <div className="3xl:pb-[60px] flex w-full flex-col pb-[20px] lg:pb-[40px] xl:pb-[54px]">
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
      <div className="w-full">
        <div className="3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid grid-cols-2 gap-5 gap-y-10 px-3 md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:gap-2 lg:px-0 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {cardData.map((card) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
