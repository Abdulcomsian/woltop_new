import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { useGetProductsByColorQuery } from "~/store/api/productApi";

type DetailCardProps = {
  rating?: boolean;
  colorId: number;
};

interface Product {
  id: number;
  title: string;
  featured_image: string;
  price: string;
  sale_price: string;
  discount: string;
}

export default function DetailCard({ colorId }) {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByColorQuery((colorId as unknown as string) || "1");

  const cardData = products?.data.map((product: Product) => ({
    id: product?.id,
    title: product?.title,
    img: product?.featured_image,
    description: product.price,
    price: product.price,
    discountPrice: product.sale_price,
    discount: `${product.discount}%`,
    content: `${product.title}`,
  }));

  const SkeletonCard = () => (
    <Card className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-80 animate-pulse bg-gray-200">
      <CardContent>
        <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
      </CardContent>
      <CardFooter>
        <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
      </CardFooter>
    </Card>
  );

  return (
    <div className="flex w-full flex-col">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading
            ? Array(cardData?.length)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index} />)
            : cardData?.map((card: any) => (
                <Link
                  key={card?.id}
                  href={`/product/${card.id}`}
                  className="card-wrapper relative cursor-pointer"
                >
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
                    style={{
                      backgroundImage: `url(${card.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-80"
                  ></Card>
                  <CardContent>
                    <p className="text-[#505050] truncate">{card.content}</p>
                  </CardContent>
                  <CardFooter>
                    <CardDescription>
                      <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                        ₹{card.discountPrice || 0}
                      </span>
                    </CardDescription>
                  </CardFooter>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
