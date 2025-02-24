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

const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const WishlistPage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { data: wishlistItems = [], isLoading, refetch } = useGetWishlistItemsQuery([], {
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
      <div className="flex justify-center items-center h-screen">
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
        {wishlistItems.length > 0 ? (
          <div className="space-y-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg sm:flex-row"
              >
                {/* Product Image and Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 line-clamp-2">
                      {item?.short_description}
                    </p>
                    <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                      ₹{item.sale_price || 0}
                    </span>
                    <del className="ml-1 text-xs text-gray-500">
                      ₹{item?.price}
                    </del>
                    {!item.inStock && (
                      <p className="text-sm text-red-500">Out of Stock</p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center space-x-4 sm:mt-0">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    disabled={!item.inStock}
                    className={`flex items-center rounded-md px-4 py-2 text-white ${
                      item.inStock
                        ? "bg-[#49AD91] hover:bg-[#68d7b7]"
                        : "cursor-not-allowed bg-gray-400"
                    }`}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="flex items-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                  >
                    <X className="mr-2 h-5 w-5" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Heart className="mx-auto h-12 w-12 text-gray-400" />
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