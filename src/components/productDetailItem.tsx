import React from "react";
import ProductPrice from "./productPrice";
import Image from "next/image";
import ToolkitBar from "./toolkitBar";
import imageDegner from "../../public/design.png";
import imageDegner2 from "../../public/textured.png";
import imageDegner3 from "../../public/washable.png";
import imageDegner4 from "../../public/moderen.png";
import MoreInformation from "./moreInformation";
import Calculator from "./calculator";

interface ProductImage {
  id: string;
  image_path: string;
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

// Define the structure of the product data
interface ProductData {
  title: string;
  description: string;
  short_description: string;
  featured_image: string;
  product_images: ProductImage[];
  reviews: Reviews;
  delivery_detail: DeliveryDetail[];
}

// Define the prop type that receives the response data
interface ProductDetailItemProps {
  responseData: {
    data: ProductData;
  };
}

export default function productDetailItem({ responseData }: ProductDetailItemProps) {
  // console.log(responseData, "Response Data");

  const { title, description, short_description, featured_image, product_images, reviews, delivery_detail } = responseData?.data || {};
  const { average, total_count } = reviews || {};
  

  return (
    <div>
      <div className="container mx-auto">
        <div className="relative mx-auto max-w-screen-2xl bg-white px-4 py-16 lg:py-24">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-1 flex-col">
              <div className="flex flex-1 flex-col">
                {/* <!-- img_01 -->  */}
                <img
                  className="h-full object-cover"
                  src={
                    featured_image ||
                    "https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
                  }
                  alt=""
                />
              </div>
              <div className="flex-2 mt-4 flex">
                {product_images?.map((image) => (
                  <div key={image.id}>
                    <img
                      className="mr-2 h-full object-cover pr-4"
                      src={
                        image.image_path ||
                        "https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                      }
                      alt={`Product Image ${image.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-100 flex flex-1 flex-col border-red-100 md:w-2/5">
              <div className="breadcrum">
                <nav className="container">
                  <ol className="list-reset bg-grey-light text-grey flex rounded py-4 pl-4">
                    <li className="px-2 text-[#A5A1A1]">
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
                    <li className="px-2 text-[#A5A1A1]">
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
                    <li className="px-2 text-[8px] text-[#A5A1A1] md:text-[14px]">
                      Livingroom
                    </li>
                    <li className="text-[8px] text-[#A5A1A1] md:text-[14px]">
                      /
                    </li>
                    <li className="text-gray px-2 text-[8px] md:text-[14px]">
                      {title ||
                        "Wolpin Wallpaper Non-Woven"}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="detail-wrapper ml-0 md:ml-5">
                <div className="title-product text-[27px] font-semibold text-[#000000]">
                  {title || "Wolpin Wallpaper Non-Woven"}
                </div>
                <div className="rating-wrapper flex">
                  <div className="star-rating">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <React.Fragment key={star}>
                        <input
                          type="radio"
                          id={`${star}-stars`}
                          name="rating"
                          value={star}
                          disabled
                          checked={
                            Math.round(reviews.average) ===
                            star
                          }
                        />
                        <label htmlFor={`${star}-stars`} className="star">
                          &#9733;
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mr-4 mt-1 text-[#49AD91]">
                    {reviews.average.toFixed(1)}
                    <span className="ml-2 text-[#A5A1A1]">
                      ({reviews.total_count})
                    </span>
                  </div>
                </div>

                <ProductPrice responseData={responseData}></ProductPrice>

                <div className="shipping-text mt-5">
                  {short_description
                    ?.split("\n")
                    .map((item, index) => (
                      <span key={index}>
                        - {item}
                        <br />
                      </span>
                    ))}
                  {/* <p className="mt-2 font-normal text-[#7A7474]">
                    - Cash on delivery available at ₹20 COD charges
                  </p> */}
                </div>

                {/* <div className="shipping-btn mt-3 flex justify-start gap-4">
                  <button className="border-{#A5A1A1} bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex h-12 w-full items-center rounded border-2 px-6 py-2 pb-3 pt-3 text-[8px] font-medium text-[#A5A1A1] md:h-auto md:w-2/5 md:text-[16px]">
                    <svg
                      width="24"
                      height="22"
                      className="mr-3"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.94949 15.0786C2.77858 15.0786 1.82861 16.0286 1.82861 17.1995C1.82861 18.3704 2.77858 19.3204 3.94949 19.3204C5.1204 19.3204 6.07037 18.3704 6.07037 17.1995C6.07037 16.0286 5.1204 15.0786 3.94949 15.0786ZM3.94949 16.0791C4.56808 16.0791 5.06991 16.5809 5.06991 17.1995C5.06991 17.8181 4.56808 18.3199 3.94949 18.3199C3.3309 18.3199 2.82907 17.8181 2.82907 17.1995C2.82907 16.5809 3.3309 16.0791 3.94949 16.0791Z"
                        fill="#A5A1A1"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.274 1.2896L1.214 14.3496C0.466004 15.0676 0 16.0786 0 17.1976C0 17.1996 0 17.2016 0 17.2016C0 19.3826 1.768 21.1496 3.948 21.1496H22.5C23.328 21.1496 24 20.4786 24 19.6496V14.7496C24 13.9216 23.328 13.2496 22.5 13.2496H13.486L19.86 6.8756C20.141 6.59459 20.299 6.2136 20.299 5.8156C20.299 5.4176 20.141 5.03559 19.86 4.75459C18.934 3.82859 17.321 2.2156 16.395 1.2896C16.114 1.0086 15.732 0.850586 15.334 0.850586C14.937 0.850586 14.555 1.0086 14.274 1.2896ZM11.5 14.2496H3.948C3.159 14.2496 2.443 14.5596 1.914 15.0646L1.86301 15.1156C1.85601 15.1216 1.85 15.1276 1.843 15.1336C1.322 15.6656 1 16.3936 1 17.1976V17.2016C1 18.8296 2.32 20.1496 3.948 20.1496H11.5V14.2496ZM12.5 14.2496V20.1496H17.25V14.2496H12.5ZM18.25 14.2496H22.5C22.776 14.2496 23 14.4736 23 14.7496V19.6496C23 19.9256 22.776 20.1496 22.5 20.1496H18.25V14.2496ZM10.677 13.2496L7.203 9.77559L3.722 13.2566C3.797 13.2516 3.872 13.2496 3.948 13.2496H10.677ZM7.91 9.06859L12.082 13.2396L15.44 9.88159L11.269 5.70959L7.91 9.06859ZM16.148 9.17459L19.153 6.16859C19.247 6.07559 19.299 5.9476 19.299 5.8156C19.299 5.6826 19.247 5.55559 19.153 5.46159L15.688 1.9966C15.594 1.9036 15.467 1.85059 15.334 1.85059C15.202 1.85059 15.075 1.9036 14.981 1.9966L11.976 5.00259L16.148 9.17459Z"
                        fill="#A5A1A1"
                      />
                    </svg>
                    ORDER A SAMPLE
                  </button>
                  <button className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 flex h-12 w-full items-center rounded bg-[#49AD91] px-6 py-2 pb-3 pt-3 text-[8px] font-medium text-white md:h-auto md:w-2/5 md:text-[16px]">
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
                    ORDER A SAMPLE
                  </button>
                </div> */}

                <Calculator responseData={responseData}></Calculator>
                <div className="mt-4 w-full">
                  <h5 className="text-3xl font-semibold">Delivery </h5>
                  <div className="mt-4 flex justify-between gap-2">
                    {delivery_detail.map((detail) => (
                      <div key={detail.id}>
                        <h6 className="text-wrap text-base">
                          {detail.city_details}
                        </h6>
                        <p className="text-sm text-[#908B8B]">{detail.days}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <MoreInformation></MoreInformation>

                <ToolkitBar></ToolkitBar>

                <div className="mt-5 flex w-full">
                  <Image
                    className="m-3 h-full w-full object-cover"
                    src={imageDegner.src}
                    alt="Banner Background1"
                    width={100}
                    height={100}
                  />

                  <Image
                    className="m-3 h-full w-full object-cover"
                    src={imageDegner4.src}
                    alt="Banner Background2"
                    width={100}
                    height={100}
                  />

                  <Image
                    className="m-3 h-full w-full object-cover"
                    src={imageDegner2.src}
                    alt="Banner Background3"
                    width={100}
                    height={100}
                  />

                  <Image
                    className="m-3 h-full w-full object-cover"
                    src={imageDegner3.src}
                    alt="Banner Background4"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
