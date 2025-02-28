import React, { useEffect, useState } from "react";
import Image from "next/image";
import background from "../../public/background.png";
import { useGetToolkitQuery } from "~/store/api/toolkitApi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart } from "~/store/slices/cartSlice";
import { Drawer } from "antd";
import Link from "next/link";

export default function ToolkitBar() {
  const { data: toolkit } = useGetToolkitQuery({});
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 5 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lastItemPrice =
    cartData?.items?.[cartData.items.length - 1]?.sale_price || 0;

  const { id, title, short_description, price, image } = toolkit?.data || {};

  const handleAddToCart = (product) => {
    const existingItem = cartData.items.find((item) => item.id === product.id);

    if (existingItem) {
      toast.info("Toolkit is already in the cart");
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
        discount: Number(
          product.discount ? product.discount.replace("%", "") : 0,
        ),
        featured_image: product.image,
        variableId: 0,
        variableName: "Default",
      }),
    );
    setIsDrawerOpen(true);
  };

  return (
    <>
      {toolkit ? (
        <>
          <div className="border-1 mt-5 w-full rounded border-b border-l border-r border-t border-gray-400">
            <div className="flex w-full">
              <div
                className="m-4 h-[92px] flex-none overflow-hidden rounded-t md:h-[124px]"
                title={title}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex flex-col items-start justify-between rounded-b bg-white p-4 text-left leading-normal lg:rounded-b-none lg:rounded-r">
                <div className="">
                  <div className="mb-2 text-xs font-bold text-gray-900 md:text-sm">
                    {title}
                  </div>
                  <p className="text-[10px] text-gray-700 md:text-xs">
                    {short_description}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleAddToCart({
                      id,
                      title,
                      price,
                      image,
                      discount: "0%",
                    })
                  }
                  className="border-{#0B0A0A} bg-[#49AD91]-500 hover:bg-[#0B0A0A]-700 flex w-full justify-center rounded border-2 px-6 py-2 text-[13px] font-medium text-[#0B0A0A] md:text-[18px] lg:w-4/5"
                >
                  Add - ₹{price}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="p-4 text-center text-gray-500">Loading...</p>
      )}

      <Drawer
        placement="bottom"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        height={100}
        headerStyle={{ display: "none" }}
      >
        <div className="mx-auto flex w-fit items-center justify-center gap-[10px]">
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
            <span className="flex min-w-12 text-xs font-medium">
              +{cartData.items.length - itemsToShow} items
            </span>
          )}
          <Link
            href="/cart"
            onClick={() => setIsDrawerOpen(false)}
            className="flex min-w-[175px] justify-center rounded bg-[#49AD91] px-4 py-2 text-sm font-medium uppercase text-white"
          >
            ₹ {lastItemPrice} • Go to Cart
          </Link>
        </div>
      </Drawer>
    </>
  );
}
