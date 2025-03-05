"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Package, CheckCircle, XCircle } from "lucide-react";
import { toast } from "react-toastify";
import LoginModal from "~/components/LoginModal";
import { useGetWishlistItemsQuery } from "~/store/api/wishlistApi";
import { useGetOrdersItemsQuery } from "~/store/api/ordersApi";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const OrderTrackingPage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { data: ordersResponse = {}, isLoading } = useGetOrdersItemsQuery([], {
    skip: !isLoggedIn,
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const orders = ordersResponse.data || [];

  console.log(orders, "orders");

  if (!isLoggedIn) {
    return (
      <>
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-gray-600">
            You need to log in to track your orders.
          </p>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="mt-4 rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#68d7b7]"
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

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="mt-[2px] bg-[#f7fcfc] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Track Your Orders
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with your order status and delivery details.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1075px] px-4 py-12">
        {orders?.length > 0 ? (
          <div className="space-y-6">
            {orders?.map((order) => (
              <div
                key={order.id}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Order #{order.order_id}
                    </h2>
                    <p className="text-sm text-gray-500">Status: {order.order_status}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="ml-2 text-lg font-semibold">
                      {order.order_status}
                    </span>
                    {order.order_status === "Delivered" ? (
                      <CheckCircle className="text-green-500 h-6 w-6" />
                    ) : order.order_status === "Shipped" ? (
                      <Package className="text-blue-500 h-6 w-6" />
                    ) : (
                      <XCircle className="text-red-500 h-6 w-6" />
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  {order?.products?.map((product) => (
                    <div key={product.id} className="flex items-center space-x-4">
                      <img
                        src={product?.featured_image}
                        alt={product.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                        <p className="text-gray-500">Qty: {product.quantity || 1}</p>
                        <p className="font-semibold">₹{product.sale_price  || 0}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <p className="text-lg font-semibold">Total: ₹{order.total_amount}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-xl text-gray-600">No orders found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderTrackingPage;