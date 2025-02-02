import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardDescription } from "~/components/ui/card";
import { useGetProductsByColorQuery } from "~/store/api/productApi";
import { addItemToCart } from "~/store/slices/cartSlice";
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

export default function RecentCard() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  console.log(products, "Recent Product Data");

  useEffect(() => {
    let storedProduct: string;
    if (typeof window !== "undefined") {
      storedProduct = localStorage.getItem("productData");
    }

    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      const productArray = Array.isArray(parsedProduct)
        ? parsedProduct
        : [parsedProduct];
      setProducts(productArray);

      if (
        productArray.length > 0 &&
        productArray[0]?.data?.variables?.length > 0
      ) {
        setSelectedId(productArray[0].data.variables[0].id);
      }
    }
  }, []);

  const [selectedId, setSelectedId] = useState<number | null>(
    products?.data?.variables?.[0]?.id ?? null,
  );

  const handleCardClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddToCart = (product: any, selectedVariable: any) => {
    if (selectedVariable) {
      const price = Number(product.data.price);
      const sale_price = product.data.sale_price
        ? Number(product.data.sale_price)
        : price;

      dispatch(
        addItemToCart({
          id: Number(product.id),
          name: product.data.title,
          price: price,
          sale_price: sale_price,
          discount: Number(product.data.discount),
          featured_image: product.data.featured_image,
          variableId: selectedVariable.id,
          variableName: selectedVariable.name,
        }),
      );
    } else {
      console.error("No variable selected");
    }
  };

  if (products.length == 0) {
    return <div>No Recently Viewed products found.</div>;
  }

  return (
    <div className="3xl:pb-[60px] flex w-full flex-col pb-[20px] lg:container lg:m-auto lg:pb-[40px] xl:pb-[54px]">
      <div className="w-full">
        <div className="3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:gap-2 lg:px-0 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {products?.map((card: any, index) => (
            <div key={index} className="flex flex-row gap-3 md:flex-col">
              <Link
                href={`/product/${card.id}`}
                className="relative cursor-pointer"
              >
                <Card
                  style={{
                    backgroundImage: `url(${card.data.featured_image})`,
                  }}
                  className="relative z-0 h-[199px] w-[133px] items-center justify-center bg-cover md:h-[305px] md:w-auto"
                >
                  <div className="text-light absolute left-2 top-2 rounded bg-accent bg-emerald-600 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-2 md:px-2.5 ltr:left-3 ltr:md:left-4 rtl:right-2 rtl:md:right-2">
                    {card.data.discount || 0}%
                  </div>
                </Card>
              </Link>
              <CardContent className="" style={{ paddingTop: "0px" }}>
                <p className="text-xs font-medium md:text-base">
                  {card.data.title}
                </p>
                <div className="rating-wrapper flex items-center gap-1">
                  <div className="star-rating" style={{ width: "24px" }}>
                    <input
                      type="radio"
                      id="1-star"
                      name="rating"
                      value="1"
                      disabled
                      checked={Math.round(card.data.reviews.average) === 1}
                    />
                    <label htmlFor="1-star" className="star">
                      &#9733;
                    </label>
                  </div>
                  <div className="mr-4 text-[18px] text-[#49AD91]">
                    {card.data.reviews.average.toFixed(1)}
                    <span className="ml-2 text-[#A5A1A1]">
                      ({card.data.reviews.total_count})
                    </span>
                  </div>
                </div>

                <CardDescription className="mt-1 flex items-center justify-between gap-2">
                  {card?.data?.variables?.map((variable) => (
                    <div
                      key={`${card.id}-${variable.id}`}
                      onClick={() => handleCardClick(variable.id)}
                      className={`border-[#00000]-900 product-price-wrapper relative w-[100px] rounded-lg border-dashed p-2 md:w-full md:p-4 ${
                        selectedId === variable.id ? "bg-[#49AD911A]" : ""
                      }`}
                    >
                      {/* Discount Badge */}
                      <div className="inline rounded-[50px] bg-[#49AD911A] bg-opacity-10">
                        <span className="px-[7px] py-[2px] text-[10px] text-[#49AD91] md:text-xs">
                          {variable.discount}% off
                        </span>
                      </div>

                      {/* Product Dimensions */}
                      <div className="dimension text-[10px]">
                        {variable.name}
                      </div>

                      {/* Pricing Details */}
                      <div className="price-wrapper flex items-center gap-1">
                        <div className="real-price text-base text-[#49AD91] md:text-lg">
                          ₹{variable.sale_price}
                        </div>
                        <div className="discount-price text-[10px] text-[#BAB8B8] line-through">
                          ₹{variable.price}
                        </div>
                      </div>

                      {/* Price Per Unit */}
                      <div className="product-size text-[9px]">
                        ₹{(variable.sale_price / 6).toFixed(2)}/ft²
                      </div>

                      {/* Checkbox for High Discounts */}
                      {selectedId === variable.id && (
                        <div className="absolute right-3 top-5">
                          <input
                            type="checkbox"
                            id={`checkbox-${card.id}-${variable.id}`}
                            checked={selectedId === variable.id}
                            onChange={() => handleCardClick(variable.id)}
                          />

                          <label
                            htmlFor={`checkbox-${card.id}-${variable.id}`}
                          ></label>
                        </div>
                      )}
                    </div>
                  ))}
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <button
                    onClick={() => {
                      const selectedVariable = card.data.variables.find(
                        (v: any) => v.id === selectedId,
                      );
                      handleAddToCart(card, selectedVariable);
                    }}
                    className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex w-full items-center justify-center rounded bg-[#49AD91] p-1.5 text-[14px] font-medium text-white md:text-[18px]"
                  >
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
