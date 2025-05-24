import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "~/store/slices/cartSlice";
import { toast } from "react-toastify";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Drawer } from "antd";
import { Minus, Plus } from "lucide-react";
import utils from "~/utils";
import Image from "next/image";
import cloudflareLoader from "~/lib/cloudflare-loader";

interface Product {
  id: number;
  title: string;
  featured_image: string;
  price: string;
  sale_price: string;
  discount: string;
  range?: { sale_price: string };
  variables?: any[];
}

interface ProductResponse {
  data: Product[];
}

interface PopularWallpaperProps {
  products: ProductResponse;
  isLoading: boolean;
}

export default function PopularWallpaper({
  products,
  isLoading,
}: PopularWallpaperProps) {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(2);
  const [loadingItem, setLoadingItem] = useState<{
    itemId: number;
    action: "delete" | "increment" | "decrement";
  } | null>(null);

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoized product data
  const PopularcardData = useMemo(() => {
    return products?.data?.map((product) => ({
      id: product.id,
      title: product.title,
      featured_image: product.featured_image,
      price: product.price,
      sale_price: product.sale_price,
      discount: `${product.discount}%`,
      range: product.range?.sale_price,
      variables: product.variables?.length,
    }));
  }, [products?.data]);

  const lastItemPrice = useMemo(() => {
    return cartData?.items?.[cartData.items.length - 1]?.sale_price || 0;
  }, [cartData.items]);

  // Optimized cart item handlers
  const handleAddToCart = useCallback(
    async (product: Product) => {
      const existingItem = cartData.items.find(
        (item: any) => item.id === product.id,
      );
      if (existingItem) {
        toast.info("Product is already in the cart");
        return;
      }

      dispatch(
        addItemToCart({
          id: product.id,
          name: product.title,
          price: Number(product.price),
          sale_price: product.sale_price
            ? Number(product.sale_price)
            : Number(product.price),
          discount: Number(product.discount.replace("%", "")),
          featured_image: product.featured_image,
          variableId: null,
          variableName: "Default",
        }),
      );

      try {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("product_id", product.id.toString());

        await fetch(`${utils.BASE_URL}/store-cart`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
      setIsDrawerOpen(true);
    },
    [cartData.items, dispatch],
  );

  const handleIncrement = useCallback(
    (itemId: number) => {
      const item = cartData.items.find((item: any) => item.id === itemId);
      if (item) {
        setLoadingItem({ itemId, action: "increment" });
        setTimeout(() => {
          dispatch(
            updateItemQuantity({
              id: itemId,
              variableId: null,
              quantity: item.quantity + 1,
            }),
          );
          setLoadingItem(null);
        }, 500); // Reduced timeout
      }
    },
    [cartData.items, dispatch],
  );

  const handleDecrement = useCallback(
    (itemId: number) => {
      const item = cartData.items.find((item: any) => item.id === itemId);
      if (item) {
        if (item.quantity === 1) {
          setLoadingItem({ itemId, action: "delete" });
          setTimeout(() => {
            dispatch(removeItemFromCart({ id: itemId, variableId: null }));
          }, 500); // Reduced timeout

          setTimeout(async () => {
            try {
              const token = localStorage.getItem("token");
              await fetch(`${utils.BASE_URL}/delete-cart-item/${itemId}`, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              });
            } catch (error) {
              console.error("Error removing item:", error);
            } finally {
              setLoadingItem(null);
            }
          }, 500); // Reduced timeout
        } else {
          setLoadingItem({ itemId, action: "decrement" });
          setTimeout(() => {
            dispatch(
              updateItemQuantity({
                id: itemId,
                variableId: null,
                quantity: item.quantity - 1,
              }),
            );
            setLoadingItem(null);
          }, 500); // Reduced timeout
        }
      }
    },
    [cartData.items, dispatch],
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="flex w-full flex-col">
        <h3 className="mx-auto mb-[26px] font-poppins text-2xl font-semibold text-[#000000] md:mb-[43px] lg:text-[34px]">
          Popular Wallpaper
        </h3>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-[250px] w-full rounded-lg bg-gray-300"></div>
                  <div className="mt-4 h-[20px] w-3/4 rounded-md bg-gray-300"></div>
                  <div className="mt-2 h-[15px] w-1/2 rounded-md bg-gray-300"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full flex-col">
        <h3 className="mx-auto mb-[26px] font-poppins text-2xl font-semibold text-[#000000] md:mb-[43px] lg:text-[34px]">
          Popular Wallpaper
        </h3>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {PopularcardData?.map((card) => (
              <div key={card.id} className="card-wrapper relative">
                {!card?.variables && (
                  <>
                    {cartData.items.some((item) => item.id === card.id) ? (
                      <div className="absolute -right-7 top-0 z-40 flex h-[38px] -translate-y-1/2 rounded border border-[#49AD91]">
                        <button
                          className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded-l bg-white px-[15px] py-[11px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                          onClick={() => handleDecrement(card.id)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="flex items-center justify-center bg-[#49AD91] px-[20px] py-[11px] text-sm font-semibold text-[#fff]">
                          {loadingItem?.itemId === card?.id ? (
                            <div className="spinner-border inline-block h-4 w-4 animate-spin rounded-full border-2" />
                          ) : (
                            cartData.items.find((item) => item.id === card.id)
                              ?.quantity || 0
                          )}
                        </div>
                        <button
                          className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded-r bg-white px-[15px] py-[11px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                          onClick={() => handleIncrement(card.id)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2">
                        <div className="flex w-11/12 justify-end">
                          <button
                            onClick={() =>
                              handleAddToCart(card as unknown as Product)
                            }
                            className="text-heading hover:text-light focus:text-light flex h-7 w-7 items-center justify-center rounded border border-blue-200 bg-[#F5FFFC] text-sm transition-colors hover:border-accent hover:bg-accent focus:border-accent focus:bg-accent focus:outline-0 md:h-9 md:w-9"
                            aria-label="Add to cart"
                          >
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
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                <Link href={`/product/${card.id}`} passHref>
                  <div className="block">
                    <div className="custom-card-class relative z-0 h-52 w-auto items-center justify-center rounded-lg md:h-80">
                      <Image
                        src={card.featured_image}
                        loader={cloudflareLoader}
                        className="absolute h-full w-full rounded-lg object-cover"
                        width={470}
                        height={550}
                        alt={card.title}
                        priority={false} // Changed to false for lazy loading
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={65}
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-[11px] truncate text-[#505050]">
                      {card.title}
                    </p>
                    <div className="mt-2">
                      <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                        ₹{card.sale_price || card.range}
                      </span>
                    </div>
                  </div>
                </Link>
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
        styles={{ header: { display: "none" } }}
        destroyOnClose
      >
        <div className="mx-auto flex w-fit items-center justify-center gap-[10px] md:gap-10">
          <div className="flex items-center justify-center gap-[10px]">
            {cartData?.items?.slice(0, itemsToShow).map((item) => (
              <div
                key={item.id}
                className="border-border-200 flex w-full gap-3 border-opacity-75 text-sm md:gap-[18px]"
              >
                <Link
                  href={`/product/${item.id}`}
                  className="relative flex h-[48px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded bg-gray-100"
                  passHref
                  legacyBehavior
                >
                  <a>
                    <Image
                      loader={cloudflareLoader}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      src={
                        item.featured_image ||
                        "https://placehold.co/600x400.png"
                      }
                      width={30}
                      height={48}
                      loading="lazy"
                    />
                  </a>
                </Link>
              </div>
            ))}
            {cartData?.items?.length > itemsToShow && (
              <span className="flex min-w-12 text-xs font-semibold">
                +{cartData.items.length - itemsToShow} items
              </span>
            )}
          </div>
          <Link
            href="/cart"
            onClick={() => setIsDrawerOpen(false)}
            className="flex h-[40px] min-w-[175px] items-center justify-center rounded bg-[#49AD91] px-4 py-2 text-sm font-bold uppercase text-white shadow-md"
            passHref
            legacyBehavior
          >
            <a>₹ {lastItemPrice} • Go to Cart</a>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
