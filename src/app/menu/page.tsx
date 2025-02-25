"use client";
import { useState } from "react";
import { Coins, Plus, Search, X } from "lucide-react";
import { useGetAllProductsQuery } from "~/store/api/allProductsApi";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "~/store/slices/cartSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";
import Link from "next/link";
import { toast } from "react-toastify";
import LoginModal from "~/components/LoginModal";
import ConfirmationModal from "~/components/ConfirmationModal";
import { logout } from "~/store/slices/userSlice";
import { PiSquaresFour } from "react-icons/pi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import {
  UserRound,
  HelpCircle,
  FileText,
  BookOpen,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const MenuPage = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(
      addItemToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        sale_price: product.sale_price || product.price,
        discount: product.discount || 0,
        featured_image: product.featured_image,
        variableId: 0,
        variableName: "Default",
      }),
    );
    toast.success(`${product.title} added to cart!`);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    toast.success("You have been logged out.");
    setIsConfirmationModalOpen(false);
  };

  const categories = [
    {
      title: "All Categories",
      description: "Browse through all our products",
      icon: PiSquaresFour,
      path: "/",
    },
    {
      title: "Orders",
      description: "Track and view your orders",
      icon: HiOutlineArchiveBox,
      path: "/orders",
    },
    {
      title: "Account",
      description: "Your profile, saved address and more",
      icon: UserRound,
      path: "/account",
    },
    {
      title: "Chat with us on Whatsapp",
      description: "10 AM to 10 PM",
      icon: FaSquareWhatsapp,
      path: "https://wa.me/911234678",
    },
    {
      title: "FAQ's",
      description: "Perfect gifts for your loved ones",
      icon: HelpCircle,
      path: "/faq",
    },
    {
      title: "Legal",
      description: "Legal policies",
      icon: FileText,
      path: "/privacyPolicy",
    },
    {
      title: "Blogs",
      description: "Latest in our blog",
      icon: BookOpen,
      path: "/blogs",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="mt-[2px] bg-[#f7fcfc]">
        {isLoggedIn ? (
          <div className="mx-auto flex max-w-[1075px] items-center justify-between gap-3 px-3 py-6 md:py-10">
            <div className="flex flex-col">
              <h1 className="text-[20px] font-semibold text-black">
                Hello Mrs!
              </h1>
              <p className="text-sm font-normal text-[#747474]">
                It's good to have you back
              </p>
            </div>
            <div
              onClick={handleLoginClick}
              className="flex cursor-pointer items-center gap-3 rounded bg-[#49AD91] px-[25px] py-3 font-medium text-[#FFFFFF] md:gap-5"
            >
              <LiaCoinsSolid color="gold" size={28} />
              <div className="text-right text-xs">
                <p>₹0</p>
                <span>Nat Cash</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-[1075px] items-center justify-between gap-3 px-3 py-6 md:py-10">
            <div className="flex flex-col">
              <h1 className="text-[20px] font-semibold text-black">Hello!</h1>
              <p className="text-sm font-normal text-[#747474]">
                Please login to see your Nat Cash
              </p>
            </div>
            <div
              onClick={handleLoginClick}
              className="cursor-pointer rounded border border-[#49AD91] px-[25px] py-2 font-medium text-[#49AD91]"
            >
              Login
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-[1075px] flex-col gap-4 px-3 py-8">
        {/* Left: Product Cards */}
        <div className="w-full">
          <h1 className="text-[20px] font-semibold text-black">Most Liked</h1>
          <p className="text-sm font-normal text-[#747474]">
            Our top seller of the week
          </p>
          {allProducts?.length > 0 ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              style={{ padding: "20px 0px" }}
            >
              {allProducts?.map((product) => (
                <SwiperSlide key={product?.id}>
                  <div className="card-wrapper relative cursor-pointer">
                    <div className="absolute -right-3 -top-3 z-40">
                      <div className="flex w-11/12 justify-end">
                        <button className="text-heading hover:text-light focus:text-light flex h-7 w-7 items-center justify-center rounded border border-blue-200 bg-[#F5FFFC] text-sm transition-colors hover:border-accent hover:bg-accent focus:border-accent focus:bg-accent focus:outline-0 md:h-9 md:w-9">
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

                    <Link
                      href={`/product/${product.id}`}
                      className="flex w-full flex-col items-center"
                    >
                      <Card
                        style={{
                          backgroundImage: `url(${product.featured_image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="custom-card-class relative z-0 h-52 w-full rounded-lg md:h-80"
                      ></Card>
                      <CardContent className="w-full px-2">
                        <p className="truncate text-base font-semibold text-[#505050]">
                          {product.title}
                        </p>
                        <p className="line-clamp-2 text-sm text-gray-500">
                          {product?.short_description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex w-full items-center justify-between px-2 pb-2">
                        <CardDescription>
                          <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                            ₹{product.sale_price || 0}
                          </span>
                          <del className="ml-1 text-xs text-gray-500">
                            ₹{product?.price || 0}
                          </del>
                        </CardDescription>
                        {/* <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-[#49AD91] px-3 py-1.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#388f75] md:text-[14px]"
                        >
                          <Plus className="h-3 w-3 md:h-4 md:w-4" /> ADD
                        </button> */}
                      </CardFooter>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>

        {/* Right:Menu Section */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {categories?.map((category, index) => (
              <Link
                key={index}
                href={category?.path}
                className="flex gap-2 border-t bg-white py-4 md:p-4 md:flex-col md:rounded-lg md:border"
              >
                <category.icon className="h-6 w-6 text-gray-700" />
                <div>
                  <h1 className="font-semibold">{category.title}</h1>
                  <p className="my-2 text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {isLoggedIn && (
          <div
            onClick={handleLogout}
            className="mx-auto cursor-pointer rounded border border-[#49AD91] px-[25px] py-2 font-medium text-[#49AD91]"
          >
            Logout
          </div>
        )}
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default MenuPage;
