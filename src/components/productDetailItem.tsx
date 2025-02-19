import Image from "next/image";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetDeliveryQuery } from "~/store/api/deliveryApi";
import { addItemToCart } from "~/store/slices/cartSlice";
import Calculator from "./calculator";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import utils from "~/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
interface ProductImage {
  id: string;
  image_path: string;
}

// Define the structure of the product's features
interface ProductFeature {
  image: string;
  name: string;
}

// Define the structure of the product's delivery details
interface DeliveryDetail {
  id: string;
  city_details: string;
  days: string;
}

// Define the structure of reviews (average and total count)
interface Reviews {
  average: number;
  total_count: number;
}
interface Variable {
  id: number;
  discount: number;
  name: string;
  sale_price: number;
  price: number;
}

// Define the structure of the product data
interface ProductData {
  price: number;
  sale_price: number;
  discount: number;
  id: string;
  title: string;
  short_description: string;
  products_features: ProductFeature[];
  featured_image: string;
  product_images: ProductImage[];
  reviews: Reviews;
  delivery_detail: DeliveryDetail[];
  variables: Variable[];
}

// Define the prop type that receives the response data
interface ProductDetailItemProps {
  responseData: {
    data: ProductData;
  };
}

export default function productDetailItem({
  responseData,
}: ProductDetailItemProps) {
  console.log(responseData, "Response Data");
  const {
    title,
    short_description,
    featured_image,
    product_images,
    reviews,
    variables,
    products_features,
    sale_price,
    price,
    id,
  } = responseData?.data || {};
  const { data: delivery_detail } = useGetDeliveryQuery({});
  const [selectedId, setSelectedId] = useState<number | null>(
    responseData?.data?.variables?.length > 0
      ? Number(responseData.data.variables[0].id)
      : Number(responseData?.data?.id) || null,
  );
  const dispatch = useDispatch();
  const [selectedFeaturedImage, setSelectedFeaturedImage] =
    useState(featured_image);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleCardClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index); // Move Swiper to selected image
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

  const handleAddToCart = () => {
    console.log("response data", responseData);

    if (responseData?.data) {
      let price, sale_price, discount;
      let selectedVariable = null; // Define selectedVariable in the outer scope

      if (selectedId !== null) {
        selectedVariable = responseData.data.variables.find(
          (variable: any) => variable.id === selectedId,
        );

        if (selectedVariable) {
          // Use prices from the selected variable
          price = Number(selectedVariable.price);
          sale_price = selectedVariable.sale_price
            ? Number(selectedVariable.sale_price)
            : price;
          discount = Number(selectedVariable.discount);
        } else {
          // Use default prices if variable is not found
          price = Number(responseData.data.price);
          sale_price = responseData.data.sale_price
            ? Number(responseData.data.sale_price)
            : price;
          discount = Number(responseData.data.discount);
        }
      } else {
        // Use default prices if no variable is selected
        price = Number(responseData.data.price);
        sale_price = responseData.data.sale_price
          ? Number(responseData.data.sale_price)
          : price;
        discount = Number(responseData.data.discount);
      }

      dispatch(
        addItemToCart({
          id: Number(responseData.data.id),
          name: responseData.data.title,
          price: price,
          sale_price: sale_price,
          discount: discount,
          featured_image: responseData.data.featured_image,
          variableId: selectedId ?? 0,
          variableName: selectedVariable ? selectedVariable.name : "Default", // Safely access selectedVariable
        }),
      );
    } else {
      console.error("Response data missing");
    }
  };

  return (
    <>
      <div className="max-w-[944px]">
        <div className="jsut flex flex-col md:flex-row md:gap-[39px]">
          <div className="flex flex-col overflow-x-hidden md:w-[460px] md:px-3">
            <div className="mb-4 flex h-[751px] max-h-[751px] w-full items-center justify-center overflow-hidden md:rounded-[6px]">
              <Swiper
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={300}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="mySwiper h-full"
              >
                {product_images?.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img
                      className="h-full object-cover"
                      src={image.image_path}
                      alt={`Product Image ${image.id}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden md:flex">
              {product_images?.map((image, index) => (
                <div key={image.id} onClick={() => handleThumbnailClick(index)}>
                  <img
                    className={`mr-2 h-[117px] w-[82px] cursor-pointer rounded object-cover ${
                      activeIndex === index
                        ? "border-[1px] border-[#655F5F] p-[2px]"
                        : "border-none"
                    }`}
                    src={image.image_path}
                    alt={`Product Image ${image.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-x-hidden border-red-100 px-3 md:w-[445px]">
            <div className="breadcrum mb-[15px] mt-4 md:mt-0">
              <nav className="container">
                <ol className="list-reset bg-grey-light text-grey flex rounded">
                  <li className="pr-[2px] text-[8px] text-[#A5A1A1] md:text-[14px]">
                    <a
                      href="/"
                      className="text-indigo text-[8px] no-underline md:text-[14px]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="text-[8px] text-[#A5A1A1] md:text-[14px]">
                    /
                  </li>

                  <li className="px-[2px] text-[8px] text-[#A5A1A1] md:text-[14px]">
                    <a
                      href="#"
                      className="text-indigo text-[8px] no-underline md:text-[14px]"
                    >
                      Wallpaper
                    </a>
                  </li>
                  <li className="text-[8px] text-[#A5A1A1] md:text-[14px]">
                    /
                  </li>
                  <li className="px-[2px] text-[8px] text-[#A5A1A1] md:text-[14px]">
                    Livingroom
                  </li>
                  <li className="text-[8px] text-[#A5A1A1] md:text-[14px]">
                    /
                  </li>
                  <li className="pl-[2px] text-[8px] text-[#000000] md:text-[14px]">
                    {title || "Wolpin Wallpaper Non-Woven"}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="detail-wrapper">
              <div className="title-product text-[20px] font-semibold leading-[33.6px] text-[#000000] md:text-[28px]">
                {title || "Wolpin Wallpaper Non-Woven"}
              </div>
              <div className="rating-wrapper flex items-center gap-1">
                <div className="star-rating">
                  {[5, 4, 3, 2, 1].map((star, index) => (
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`${star}-stars`}
                        name="rating"
                        value={star}
                        disabled
                        readOnly
                        checked={Math.round(reviews.average) === star}
                      />
                      <label htmlFor={`${star}-stars`} className="star">
                        &#9733;
                      </label>
                    </React.Fragment>
                  ))}
                </div>
                <div className="mr-4 text-[18px] text-[#49AD91]">
                  {reviews.average.toFixed(1)}
                  <span className="ml-2 text-[#A5A1A1]">
                    ({reviews.total_count})
                  </span>
                </div>
              </div>
              {variables?.length === 0 && (
                <div className="price-wrapper flex">
                  <div className="real-price text-[#49AD91]">₹{sale_price}</div>
                  <div className="descount-price text-[12px] text-[#BAB8B8] line-through">
                    ₹{price}
                  </div>
                </div>
              )}

              {/* <ProductPrice responseData={responseData}></ProductPrice> */}
              <div className="flex items-center justify-start gap-2 border-b-[0.5px] border-[#D9D9D9] py-4">
                {variables?.map((variable) => (
                  <div
                    key={variable.id}
                    onClick={() => handleCardClick(variable.id)}
                    className={`product-price-wrapper relative w-full cursor-pointer rounded-sm border-dashed p-4 ${
                      selectedId === variable.id ? "bg-[#49AD911A]" : ""
                    }`}
                    style={{
                      borderColor: selectedId === variable.id ? "#49AD91" : "#D9D9D9",
                    }}                    
                  >
                    {/* Discount Badge */}
                    <div className="inline rounded-[50px] bg-[#49AD911A] bg-opacity-10">
                      <span className="px-[7px] py-[2px] text-[10px] text-[#49AD91] md:text-xs">
                        {variable.discount}% off
                      </span>
                    </div>

                    {/* Product Dimensions */}
                    <div className="dimension mt-1">{variable.name}</div>

                    {/* Pricing Details */}
                    <div className="price-wrapper flex">
                      <div className="real-price text-[#49AD91]">
                        ₹{variable.sale_price}
                      </div>
                      <div className="descount-price text-[12px] text-[#BAB8B8] line-through">
                        ₹{variable.price}
                      </div>
                    </div>

                    {/* Price Per Unit */}
                    <div className="product-size">
                      ₹{(variable.sale_price / 6).toFixed(2)}/ft²
                    </div>

                    {/* Checkbox for High Discounts */}
                    {selectedId === variable.id && (
                      <div className="absolute right-3 top-5">
                        <input
                          type="checkbox"
                          id={`checkbox-${variable.id}`}
                          defaultChecked
                        />
                        <label htmlFor={`checkbox-${variable.id}`}></label>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="shipping-text border-b-[0.5px] border-[#D9D9D9] py-4 text-xs text-[#7A7474] md:text-base">
                {short_description?.split("\n").map((item, index) => (
                  <span key={index}>
                    - {item}
                    <br />
                  </span>
                ))}
                {/* <p className="mt-2 font-normal text-[#7A7474]">
                    - Cash on delivery available at ₹20 COD charges
                  </p> */}
              </div>

              <div className="shipping-btn mt-[14px] flex justify-start gap-3 md:gap-4">
                <button
                  onClick={() => handleAddToWishlist(id)}
                  className="border-{#A5A1A1} bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex h-[50px] w-[50%] items-center justify-center gap-2 rounded border-2 py-2 text-[14px] font-medium text-[#A5A1A1] lg:text-[18px]"
                >
                  <Heart />
                  WISHLIST
                </button>
                <button
                  onClick={handleAddToCart}
                  className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex h-[50px] w-[50%] items-center justify-center rounded bg-[#49AD91] py-2 text-[14px] font-medium text-white lg:text-[18px]"
                >
                  <svg
                    width="25"
                    height="24"
                    className="mr-3"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 22C10.0523 22 10.5 21.5523 10.5 21C10.5 20.4477 10.0523 20 9.5 20C8.94772 20 8.5 20.4477 8.5 21C8.5 21.5523 8.94772 22 9.5 22Z"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 22C21.0523 22 21.5 21.5523 21.5 21C21.5 20.4477 21.0523 20 20.5 20C19.9477 20 19.5 20.4477 19.5 21C19.5 21.5523 19.9477 22 20.5 22Z"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 1H5.5L8.18 14.39C8.27144 14.8504 8.52191 15.264 8.88755 15.5583C9.25318 15.8526 9.7107 16.009 10.18 16H19.9C20.3693 16.009 20.8268 15.8526 21.1925 15.5583C21.5581 15.264 21.8086 14.8504 21.9 14.39L23.5 6H6.5"
                      stroke="#FAFAFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  ADD TO CART
                </button>
              </div>

              <Calculator responseData={responseData}></Calculator>
              <div className="mt-[17px] w-full">
                <h5 className="text-[20px] font-medium text-[#000000] md:text-2xl">
                  Delivery{" "}
                </h5>
                <div className="mt-4 flex justify-between gap-2 text-[14px] md:text-base">
                  {delivery_detail?.data?.map((detail) => (
                    <div key={detail.id}>
                      <h6 className="text-wrap text-sm text-[#4E4949] md:text-base">
                        {detail.city_details}
                      </h6>
                      <p className="text-xs text-[#908B8B] md:text-sm">
                        {detail.days}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* <MoreInformation></MoreInformation> */}

              {/* <ToolkitBar></ToolkitBar> */}

              {products_features.length !== 0 && (
                <div className="mt-5 flex w-full justify-center gap-3 overflow-x-auto md:justify-start md:gap-6">
                  {products_features?.map(
                    (feature: { image: string; name: string }, index) => (
                      <div key={index} className="relative w-[62px] h-[68px] md:w-[91px] md:h-[99px]  rounded-full">
                        <Image
                          className="rounded-full"
                          src={feature.image}
                          alt={feature.name}
                          fill
                        />
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
