"use client";

import { Heart, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "~/components/LoginModal";
import { toast } from "react-toastify";

import {
  useDeleteWishlistItemMutation,
  useGetWishlistItemsQuery,
} from "~/store/api/wishlistApi";
import { addItemToCart } from "~/store/slices/cartSlice";
import { Button } from "antd";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const WishlistPage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const {
    data: wishlistItems = [],
    isLoading,
    refetch,
  } = useGetWishlistItemsQuery([], {
    skip: !isLoggedIn,
  });
  const [deleteWishlistItem] = useDeleteWishlistItemMutation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = async (id) => {
    try {
      await deleteWishlistItem(id).unwrap();
      toast.success("Item removed from wishlist!");
      refetch();
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
      toast.error("Failed to remove item. Please try again.");
    }
  };

  const handleMoveToCart = (item) => {
    dispatch(
      addItemToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        sale_price: item.sale_price || item.price,
        discount: item.discount || 0,
        featured_image: item.image,
        variableId: 0,
        variableName: "Default",
      }),
    );
    toast.success(`${item.name} added to cart!`);
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
            onClick={() => {
              setIsLoginModalOpen(true);
            }}
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
      {/* Hero Section */}
      <div className="mt-[2px] bg-[#f7fcfc] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Your Wishlist</h1>
          <p className="mt-4 text-lg text-gray-600">
            Save your favorite items for later and never miss out!
          </p>
        </div>
      </div>

      {/* Wishlist Items Section */}
      <div className="mx-auto max-w-[1075px] px-4 py-12">
        {wishlistItems?.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative h-40 w-full md:h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full rounded-md object-cover"
                  />
                  {!item.inStock && (
                    <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex flex-grow flex-col space-y-2 p-4">
                  <h2 className="truncate text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <span className="text-lg font-semibold">
                      ₹{item.sale_price !== null ? item.sale_price : item.range}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-3 p-4 md:flex-row">
                  <Button
                    onClick={() => handleMoveToCart(item)}
                    className="w-full md:w-auto"
                    variant="filled"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {item.inStock ? "Move to Cart" : "Out of Stock"}
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
