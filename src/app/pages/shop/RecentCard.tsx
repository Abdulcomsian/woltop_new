"use client";
import { Drawer } from "antd";
import { Check, Minus, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoginModal from "~/components/LoginModal";
import { Card, CardContent, CardDescription } from "~/components/ui/card";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "~/store/slices/cartSlice";
import utils from "~/utils";
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
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector(
    (state: { user: { isLoggedIn: boolean } }) => state.user,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cartData = useSelector((state: any) => state?.cart);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [addingToCart, setAddingToCart] = useState<{
    productId: number;
    variableId: number | null;
  } | null>(null);
  const [loadingItem, setLoadingItem] = useState<{
    itemId: number;
    variableId: number;
    action: "delete" | "increment" | "decrement";
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedProduct = localStorage.getItem("recentProducts");
      if (storedProduct) {
        const parsedProduct = JSON.parse(storedProduct);
        const productArray = Array.isArray(parsedProduct)
          ? parsedProduct
          : [parsedProduct];
        setProducts(productArray);
      }
      setIsLoading(false);
    }
  }, []);
  console.log(products, "recent item");

  useEffect(() => {
    if (products.length > 0 && products[0]?.data?.variables?.length > 0) {
      setSelectedId(products[0].data.variables[0].id);
    }
  }, [products]);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddToCart = (product: any, selectedVariable: any) => {
    if (product?.data?.variables?.length > 0 && !selectedVariable) {
      toast.warning("Please select a variant before adding to cart");
      return;
    }

    setAddingToCart({
      productId: product.data.id,
      variableId: selectedVariable?.id || null,
    });

    setTimeout(async () => {
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

      if (existingItem) {
        toast.info("Product is already in the cart");
        setAddingToCart(null);
        return;
      }

      dispatch(
        addItemToCart({
          id: Number(product.data.id),
          name: product.data.title,
          price: price,
          sale_price: sale_price,
          discount: discount,
          featured_image: product.data.featured_image,
          variableId: variableId,
          variableName: variableName,
        }),
      );
      try {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("product_id", product.data.id.toString());
        formData.append("variable_id", selectedVariable ? selectedVariable.id.toString() : "");

        const response = await fetch(`${utils.BASE_URL}/store-cart`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await response.json();
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }

      setIsDrawerOpen(true);
      setAddingToCart(null);
    }, 1000);
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

  const handleIncrement = (itemId: number, variableId: number) => {
    const item = cartData.items.find(
      (item: any) => item.id === itemId && item.variableId === variableId,
    );
    if (item) {
      setLoadingItem({ itemId, variableId, action: "increment" });
      setTimeout(() => {
        dispatch(
          updateItemQuantity({
            id: itemId,
            variableId,
            quantity: item.quantity + 1,
          }),
        );
        setLoadingItem(null);
      }, 1000);
    }
  };

  const handleDecrement = async (itemId: number, variableId: number) => {
    const item = cartData.items.find(
      (item: any) => item.id === itemId && item.variableId === variableId,
    );

    if (item) {
      if (item.quantity === 1) {
        setLoadingItem({ itemId, variableId, action: "delete" });

        setTimeout(() => {
          dispatch(removeItemFromCart({ id: itemId, variableId }));
                }, 1000);

        setTimeout(async () => {
          try {
            const token = localStorage.getItem("token");
            const response = await fetch(
              `${utils.BASE_URL}/delete-cart-item/${itemId}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              },
            );

            
            if (!response.ok) {
              console.warn("Failed to delete item from API");
            }
          } catch (error) {
            console.error("Error removing item:", error);
          } finally {
            setLoadingItem(null);
          }
        }, 1000);
      } else {
        setLoadingItem({ itemId, variableId, action: "decrement" });

        setTimeout(() => {
          dispatch(
            updateItemQuantity({
              id: itemId,
              variableId,
              quantity: item.quantity - 1,
            }),
          );
          setLoadingItem(null);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchWishlistItems();
    }
  }, [isLoggedIn]);

  const fetchWishlistItems = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${utils.BASE_URL}/show-wishlist-items`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.status) {
        setWishlistItems(data.data);
      } else {
        console.log("Failed to fetch wishlist items.");
      }
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToWishlist = async (productId: number) => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (isProductInWishlist(productId)) {
        setWishlistItems((prev) =>
          prev.filter((item) => item.id !== productId),
        );

        await fetch(`${utils.BASE_URL}/delete-wishlist-item/${productId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      } else {
        setWishlistItems((prev) => [...prev, { id: productId }]);

        const formData = new FormData();
        formData.append("product_id", productId.toString());

        const response = await fetch(`${utils.BASE_URL}/store-wishlist`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  const isProductInWishlist = (productId: number) => {
    return wishlistItems.some((item) => item.id === productId);
  };

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
          <div className="mb-[18px] text-center md:mb-[35px]">
            <h1 className="text-[22px] font-semibold text-[#000000] md:text-[34px]">
              Recently Viewed
            </h1>
            <h3 className="text-xs font-normal text-[#7A7474] md:text-[22px]">
              Continue where you left off
            </h3>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
              {products?.map((card: any, index) => (
                <div key={index} className="flex flex-row gap-3 sm:flex-col">
                  <Link
                    href={`/product/${card.data.id}`}
                    className="relative cursor-pointer"
                  >
                    <Card
                      style={{
                        backgroundImage: `url(${card.data.featured_image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="relative z-0 h-[199px] w-[133px] items-center justify-center bg-cover sm:w-auto md:h-[305px]"
                    ></Card>
                  </Link>
                  <CardContent className="w-full" style={{ paddingTop: "0px" }}>
                    <p className="truncate text-xs font-normal text-[#000000] md:text-base">
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

                    <CardDescription className="mb-4 mt-4 flex items-center justify-between gap-2 md:mt-1">
                      {card?.data?.variables?.length > 0 ? (
                        card.data.variables.map((variable) => (
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
                          <div className="inline rounded-[50px] bg-[#49AD911A] bg-opacity-10">
                            <span className="px-[7px] py-[2px] text-[10px] text-[#49AD91] md:text-xs">
                              {card.data.discount}% off
                            </span>
                          </div>
                          <div className="price-wrapper flex items-center gap-1">
                            <div className="real-price text-base text-[#49AD91] md:text-lg">
                              ₹{card.data.sale_price}
                            </div>
                            <div className="discount-price text-[10px] text-[#BAB8B8] line-through">
                              ₹{card.data.price}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardDescription>
                    <div className="mt-2 flex items-center gap-3">
                      <div
                        onClick={() => handleAddToWishlist(card.data.id)}
                        className="cursor-pointer rounded-full border-[0.5px] border-[#A5A1A1] p-[2px] md:p-1"
                      >
                        {isProductInWishlist(card.data.id) ? (
                          <IoMdHeart size={22} color="red" />
                        ) : (
                          <IoMdHeartEmpty size={22} color="gray" />
                        )}
                      </div>

                      {cartData.items.some((item) => {
                        if (card.data.variables?.length > 0) {
                          return (
                            item.id === card.data.id &&
                            item.variableId === selectedId
                          );
                        } else {
                          return item.id === card.data.id;
                        }
                      }) ? (
                        <div className="flex h-[29px] md:h-[34px] w-full justify-between rounded border border-[#49AD91]">
                          <button
                            className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded px-[15px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                            onClick={() =>
                              handleDecrement(
                                card.data.id,
                                card.data.variables?.length > 0
                                  ? selectedId
                                  : null,
                              )
                            }
                          >
                            <span className="sr-only">minus</span>
                            <Minus />
                          </button>
                          <div className="flex items-center justify-center bg-[#49AD91] px-[26px] md:px-[36px] text-sm font-semibold text-[#fff]">
                            {loadingItem?.itemId === card.data.id &&
                            loadingItem?.variableId ===
                              (card.data.variables?.length > 0
                                ? selectedId
                                : null) &&
                            (loadingItem?.action === "increment" ||
                              loadingItem?.action === "delete" ||
                              loadingItem?.action === "decrement") ? (
                              <div
                                className="spinner-border inline-block h-4 w-4 animate-spin rounded-full border-2"
                                role="status"
                              ></div>
                            ) : (
                              <div>
                                {cartData.items.find(
                                  (item) =>
                                    item.id === card.data.id &&
                                    item.variableId ===
                                      (card.data.variables?.length > 0
                                        ? selectedId
                                        : null),
                                )?.quantity || 0}
                              </div>
                            )}
                          </div>
                          <button
                            className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded px-[15px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                            onClick={() =>
                              handleIncrement(
                                card.data.id,
                                card.data.variables?.length > 0
                                  ? selectedId
                                  : null,
                              )
                            }
                          >
                            <span className="sr-only">plus</span>
                            <Plus />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            const selectedVariable = selectedId
                              ? card.data.variables?.find(
                                  (v) => v.id === selectedId,
                                )
                              : null;
                            handleAddToCart(card, selectedVariable);
                          }}
                          className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex w-full items-center justify-center gap-1 rounded bg-[#49AD91] p-1.5 text-xs font-medium text-white md:text-[18px]"
                        >
                          {addingToCart?.productId === card.data.id &&
                          addingToCart?.variableId === selectedId ? (
                            <div
                              className="spinner-border inline-block h-4 w-4 animate-spin rounded-full border-2 border-white"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            <>
                              <Plus className="h-3 w-3 md:h-5 md:w-5" />
                              ADD
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </div>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />

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
