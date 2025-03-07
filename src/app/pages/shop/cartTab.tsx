import React, { useEffect, useState } from "react";
import { Cart } from "~/components/icons/Cart";
import Woltop666 from "../../../assets/product/Woltop666.png";
import { Offer } from "~/components/icons/Offer";
import { Yay } from "~/components/icons/Yay";
import { Minus } from "~/components/icons/Minus";
import { Plus } from "~/components/icons/Plus";
import Image from "next/image";
import gift from "../../../../public/icons/gift.svg";
import objectsBg from "../../../../public/objects.png";
import { useDispatch, useSelector } from "react-redux";
import {
  applyCoupon,
  removeCoupon,
  removeItemFromCart,
  updateItemQuantity,
} from "~/store/slices/cartSlice";
import CouponModal from "~/components/CouponModal";
import Link from "next/link";
import { toast } from "react-toastify";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { BiPurchaseTag } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

interface CartTabProps {
  cartData: any;
  setActiveTab: (tab: string) => void;
  chargess: any;
}

const CartTab: React.FC<CartTabProps> = ({ setActiveTab, chargess }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  const totalDiscount = useSelector((state: any) => state.cart.totalDiscount);
  const { appliedCoupon } = useSelector((state: any) => state.cart);
  const [loadingItem, setLoadingItem] = useState<{
    itemId: number;
    variableId: number;
    action: "delete" | "increment" | "decrement";
  } | null>(null);

  const {
    shipping_charges,
    cod_charges,
    threshold_charges,
    installation_charges,
  } = chargess?.data || {};

  const isShippingFree = totalPrice > threshold_charges;
  const finalShippingCharges = isShippingFree ? 0 : shipping_charges;

  console.log(cartData, "cartData");
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  const handleApplyCoupon = (coupon: Coupon) => {
    dispatch(applyCoupon(coupon));
    console.log("Applying coupon:", coupon);
  };

  useEffect(() => {
    if (isCouponModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isCouponModalOpen]);

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

  const handleDecrement = (itemId: number, variableId: number) => {
    const item = cartData.items.find(
      (item: any) => item.id === itemId && item.variableId === variableId,
    );
    if (item && item.quantity > 1) {
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
  };

  const handleRemoveItem = (itemId: number, variableId: number) => {
    const item = cartData.items.find(
      (item: any) => item.id === itemId && item.variableId === variableId,
    );
    if (item) {
      setLoadingItem({ itemId, variableId, action: "delete" });
      setTimeout(() => {
        dispatch(removeItemFromCart({ id: itemId, variableId }));
        setLoadingItem(null);
      }, 1000);
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
  };

  if (cartData?.items?.length < 1) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-lg bg-gray-50 p-8 text-center shadow-sm">
        <ShoppingCart className="mb-6 h-20 w-20 text-gray-400" />

        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Your Cart is Empty
        </h2>
        <p className="mb-6 text-gray-600">
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link
          href="/menu"
          className="rounded bg-[#49AD91] px-6 py-2 font-medium text-white transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto w-full">
          {cartData?.items?.length > 0 &&
            (() => {
              return (
                <div className="flex flex-col justify-between lg:flex-row">
                  <div className="checkout-cart lg:w-auto lg:min-w-[387px]">
                    {cartData?.items?.map((item: any, index: number) => (
                      <div
                        key={item.id || `item-${index}`}
                        className="border-border-200 mb-5 flex w-full gap-3 border-opacity-75 text-sm md:gap-[18px]"
                        style={{ opacity: "1" }}
                      >
                        <Link
                          href={`/product/${item?.id}`}
                          className="relative flex h-[173px] w-[123px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-gray-100"
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
                        <div className="relative w-full">
                          <Link
                            href={`/product/${item?.id}`}
                            className="text-heading text-xs font-medium text-black md:text-base"
                          >
                            {item.name}
                          </Link>
                          <p className="text-[10px] text-[#000000] md:text-[12px]">
                            Size: {item.variableName || "N/A"}
                          </p>{" "}
                          <div className="flex items-center">
                            <p className="my-2.5 text-sm font-medium text-[#49AD91] md:text-lg">
                              ₹{item.sale_price}
                            </p>
                            <div className="text-body my-2.5 ml-2 w-20 text-[10px] text-[#BAB8B8] line-through md:text-sm">
                              ₹{item.price}{" "}
                            </div>
                          </div>
                          <div className="inline rounded-[50px] bg-[#49AD911A] bg-opacity-10">
                            <span className="px-[7px] py-[2px] text-[10px] text-[#49AD91] md:text-xs">
                              {item.discount
                                ? `${item.discount}% off`
                                : "No Discount"}
                            </span>
                          </div>
                          <div className="counter-with-trash-icon absolute bottom-0 flex w-full justify-between">
                            <div className="trash-icon pl-1 pt-2">
                              <img
                                src="../../../public/img/trash1.png"
                                alt=""
                              />
                            </div>
                            <div className="mr-2 flex w-full items-center justify-between">
                              <div
                                className="icon cursor-pointer"
                                onClick={() =>
                                  handleRemoveItem(item.id, item.variableId)
                                }
                              >
                                <Cart />
                              </div>

                              <div className="flex rounded border border-[#49AD91]">
                                <button
                                  className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded px-[15px] py-[11px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                                  onClick={() =>
                                    handleDecrement(item.id, item.variableId)
                                  }
                                >
                                  <span className="sr-only">minus</span>
                                  <Minus />
                                </button>
                                <div className="flex items-center justify-center bg-[#49AD91] px-[20px] py-[11px] text-sm font-semibold text-[#fff]">
                                  {loadingItem?.itemId === item.id &&
                                  loadingItem?.variableId === item.variableId &&
                                  (loadingItem?.action === "increment" ||
                                    loadingItem?.action === "delete" ||
                                    loadingItem?.action === "decrement") ? (
                                    <div
                                      className="spinner-border inline-block h-4 w-4 animate-spin rounded-full border-2"
                                      role="status"
                                    ></div>
                                  ) : (
                                    item.quantity
                                  )}
                                </div>
                                <button
                                  className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded px-[15px] py-[11px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                                  onClick={() =>
                                    handleIncrement(item.id, item.variableId)
                                  }
                                >
                                  <span className="sr-only">plus</span>
                                  <Plus />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <div className="save-content md:p-0">
                      <div className="flex justify-between">
                        <div className="text-content w-3/5">
                          <p className="flex items-center gap-2">
                            <span className="icon">
                              <svg
                                width="16"
                                height="18"
                                viewBox="0 0 16 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.90034 0.754047C7.23451 0.560137 7.61399 0.458008 8.00034 0.458008C8.38669 0.458008 8.76618 0.560137 9.10034 0.754047L9.10117 0.75488L14.6103 3.92155C14.9448 4.11604 15.2224 4.395 15.4151 4.73051C15.6079 5.06601 15.7091 5.44628 15.7087 5.83321V12.169C15.7079 12.5554 15.6061 12.9348 15.4134 13.2697C15.2208 13.6046 14.9439 13.8833 14.6103 14.0782L14.6078 14.0799L9.10117 17.2457H9.09951C8.76544 17.4395 8.38611 17.5415 7.99992 17.5415C7.61374 17.5415 7.23441 17.4395 6.90034 17.2457H6.89951L1.39284 14.079H1.39034C1.05514 13.8851 0.777068 13.6062 0.584215 13.2704C0.391362 12.9346 0.290564 12.5538 0.292007 12.1665V5.83155C0.29283 5.4452 0.394614 5.06578 0.587271 4.73089C0.779928 4.39601 1.05677 4.1173 1.39034 3.92238L1.39284 3.92071L6.90034 0.754047ZM6.35867 6.47488C6.30146 6.41347 6.23246 6.36422 6.15579 6.33006C6.07912 6.2959 5.99636 6.27753 5.91244 6.27605C5.82852 6.27457 5.74517 6.29001 5.66734 6.32144C5.58952 6.35288 5.51883 6.39967 5.45948 6.45901C5.40013 6.51836 5.35334 6.58906 5.32191 6.66688C5.29047 6.74471 5.27503 6.82806 5.27651 6.91198C5.278 6.9959 5.29636 7.07866 5.33052 7.15533C5.36468 7.23199 5.41394 7.30099 5.47534 7.35821L5.76951 7.65321C5.82673 7.71462 5.89573 7.76387 5.97239 7.79803C6.04906 7.83219 6.13182 7.85056 6.21574 7.85204C6.29966 7.85352 6.38302 7.83808 6.46084 7.80665C6.53866 7.77521 6.60936 7.72843 6.66871 7.66908C6.72806 7.60973 6.77484 7.53903 6.80628 7.46121C6.83771 7.38339 6.85315 7.30003 6.85167 7.21611C6.85019 7.13219 6.83182 7.04943 6.79766 6.97276C6.7635 6.8961 6.71425 6.8271 6.65284 6.76988L6.35867 6.47488ZM9.35034 10.3499C9.2333 10.4671 9.16756 10.6259 9.16756 10.7915C9.16756 10.9572 9.2333 11.116 9.35034 11.2332L9.64451 11.5282C9.76299 11.6386 9.91969 11.6987 10.0816 11.6959C10.2435 11.693 10.398 11.6274 10.5125 11.5129C10.627 11.3984 10.6926 11.2439 10.6955 11.082C10.6983 10.9201 10.6382 10.7634 10.5278 10.6449L10.2337 10.3499C10.1165 10.2328 9.95763 10.1671 9.79201 10.1671C9.62638 10.1671 9.46753 10.2328 9.35034 10.3499ZM10.5253 7.35821C10.5867 7.30099 10.636 7.23199 10.6702 7.15533C10.7043 7.07866 10.7227 6.9959 10.7242 6.91198C10.7256 6.82806 10.7102 6.74471 10.6788 6.66688C10.6473 6.58906 10.6006 6.51836 10.5412 6.45901C10.4819 6.39967 10.4112 6.35288 10.3333 6.32144C10.2555 6.29001 10.1722 6.27457 10.0882 6.27605C10.0043 6.27753 9.92156 6.2959 9.84489 6.33006C9.76823 6.36422 9.69923 6.41347 9.64201 6.47488L5.47534 10.6415C5.41394 10.6988 5.36468 10.7678 5.33052 10.8444C5.29636 10.9211 5.278 11.0039 5.27651 11.0878C5.27503 11.1717 5.29047 11.2551 5.32191 11.3329C5.35334 11.4107 5.40013 11.4814 5.45948 11.5407C5.51883 11.6001 5.58952 11.6469 5.66734 11.6783C5.74517 11.7097 5.82852 11.7252 5.91244 11.7237C5.99636 11.7222 6.07912 11.7039 6.15579 11.6697C6.23246 11.6355 6.30146 11.5863 6.35867 11.5249L10.5253 7.35821Z"
                                  fill="#49AD91"
                                ></path>
                              </svg>
                            </span>
                            <span className="text-xs font-medium text-[#49AD91]">
                              Save ₹139 with combo upgrade{" "}
                            </span>
                          </p>
                          <p className="pt-1 text-[10px] text-[#7A7474] md:text-xs">
                            Lorem ipsum dolor sit amet consectetur. Est velit ac
                            integer
                          </p>
                        </div>
                        <div className="img-contain flex items-center justify-center">
                          <div className="media-contain">
                            <Image
                              src={Woltop666}
                              className="h-[48px] w-[36px] rounded"
                              alt="img"
                            />
                          </div>
                          <div className="m-1 font-black">+</div>
                          <div className="media-contain">
                            <Image
                              src={Woltop666}
                              className="h-[48px] w-[36px] rounded"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative mb-14 mt-2 w-full object-cover">
                        <div
                          className="h-16 object-cover opacity-10"
                          style={{
                            background:
                              "linear-gradient(0deg, rgba(46,205,160,1) 25%, rgba(255,255,255,1) 100%)",
                          }}
                        ></div>
                        <div className="price-bar absolute left-0 top-0 mt-4 flex w-full justify-between p-4">
                          <div className="price-contain flex items-center">
                            <div className="first-price text-sm text-[#505050] md:text-base">
                              ₹799
                            </div>
                            <div className="second-price ml-2 text-[10px] text-[#BAB8B8] md:text-sm">
                              ₹1630
                            </div>
                            <div className="third-price ml-2 text-sm text-[#49AD91] md:text-base">
                              Save ₹799
                            </div>
                          </div>
                          <div className="btn rounded bg-[#49AD91] px-4 py-1 text-[10px] font-normal text-white hover:bg-[#49AD91]">
                            UPGRADE
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <div className="relative mb-10 overflow-hidden pt-3 sm:mb-12 md:pt-0 lg:mb-0 lg:w-auto lg:min-w-[471px]">
                    {appliedCoupon ? (
                      <div className="mb-4 transform overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-r from-[#f9fafb] to-[#f3f4f6] shadow transition-all duration-300 hover:shadow-md">
                        <div className="flex">
                          {/* Left Section with Discount Percentage */}
                          <div className="flex items-center justify-center bg-gradient-to-r from-[#49AD91] to-[#3C8D7D] p-4">
                            <span className="text-sm font-semibold text-white">
                              {appliedCoupon.percentage}% Off
                            </span>
                          </div>

                          {/* Right Section with Coupon Details */}
                          <div className="flex-1 px-4 py-3">
                            <div className="flex items-center justify-between">
                              {/* Coupon Code */}
                              <span className="flex items-center gap-2 text-base font-semibold uppercase text-gray-900">
                                <BiPurchaseTag className="text-[#49AD91]" />
                                {appliedCoupon.percentage}%{" "}
                                <span className="text-xs font-normal">
                                  saved on this order
                                </span>
                              </span>

                              {/* Remove Button */}
                              <span
                                className="cursor-pointer border-b border-dotted border-gray-400 text-xs text-gray-600 hover:text-gray-900"
                                onClick={() => handleRemoveCoupon()}
                              >
                                Remove
                              </span>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="mb-1 text-sm">
                                {appliedCoupon.code}
                              </p>
                              <span onClick={()=>setIsCouponModalOpen(true)} className="text-wrap text-xs text-gray-600">
                                View all coupons
                                <IoMdArrowDropright
                                  size={16}
                                  className="inline"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="gift-wrapper relative mb-3">
                        {/* Background Image */}
                        <Image
                          className="h-[197px] w-full object-cover"
                          src={objectsBg}
                          alt="Flower and sky"
                        />

                        {/* Content Overlay */}
                        <div className="absolute top-1/2 w-full -translate-y-1/2 transform px-[14px] py-6">
                          {/* Main Content Container */}
                          <div className="mb-3 flex w-full max-w-sm lg:max-w-full">
                            {/* Left Section: Image */}
                            <div
                              className="h-26 w-14 flex-none overflow-hidden rounded-t bg-cover pt-3 text-center md:h-auto lg:h-auto lg:w-14 lg:rounded-l lg:rounded-t-none"
                              title="Woman holding a mug"
                            >
                              <Image
                                src={Woltop666}
                                className="h-[72px] w-full rounded"
                                alt="img"
                              />
                            </div>

                            {/* Right Section: Text and Links */}
                            <div
                              className="flex flex-col justify-between rounded-b p-2 leading-normal lg:rounded-b-none"
                              style={{ width: "100%" }}
                            >
                              <div className="mb-2">
                                {/* Free Gift Set Section */}
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center">
                                    <span className="icon pr-2">
                                      <Image
                                        src={gift}
                                        className="w-4 pt-1"
                                        alt="img"
                                      />
                                    </span>
                                    <span className="text-[12px] text-sm font-medium text-[#000000] md:text-base">
                                      Free Gift Set
                                    </span>
                                  </div>
                                  {/* <a
                                  className="text-black-950 text-[10px] font-medium text-[#7A7474] underline"
                                  href=""
                                >
                                  Tap to Apply
                                </a> */}
                                </div>

                                {/* Description */}
                                <p className="max-w-[228px] text-[10px] font-medium text-[#7A7474] md:text-[12px]">
                                  Enjoy your ultimate wallpaper tool set worth
                                  ₹799
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Offer Bar Section */}
                          <div className="offer-bar relative flex justify-center overflow-hidden md:mt-0">
                            <div className="m-auto flex w-full overflow-hidden">
                              {/* Offers Box */}
                              <div className="box-1 basis-20 border border-r-0 border-[#F11C544D] bg-white px-3 py-2">
                                <div className="offer-text flex items-center justify-center text-[12px] text-[#FF4C7B]">
                                  <span>
                                    <Offer />
                                  </span>
                                  OFFERS
                                </div>
                              </div>

                              {/* Circular Decorations */}
                              <div className="box-4 absolute -top-1 left-[80px] z-[999] h-3 w-3 rounded-full border border-[#F11C544D] bg-[#FFF3F6]"></div>
                              <div className="box-3 absolute -bottom-1 left-[80px] z-[999] h-3 w-3 rounded-full border border-[#F11C544D] bg-[#FFF3F6]"></div>

                              {/* Coupon Box */}
                              <div className="box-2 flex-grow basis-40 border border-[#F11C544D] bg-white px-2 py-2 text-[12px]">
                                <div
                                  onClick={() => setIsCouponModalOpen(true)}
                                  className="text-center text-[9px] text-black md:text-sm"
                                >
                                  Apply coupon or tap to explore more offers
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="w-full">
                      <div className="rounded md:border">
                        {totalDiscount > 0 && (
                          <div className="header bg-[#F0F7F2] p-2">
                            <p className="flex items-center gap-2">
                              <span className="icon">
                                <Yay />
                              </span>
                              <span className="text-[12px] text-[#749362]">
                                Yay! You have saved ₹{totalDiscount} on this
                                order
                              </span>
                            </p>
                          </div>
                        )}
                        <div className="bill-detail md:mx-3">
                          <div className="border-border-200 flex flex-col border-b py-3 md:p-2">
                            <h4 className="text-base font-medium text-black">
                              Bill Details
                            </h4>
                            {/* <div className="mt-2 flex">
                              <Image src={coins} className="w-4" alt="icon" />
                              <p className="ml-2 text-xs text-[#7A7474]">
                                Total Wol Cash{" "}
                                <span className="font-semibold">₹0</span>
                              </p>
                            </div> */}
                          </div>
                        </div>
                        <div className="border-border-200 border-b py-3 md:mx-3 md:p-2">
                          <ul>
                            <li className="text-body mb-2 flex justify-between text-[14px]">
                              <div className="text-xs text-[#7A7474]">
                                Total MRP
                              </div>
                              <div className="font-medium text-[#000000]">
                                ₹{totalPrice}
                              </div>
                            </li>
                            <li className="text-body mb-2 flex justify-between text-[14px]">
                              <div className="text-xs text-[#7A7474]">
                                Cart Discount
                              </div>
                              <div className="font-medium text-[#000000]">
                                -₹{totalDiscount || 0}
                              </div>
                            </li>
                            <li className="text-body flex justify-between text-[14px]">
                              <div className="text-xs text-[#7A7474]">
                                Shipping Charges
                              </div>
                              <div className="font-medium text-[#000000]">
                                ₹{finalShippingCharges}
                                {isShippingFree && (
                                  <span className="pl-3 text-[14px] text-[#49AD91]">
                                    FREE
                                  </span>
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="subtotal mt-2 pb-3 md:mx-3 md:px-2">
                          <h4 className="flex items-center justify-between font-medium">
                            <span className="text-base font-medium text-[#000000]">
                              Sub Total
                            </span>
                            <span>
                              ₹
                              {Number(totalPrice) +
                                Number(finalShippingCharges)}
                            </span>
                            {/* Adjust for discount and shipping */}
                          </h4>
                          <p className="text-body text-xs text-[#7A7474]">
                            You can send a gift note on the next step
                          </p>
                        </div>
                      </div>

                      <div className="shadow-custom-for-cartTab flex items-center justify-between md:mt-5">
                        <span className="text-[16px] font-medium text-[#000000] md:hidden">
                          {cartData?.items?.length > 1
                            ? `${cartData?.items?.length} items`
                            : `${cartData?.items?.length} item`}
                          - ₹{totalPrice || 0}
                        </span>
                        <button
                          onClick={() => setActiveTab("shipping")}
                          data-variant="normal"
                          className="hover:bg-accent-hover inline-flex h-10 w-auto shrink-0 items-center justify-center rounded bg-[#49AD91] px-5 py-0 text-sm font-semibold leading-none text-accent outline-none transition duration-300 ease-in-out focus:outline-0 md:h-12 md:w-full md:text-base"
                        >
                          CHECKOUT
                          <ArrowRight
                            size={20}
                            className="ml-2 hidden md:block"
                          />
                          <IoMdArrowDropright
                            size={20}
                            className="ml-1 md:hidden"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
        </div>
      </div>

      {/* Coupon Modal */}
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
        onApplyCoupon={handleApplyCoupon}
      />
    </>
  );
};

export default CartTab;
