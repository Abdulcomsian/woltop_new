import React from "react";
import ProductPrice from "./productPrice";
import Image from "next/image";
import ToolkitBar from "./toolkitBar";
import imageDegner from "../../public/design.png";
import imageDegner2 from "../../public/textured.png";
import imageDegner3 from "../../public/washable.png";
import imageDegner4 from "../../public/moderen.png";
import MoreInformation from "./moreInformation";

export default function productDetailItem() {
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
                  src="https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
                  alt=""
                />
              </div>
              <div className="flex-2 mt-4 flex">
                <div>
                  {/* <!-- img_02 --> */}
                  <img
                    className="mr-4 h-full object-cover pr-4"
                    src="https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                    alt=""
                  />
                </div>
                <div>
                  {/* <!-- img_03 --> */}
                  <img
                    className="mr-2 h-full object-cover pr-4"
                    src="https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                    alt=""
                  />
                </div>
                <div>
                  {/* <!-- img_04 --> */}
                  <img
                    className="mr-2 h-full object-cover pr-4"
                    src="https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-100 flex flex-1 flex-col border-red-100 md:w-2/5">
              <div className="breadcrum">
                <nav className="container">
                  <ol className="list-reset bg-grey-light text-grey flex rounded py-4 pl-4">
                    <li className="px-2 text-[#A5A1A1]">
                      <a
                        href="#"
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
                      Wolpin Wallpaper Non-Woven
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="detail-wrapper ml-0 md:ml-5">
                <div className="title-product text-[27px] font-semibold text-[#000000]">
                  Wolpin Wallpaper Non-Woven
                </div>
                <div className="rating-wrapper flex">
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" value="5" />
                    <label htmlFor="5-stars" className="star">
                      &#9733;
                    </label>
                    <input type="radio" id="4-stars" name="rating" value="4" />
                    <label htmlFor="4-stars" className="star">
                      &#9733;
                    </label>
                    <input type="radio" id="3-stars" name="rating" value="3" />
                    <label htmlFor="3-stars" className="star">
                      &#9733;
                    </label>
                    <input type="radio" id="2-stars" name="rating" value="2" />
                    <label htmlFor="2-stars" className="star">
                      &#9733;
                    </label>
                    <input type="radio" id="1-star" name="rating" value="1" />
                    <label htmlFor="1-star" className="star">
                      &#9733;
                    </label>
                  </div>
                  <div className="mr-4 mt-1 text-[#49AD91]">
                    4.6
                    <span className="ml-2 text-[#A5A1A1]">(95)</span>
                  </div>
                </div>

                <ProductPrice></ProductPrice>

                <div className="shipping-text mt-5">
                  <p className="font-normal text-[#7A7474]">
                    - Free shipping above ₹339
                  </p>
                  <p className="mt-2 font-normal text-[#7A7474]">
                    - Cash on delivery available at ₹20 COD charges
                  </p>
                </div>

                <div className="shipping-btn mt-3 flex justify-start gap-4">
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.94949 15.0786C2.77858 15.0786 1.82861 16.0286 1.82861 17.1995C1.82861 18.3704 2.77858 19.3204 3.94949 19.3204C5.1204 19.3204 6.07037 18.3704 6.07037 17.1995C6.07037 16.0286 5.1204 15.0786 3.94949 15.0786ZM3.94949 16.0791C4.56808 16.0791 5.06991 16.5809 5.06991 17.1995C5.06991 17.8181 4.56808 18.3199 3.94949 18.3199C3.3309 18.3199 2.82907 17.8181 2.82907 17.1995C2.82907 16.5809 3.3309 16.0791 3.94949 16.0791Z"
                        fill="#A5A1A1"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.5 22C21.0523 22 21.5 21.5523 21.5 21C21.5 20.4477 21.0523 20 20.5 20C19.9477 20 19.5 20.4477 19.5 21C19.5 21.5523 19.9477 22 20.5 22Z"
                        stroke="#FAFAFA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.5 1H5.5L8.18 14.39C8.27144 14.8504 8.52191 15.264 8.88755 15.5583C9.25318 15.8526 9.7107 16.009 10.18 16H19.9C20.3693 16.009 20.8268 15.8526 21.1925 15.5583C21.5581 15.264 21.8086 14.8504 21.9 14.39L23.5 6H6.5"
                        stroke="#FAFAFA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    ORDER A SAMPLE
                  </button>
                </div>

                <div className="mt-4 flex w-full justify-between rounded-3xl bg-[#FFF3F6] py-3 align-middle">
                  <div className="ml-4 mr-4">
                    <svg
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 11.8125C5.5 12.1606 5.3683 12.4944 5.13388 12.7406C4.89946 12.9867 4.58152 13.125 4.25 13.125C3.91848 13.125 3.60054 12.9867 3.36612 12.7406C3.1317 12.4944 3 12.1606 3 11.8125C3 11.4644 3.1317 11.1306 3.36612 10.8844C3.60054 10.6383 3.91848 10.5 4.25 10.5C4.58152 10.5 4.89946 10.6383 5.13388 10.8844C5.3683 11.1306 5.5 11.4644 5.5 11.8125ZM5.5 15.75C5.5 16.0981 5.3683 16.4319 5.13388 16.6781C4.89946 16.9242 4.58152 17.0625 4.25 17.0625C3.91848 17.0625 3.60054 16.9242 3.36612 16.6781C3.1317 16.4319 3 16.0981 3 15.75C3 15.4019 3.1317 15.0681 3.36612 14.8219C3.60054 14.5758 3.91848 14.4375 4.25 14.4375C4.58152 14.4375 4.89946 14.5758 5.13388 14.8219C5.3683 15.0681 5.5 15.4019 5.5 15.75ZM11.75 13.125C12.0815 13.125 12.3995 12.9867 12.6339 12.7406C12.8683 12.4944 13 12.1606 13 11.8125C13 11.4644 12.8683 11.1306 12.6339 10.8844C12.3995 10.6383 12.0815 10.5 11.75 10.5C11.4185 10.5 11.1005 10.6383 10.8661 10.8844C10.6317 11.1306 10.5 11.4644 10.5 11.8125C10.5 12.1606 10.6317 12.4944 10.8661 12.7406C11.1005 12.9867 11.4185 13.125 11.75 13.125ZM13 15.75C13 16.0981 12.8683 16.4319 12.6339 16.6781C12.3995 16.9242 12.0815 17.0625 11.75 17.0625C11.4185 17.0625 11.1005 16.9242 10.8661 16.6781C10.6317 16.4319 10.5 16.0981 10.5 15.75C10.5 15.4019 10.6317 15.0681 10.8661 14.8219C11.1005 14.5758 11.4185 14.4375 11.75 14.4375C12.0815 14.4375 12.3995 14.5758 12.6339 14.8219C12.8683 15.0681 13 15.4019 13 15.75ZM8 13.125C8.33152 13.125 8.64946 12.9867 8.88388 12.7406C9.1183 12.4944 9.25 12.1606 9.25 11.8125C9.25 11.4644 9.1183 11.1306 8.88388 10.8844C8.64946 10.6383 8.33152 10.5 8 10.5C7.66848 10.5 7.35054 10.6383 7.11612 10.8844C6.8817 11.1306 6.75 11.4644 6.75 11.8125C6.75 12.1606 6.8817 12.4944 7.11612 12.7406C7.35054 12.9867 7.66848 13.125 8 13.125ZM9.25 15.75C9.25 16.0981 9.1183 16.4319 8.88388 16.6781C8.64946 16.9242 8.33152 17.0625 8 17.0625C7.66848 17.0625 7.35054 16.9242 7.11612 16.6781C6.8817 16.4319 6.75 16.0981 6.75 15.75C6.75 15.4019 6.8817 15.0681 7.11612 14.8219C7.35054 14.5758 7.66848 14.4375 8 14.4375C8.33152 14.4375 8.64946 14.5758 8.88388 14.8219C9.1183 15.0681 9.25 15.4019 9.25 15.75ZM4.875 2.625C4.37772 2.625 3.90081 2.83242 3.54917 3.20163C3.19754 3.57085 3 4.07161 3 4.59375V5.90625C3 6.42839 3.19754 6.92915 3.54917 7.29837C3.90081 7.66758 4.37772 7.875 4.875 7.875H11.125C11.6223 7.875 12.0992 7.66758 12.4508 7.29837C12.8025 6.92915 13 6.42839 13 5.90625V4.59375C13 4.07161 12.8025 3.57085 12.4508 3.20163C12.0992 2.83242 11.6223 2.625 11.125 2.625H4.875ZM4.25 4.59375C4.25 4.4197 4.31585 4.25278 4.43306 4.12971C4.55027 4.00664 4.70924 3.9375 4.875 3.9375H11.125C11.2908 3.9375 11.4497 4.00664 11.5669 4.12971C11.6842 4.25278 11.75 4.4197 11.75 4.59375V5.90625C11.75 6.0803 11.6842 6.24722 11.5669 6.37029C11.4497 6.49336 11.2908 6.5625 11.125 6.5625H4.875C4.70924 6.5625 4.55027 6.49336 4.43306 6.37029C4.31585 6.24722 4.25 6.0803 4.25 5.90625V4.59375ZM15.5 17.7188C15.5 18.589 15.1708 19.4236 14.5847 20.0389C13.9987 20.6543 13.2038 21 12.375 21H3.625C2.7962 21 2.00134 20.6543 1.41529 20.0389C0.82924 19.4236 0.5 18.589 0.5 17.7188V3.28125C0.5 2.41101 0.82924 1.57641 1.41529 0.961056C2.00134 0.345702 2.7962 0 3.625 0H12.375C13.2038 0 13.9987 0.345702 14.5847 0.961056C15.1708 1.57641 15.5 2.41101 15.5 3.28125V17.7188ZM14.25 3.28125C14.25 2.7591 14.0525 2.25835 13.7008 1.88913C13.3492 1.51992 12.8723 1.3125 12.375 1.3125H3.625C3.12772 1.3125 2.65081 1.51992 2.29917 1.88913C1.94754 2.25835 1.75 2.7591 1.75 3.28125V17.7188C1.75 18.2409 1.94754 18.7417 2.29917 19.1109C2.65081 19.4801 3.12772 19.6875 3.625 19.6875H12.375C12.8723 19.6875 13.3492 19.4801 13.7008 19.1109C14.0525 18.7417 14.25 18.2409 14.25 17.7188V3.28125Z"
                        fill="#655F5F"
                      />
                    </svg>
                  </div>
                  <span className="">
                    How many rolls do i need? Use our Calculator
                  </span>

                  <div className="mt-1 pr-4 pt-1">
                    <svg
                      width="11"
                      height="11"
                      className=""
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.44 6.46H6.18V10.78H4.48V6.46H0.24V4.92H4.48V0.579999H6.18V4.92H10.44V6.46Z"
                        fill="#655F5F"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <h5 className="text-3xl font-semibold">Delivery </h5>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h6 className="text-base">DELHI, NCR, BANAGOLRE</h6>
                      <p className="text-sm text-[#908B8B]">
                        2-3 Days After Shipping
                      </p>
                    </div>
                    <div>
                      <h6 className="text-base">PAN INDIA</h6>
                      <p className="text-sm text-[#908B8B]">
                        4-5 Days After Shipping
                      </p>
                    </div>
                  </div>
                </div>

                <MoreInformation></MoreInformation>

                <ToolkitBar></ToolkitBar>

                <div className="mt-5 flex w-full ">
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
