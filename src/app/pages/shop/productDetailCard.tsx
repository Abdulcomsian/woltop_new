import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart } from "~/store/slices/cartSlice";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  sale_price: string;
  discount: string;
  content: string;
}

interface ProductDetailCardProps {
  responseData: {
    data: {
      other_related_products: Product[];
    };
  };
}

export default function ProductDetailCard({
  responseData,
}: ProductDetailCardProps) {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

  const cardData = responseData?.data?.other_related_products?.map(
    (product) => ({
      id: product.id,
      title: product.title,
      featured_image: product.image,
      description: product.price,
      price: product.price,
      sale_price: product.sale_price,
      discount: `${product.discount}%`,
      content: `${product.content} - Description`,
    }),
  );

  const handleAddToCart = (product: Product) => {
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
        variableId: 0,
        variableName: "Default",
      }),
    );
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {cardData?.map((card: any) => (
              <div key={card.id} className="card-wrapper relative">
                {!card?.variables && (
                  <div className="absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2">
                    <div className="flex w-11/12 justify-end">
                      <button
                        onClick={() => handleAddToCart(card)}
                        className="text-heading hover:text-light focus:text-light flex h-7 w-7 items-center justify-center rounded border border-blue-200 bg-[#F5FFFC] text-sm transition-colors hover:border-accent hover:bg-accent focus:border-accent focus:bg-accent focus:outline-0 md:h-9 md:w-9"
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
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                <Link href={`/product/${card.id}`}>
                  <div
                    style={{
                      backgroundImage: `url(${card?.featured_image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="custom-card-class relative z-0 h-52 w-auto items-center justify-center rounded-lg md:h-80"
                  ></div>
                  <p className="mt-[11px] truncate text-[#505050]">
                    {card?.title}
                  </p>
                  <div className="mt-2">
                    {card?.sale_price !== null ? (
                      <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                        ₹{card?.sale_price}
                      </span>
                    ) : (
                      <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                        ₹{card?.range}
                      </span>
                    )}
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
                      item?.featured_image || "https://placehold.co/600x400.png"
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
