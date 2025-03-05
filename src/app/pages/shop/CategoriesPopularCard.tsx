"use client";
import { Drawer } from "antd";
import { Check, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Card, CardContent, CardDescription } from "~/components/ui/card";
import { addItemToCart } from "~/store/slices/cartSlice";
import utils from "~/utils";

export default function CategoriesPopularCard({ responseData, isLoading }) {
  const products = responseData;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cartData = useSelector((state: any) => state?.cart);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddToCart = (product: any, selectedVariable: any) => {
    if (product?.variables?.length > 0 && !selectedVariable) {
      toast.warning("Please select a variant before adding to cart");
      return;
    }

    let price, sale_price, discount, variableId, variableName;

    if (selectedVariable) {
      price = Number(selectedVariable.price);
      sale_price = selectedVariable.sale_price
        ? Number(selectedVariable.sale_price)
        : price;
      discount = Number(selectedVariable.discount);
      variableId = selectedVariable.id;
      variableName = selectedVariable.name;
    } else {
      price = Number(product.data.price);
      sale_price = product.data.sale_price
        ? Number(product.data.sale_price)
        : price;
      discount = Number(product.data.discount);
      variableId = null;
      variableName = "Default";
    }

    const existingItem = cartData.items.find(
      (item) =>
        item.id === Number(product.id) && item.variableId === variableId,
    );

    console.log(existingItem, "extis item");
    if (existingItem) {
      toast.info("Product is already in the cart");
      return;
    }

    console.log(product.id, "Product ID");
    dispatch(
      addItemToCart({
        id: Number(product.id),
        name: product.title,
        price: price,
        sale_price: sale_price,
        discount: discount,
        featured_image: product.featured_image,
        variableId: variableId,
        variableName: variableName,
      }),
    );
    setIsDrawerOpen(true);
  };

  const handleAddToWishlist = async (productId: number) => {
    if (!isLoggedIn) {
      toast.warning("You need to login first add to wishlist");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("product_id", productId.toString());

      const response = await fetch(`${utils.BASE_URL}/store-wishlist`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Product added to wishlist");
      } else {
        toast.error("Failed to add to wishlist");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lastItemPrice =
    cartData?.items?.[cartData.items.length - 1]?.sale_price || 0;

  if (isLoading) {
    return (
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-row gap-3 sm:flex-col">
                <div className="relative cursor-pointer">
                  <Card className="relative z-0 h-[199px] w-[133px] animate-pulse items-center justify-center bg-gray-200 sm:w-auto md:h-[305px]"></Card>
                </div>
                <CardContent className="w-full" style={{ paddingTop: "0px" }}>
                  <div className="mb-2 h-4 w-3/4 animate-pulse bg-gray-300"></div>
                  <div className="rating-wrapper mb-2 flex items-center gap-1">
                    <div className="h-4 w-16 animate-pulse bg-gray-300"></div>
                  </div>
                  <CardDescription className="mt-1 flex items-center justify-between gap-2">
                    <div className="h-4 w-24 animate-pulse bg-gray-300"></div>
                  </CardDescription>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300"></div>
                    <button className="h-10 w-full animate-pulse rounded bg-gray-300"></button>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (products?.length !== 0) {
    return (
      <>
        <div className="flex w-full flex-col">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
              {products?.map((card: any, index) => (
                <div key={index} className="flex flex-row gap-3 sm:flex-col">
                  <Link
                    href={`/product/${card?.id}`}
                    className="relative cursor-pointer"
                  >
                    <Card
                      style={{
                        backgroundImage: `url(${card?.featured_image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="relative z-0 h-[199px] w-[133px] items-center justify-center bg-cover sm:w-auto md:h-[305px]"
                    ></Card>
                  </Link>
                  <CardContent className="w-full" style={{ paddingTop: "0px" }}>
                    <p className="truncate text-xs font-normal text-[#000000] md:text-base">
                      {card.title}
                    </p>
                    <div className="rating-wrapper flex items-center gap-1">
                      <div className="star-rating" style={{ width: "24px" }}>
                        <input
                          type="radio"
                          id="1-star"
                          name="rating"
                          value="1"
                          disabled
                          checked={Math.round(card?.reviews?.average) === 1}
                        />
                        <label htmlFor="1-star" className="star">
                          &#9733;
                        </label>
                      </div>
                      <div className="mr-4 text-[18px] text-[#49AD91]">
                        {card?.reviews?.average?.toFixed(1)}
                        <span className="ml-2 text-[#A5A1A1]">
                          ({card?.reviews?.total_count || 0})
                        </span>
                      </div>
                    </div>

                    <CardDescription className="mb-4 mt-4 flex items-center justify-between gap-2 md:mt-1">
                      {card?.variables?.length > 0 ? (
                        card.variables.map((variable) => (
                          <div
                            key={`${card.id}-${variable.id}`}
                            onClick={() => handleCardClick(variable.id)}
                            className={`border-[#00000]-900 product-price-wrapper relative w-[100px] cursor-pointer rounded-sm border-dashed px-[11px] py-[6px] md:w-full ${
                              selectedId === variable.id ? "bg-[#49AD911A]" : ""
                            }`}
                            style={{
                              borderColor:
                                selectedId === variable.id
                                  ? "#49AD91"
                                  : "#D9D9D9",
                            }}
                          >
                            <div className="inline rounded-[50px] bg-[#49AD911A] bg-opacity-10">
                              <span className="px-[7px] py-[2px] text-[10px] text-[#49AD91] md:text-xs">
                                {variable.discount}% off
                              </span>
                            </div>

                            <div className="dimension text-[10px]">
                              {variable.name}
                            </div>

                            <div className="price-wrapper flex items-center gap-1">
                              <div className="real-price text-base text-[#49AD91] md:text-lg">
                                ₹{variable.sale_price}
                              </div>
                              <div className="discount-price text-[10px] text-[#BAB8B8] line-through">
                                ₹{variable.price}
                              </div>
                            </div>

                            <div className="product-size text-[9px]">
                              ₹{(variable.sale_price / 6).toFixed(2)}/ft²
                            </div>

                            {selectedId === variable.id && (
                              <div className="absolute right-1 top-1">
                                <input
                                  type="checkbox"
                                  id={`checkbox-${card.id}-${variable.id}`}
                                  checked={selectedId === variable.id}
                                  onChange={() => handleCardClick(variable.id)}
                                />
                                <Check
                                  color="white"
                                  size={16}
                                  className="rounded-full bg-[#49AD91] p-[2px]"
                                />
                                <label
                                  htmlFor={`checkbox-${card.id}-${variable.id}`}
                                ></label>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="border-[#00000]-900 product-price-wrapper relative h-[79px] w-full rounded-sm border-dashed px-[11px] py-[6px] md:h-[81px] md:w-full">
                          <div className="price-wrapper flex items-center gap-1">
                            <div className="real-price text-base text-[#49AD91] md:text-lg">
                              ₹{card.sale_price}
                            </div>
                            <div className="discount-price text-[10px] text-[#BAB8B8] line-through">
                              ₹{card.price}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardDescription>
                    <div className="mt-2 flex items-center gap-3">
                      <div
                        onClick={() => handleAddToWishlist(card.id)}
                        className="cursor-pointer rounded-full border-[0.5px] border-[#A5A1A1] p-1 md:p-1.5"
                      >
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
                          const selectedVariable = card.variables.find(
                            (v: any) => v.id === selectedId,
                          );
                          handleAddToCart(card, selectedVariable);
                        }}
                        className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex w-full items-center justify-center gap-1 rounded bg-[#49AD91] p-1.5 text-xs font-medium text-white md:text-[18px]"
                      >
                        <Plus className="h-3 w-3 md:h-5 md:w-5" />
                        ADD
                      </button>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Drawer
          placement="bottom"
          onClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
          height={100}
          styles={{
            header: { display: "none" },
          }}
        >
          <div className="mx-auto flex w-fit items-center justify-center gap-[10px] md:gap-10">
            <div className="flex items-center justify-center gap-[10px]">
              {cartData?.items?.slice(0, itemsToShow).map((item, index) => (
                <div
                  key={item.id || `item-${index}`}
                  className="border-border-200 flex w-full gap-3 border-opacity-75 text-sm md:gap-[18px]"
                >
                  <Link
                    href={`/product/${item?.id}`}
                    className="relative flex h-[48px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded bg-gray-100"
                  >
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      src={
                        item?.featured_image ||
                        "https://placehold.co/600x400.png"
                      }
                    />
                  </Link>
                </div>
              ))}
              {cartData?.items?.length > itemsToShow && (
                <span
                  className="flex min-w-12 text-xs font-semibold"
                  style={{
                    visibility:
                      cartData?.items?.length > itemsToShow
                        ? "visible"
                        : "hidden",
                    opacity: cartData?.items?.length > itemsToShow ? 1 : 0,
                  }}
                >
                  +{cartData.items.length - itemsToShow} items
                </span>
              )}
            </div>
            <Link
              href="/cart"
              onClick={() => setIsDrawerOpen(false)}
              className="flex h-[40px] min-w-[175px] items-center justify-center rounded bg-[#49AD91] px-4 py-2 text-sm font-bold uppercase text-white shadow-md"
            >
              ₹ {lastItemPrice} • Go to Cart
            </Link>
          </div>
        </Drawer>
      </>
    );
  }
}
