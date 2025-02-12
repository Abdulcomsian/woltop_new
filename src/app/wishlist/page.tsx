"use client";

import { useState } from "react";
import { Heart, ShoppingCart, X } from "lucide-react";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "/images/headphones.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "/images/smartwatch.jpg",
      inStock: false,
    },
    {
      id: 3,
      name: "Leather Backpack",
      price: 129.99,
      image: "/images/backpack.jpg",
      inStock: true,
    },
  ]);

  const handleRemoveItem = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    alert("Item removed from wishlist!");
  };

  const handleMoveToCart = (id) => {
    alert("Item moved to cart!");
    handleRemoveItem(id);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f7fcfc] py-12 mt-[2px]">
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
                    <p className="text-lg text-gray-600">${item.price}</p>
                    {!item.inStock && (
                      <p className="text-sm text-red-500">Out of Stock</p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center space-x-4 sm:mt-0">
                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    disabled={!item.inStock}
                    className={`flex items-center rounded-md px-4 py-2 text-white ${
                      item.inStock
                        ? "bg-[#49AD91] hover:bg-[#68d7b7]"
                        : "cursor-not-allowed bg-gray-400"
                    }`}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Move to Cart
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