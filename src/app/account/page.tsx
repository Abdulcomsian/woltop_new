"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import LoginModal from "~/components/LoginModal";
import { logout } from "~/store/slices/userSlice";

const AccountPage = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    toast.success("You have been logged out.");
  };

  if (!isLoggedIn) {
    return (
      <>
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-gray-600">
            You need to log in to view your account details.
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
          <h1 className="text-4xl font-bold text-gray-800">Your Account</h1>
          <p className="mt-4 text-lg text-gray-600">
            Manage your account details and preferences.
          </p>
        </div>
      </div>

      {/* Account Details Section */}
      <div className="mx-auto max-w-[1075px] px-4 py-12">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Account Information
          </h2>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-lg font-medium text-gray-700">Name:</p>
              <p className="text-lg text-gray-600">{user?.name || "Dbqplabs"}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">Email:</p>
              <p className="text-lg text-gray-600">{user?.email || "info@gmail.com"}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">Phone:</p>
              <p className="text-lg text-gray-600">
                {user?.phone || "Not provided"}
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">Address:</p>
              <p className="text-lg text-gray-600">
                {user?.address || "Not provided"}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-8">
            <button
              onClick={handleLogout}
              className="w-full rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 sm:w-auto"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;