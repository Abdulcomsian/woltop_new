import { Plus } from "lucide-react";
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

export default function RecentCard({ colorId }: DetailCardProps) {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByColorQuery((colorId as unknown as string) || "1");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products.</div>;
  }

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

  return (
    <div className="3xl:pb-[60px] flex w-full flex-col pb-[20px] lg:container lg:m-auto lg:pb-[40px] xl:pb-[54px]">
      <div className="w-full">
        <div className="3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:gap-2 lg:px-0 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {cardData.map((card: any) => (
            <div className="flex flex-row gap-3 md:flex-col" key={card.id}>
              <Link
                href={`/product/${card.id}`}
                className="relative cursor-pointer"
              >
                <Card
                  key={card.id}
                  style={{ backgroundImage: `url(${card.img})` }}
                  className="relative z-0 h-[199px] w-[133px] items-center justify-center bg-cover md:h-[305px] md:w-auto"
                >
                  <div className="text-light absolute left-2 top-2 rounded bg-accent bg-emerald-600 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-2 md:px-2.5 ltr:left-3 ltr:md:left-4 rtl:right-2 rtl:md:right-2">
                    {card.discount}
                  </div>
                </Card>
              </Link>
              <CardContent className="" style={{ paddingTop: "0px" }}>
                <p className="text-xs font-medium md:text-base">
                  {card.content}
                </p>
                <div className="flex gap-2 text-xs md:text-sm">
                  <label
                    htmlFor="5-stars"
                    className="star text-xl text-yellow-400"
                  >
                    &#9733;
                  </label>
                  <div className="mr-4 mt-1 text-[#49AD91]">
                    4.6
                    <span className="ml-2 text-[#A5A1A1]">(95)</span>
                  </div>
                </div>
                <CardDescription className="mt-1 flex items-center justify-between gap-2">
                  <div className="border-[#00000]-900 product-price-wrapper w-[100px] rounded-lg border-dashed p-2 md:w-full md:p-4">
                    <div className="inline-block rounded-full bg-[#49AD911A]">
                      <span className="px-2 py-0 text-[8px] text-[#49AD91]">
                        49% off{" "}
                      </span>{" "}
                    </div>
                    <div className="dimension text-[10px]">53CM x 6M</div>
                    <div className="price-wrapper flex items-center gap-1">
                      <div className="real-price text-base text-[#49AD91] md:text-lg">
                        ₹799
                      </div>
                      <div className="discount-price text-[10px] text-[#BAB8B8] line-through">
                        ₹1630
                      </div>
                    </div>
                    <div className="text-[9px]">₹23.5/ft²</div>
                  </div>

                  <div className="border-[#49AD91]-900 product-price-wrapper relative w-[100px] rounded-lg border-dashed bg-[#49AD911A] p-2 md:w-full md:p-4">
                    <div className="inline-block rounded-full bg-[#49AD911A]">
                      <span className="px-2 py-0 text-[8px] text-[#49AD91]">
                        50% off{" "}
                      </span>{" "}
                    </div>
                    <div className="dimension text-[10px]">53CM x 6M</div>
                    <div className="price-wrapper flex items-center gap-1">
                      <div className="real-price text-base text-[#49AD91] md:text-lg">
                        ₹799
                      </div>
                      <div className="discount-price text-[10px] text-[#BAB8B8] line-through">
                        ₹1149
                      </div>
                    </div>
                    <div className="text-[9px]">₹23.5/ft²</div>
                    <div className="absolute right-0 top-3">
                      <input type="checkbox" id="test1" />
                      <label htmlFor="test1"></label>
                    </div>
                  </div>
                </CardDescription>
                <div className="mt-2 flex items-center gap-3">
                  <div className="rounded-full border p-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172Z"
                        stroke="#A5A1A1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <button className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex w-full items-center justify-center rounded bg-[#49AD91] p-1.5 text-[14px] font-medium text-white md:text-[18px]">
                    <Plus />
                    ADD
                  </button>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
