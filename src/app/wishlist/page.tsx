"use client";

import { useEffect, useState } from "react";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "~/components/LoginModal";
import { toast } from "react-toastify";
import { addItemToCart } from "~/store/slices/cartSlice";
import { Button } from "antd";
import utils from "~/utils";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const WishlistPage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Fetch Wishlist Items
  const fetchWishlistItems = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
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

  useEffect(() => {
    if (isLoggedIn) {
      fetchWishlistItems();
    }
  }, [isLoggedIn]);

  // Handle Remove Item
  const handleRemoveItem = async (id) => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await fetch(
        `${utils.BASE_URL}/delete-wishlist-item/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      if (data.status) {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        toast.error("Failed to remove item.");
      }
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
    }
  };

  // Handle Move to Cart
  const handleMoveToCart = (item) => {
    dispatch(
      addItemToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        sale_price: item.sale_price || item.price,
        discount: item.discount || 0,
        featured_image: item.image,
        variableId: null,
        variableName: "Default",
      }),
    );
    handleRemoveItem(item.id);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <>
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-gray-600">
            You need to log in to view your wishlist.
          </p>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="mt-4 rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#49ad91]"
          >
            Go to Login
          </button>
        </div>
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className="mt-[2px] bg-[#f7fcfc] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Your Wishlist</h1>
          <p className="mt-4 text-lg text-gray-600">
            Save your favorite items for later and never miss out!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1075px] px-4 py-12">
        {wishlistItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative h-40 w-full md:h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>

                <div className="flex flex-grow flex-col space-y-2 p-4">
                  <h2 className="truncate text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 md:flex-row">
                  <Button
                    onClick={() => handleMoveToCart(item)}
                    className="w-full md:w-auto"
                    variant="filled"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Move to Cart
                  </Button>

                  <Button
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-full md:w-auto"
                    variant="outlined"
                  >
                    <X className="mr-2 h-5 w-5" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Heart className="mx-auto h-16 w-16 text-gray-400" />
            <p className="mt-4 text-xl text-gray-600">
              Your wishlist is empty. Start adding your favorite items!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
