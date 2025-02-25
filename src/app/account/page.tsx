"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import LoginModal from "~/components/LoginModal";
import { LockKeyhole } from "lucide-react";
import { RiEditBoxLine } from "react-icons/ri";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { RiGenderlessLine } from "react-icons/ri";

const AccountPage = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [email, setEmail] = useState(user?.email || "");

  return (
    <>
      {/* Hero Section */}
      <div className="mt-[2px] border-b py-3">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-xl font-semibold text-gray-800">Your Account</h1>
        </div>
      </div>

      {/* Account Details Section */}
      {isLoggedIn ? (
        <div className="mx-auto max-w-[1075px] px-4 py-12">
          <div className="bg-white">
            <form className="mb-5 space-y-4">
              <div className="mb-2">
                <label className="mb-1 text-sm" htmlFor="name">
                  Name*
                </label>
                <div className="flex items-center gap-2 rounded-md bg-[#f2f8f9] p-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Mrs."
                    className="w-full border-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-800"
                  />
                  <RiEditBoxLine size={18} />
                </div>
              </div>
              <div className="mb-2">
                <label className="mb-1 text-sm" htmlFor="phone">
                  Mobile Number*
                </label>
                <div className="flex items-center gap-2 rounded-md bg-[#f2f8f9] p-3">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9999685485"
                    className="w-full border-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-800"
                  />
                  <LockKeyhole size={18} />
                </div>
              </div>
              <div className="mb-2">
                <label className="mb-1 text-sm" htmlFor="email">
                  Email ID (Optional)
                </label>
                <div className="flex items-center gap-2 rounded-md bg-[#f2f8f9] p-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="9999685485@wolpin.in"
                    className="w-full border-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-800"
                  />
                  <RiEditBoxLine size={18} />
                </div>
              </div>
            </form>

            {/* Celebrate with us Section */}
            <div className="relative mb-5 w-full rounded bg-[#f8efdd] py-4">
              <div className="flex flex-col items-center justify-center">
                <h3 className="mb-2 text-2xl text-[#cd9970]">
                  Celebrate with us
                </h3>
                <div className="flex items-center gap-2 md:min-w-[450px]">
                  <input
                    type="date"
                    className="custom-date-input w-full rounded-md border border-[#cd9970] p-2 text-sm outline-none"
                  />
                  <RiEditBoxLine
                    size={24}
                    className="cursor-pointer hover:text-[#49AD91]"
                  />
                </div>
              </div>
            </div>

            {/* Gender Selection Radio Buttons */}
            <h3 className="mb-1 text-sm font-semibold">Gender</h3>
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <label
                className={`flex cursor-pointer items-center gap-2 rounded border p-2 ${selectedGender === "male" ? "border-[#49AD91] text-[#49AD91]" : ""}`}
              >
                <BsGenderMale
                  size={18}
                  className={selectedGender === "male" ? "text-[#49AD91]" : ""}
                />
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={selectedGender === "male"}
                  onChange={() => setSelectedGender("male")}
                  className="form-radio absolute h-4 w-4 text-[#49AD91] opacity-0"
                />
                <span
                  className={`text-sm ${selectedGender === "male" ? "text-[#49AD91]" : "text-gray-700"}`}
                >
                  Male
                </span>
              </label>
              <label
                className={`flex cursor-pointer items-center gap-2 rounded border p-2 ${selectedGender === "female" ? "border-[#49AD91] text-[#49AD91]" : ""}`}
              >
                <BsGenderFemale
                  size={18}
                  className={
                    selectedGender === "female" ? "text-[#49AD91]" : ""
                  }
                />
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={selectedGender === "female"}
                  onChange={() => setSelectedGender("female")}
                  className="form-radio absolute h-4 w-4 text-[#49AD91] opacity-0"
                />
                <span
                  className={`text-sm ${selectedGender === "female" ? "text-[#49AD91]" : "text-gray-700"}`}
                >
                  Female
                </span>
              </label>
              <label
                className={`flex cursor-pointer items-center gap-2 rounded border p-2 ${selectedGender === "other" ? "border-[#49AD91] text-[#49AD91]" : ""}`}
              >
                <RiGenderlessLine
                  size={18}
                  className={selectedGender === "other" ? "text-[#49AD91]" : ""}
                />
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={selectedGender === "other"}
                  onChange={() => setSelectedGender("other")}
                  className="form-radio absolute h-4 w-4 text-[#49AD91] opacity-0"
                />
                <span
                  className={`text-sm ${selectedGender === "other" ? "text-[#49AD91]" : "text-gray-700"}`}
                >
                  Other
                </span>
              </label>
            </div>

            {/* Addresses */}
            <h3 className="mb-1 text-sm font-semibold">Saved Addresses</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Address 1 */}
              <label
                className={`flex cursor-pointer flex-col gap-2 rounded border p-4 ${selectedAddress === "home" ? "border-[#49AD91] text-[#49AD91]" : ""}`}
              >
                <input
                  type="radio"
                  name="address"
                  value="home"
                  checked={selectedAddress === "home"}
                  onChange={() => setSelectedAddress("home")}
                  className="form-radio absolute h-4 w-4 text-[#49AD91] opacity-0"
                />
                <span
                  className={`text-sm font-semibold ${selectedAddress === "home" ? "text-[#49AD91]" : "text-gray-700"}`}
                >
                  Home
                </span>
                <span
                  className={`text-xs ${selectedAddress === "home" ? "text-[#49AD91]" : "text-gray-500"}`}
                >
                  123 Main St, Apt 4B, Springfield, IL, 62704
                </span>
              </label>

              {/* Address 2 */}
              <label
                className={`flex cursor-pointer flex-col gap-2 rounded border p-4 ${selectedAddress === "work" ? "border-[#49AD91] text-[#49AD91]" : ""}`}
              >
                <input
                  type="radio"
                  name="address"
                  value="work"
                  checked={selectedAddress === "work"}
                  onChange={() => setSelectedAddress("work")}
                  className="form-radio absolute h-4 w-4 text-[#49AD91] opacity-0"
                />
                <span
                  className={`text-sm font-semibold ${selectedAddress === "work" ? "text-[#49AD91]" : "text-gray-700"}`}
                >
                  Work
                </span>
                <span
                  className={`text-xs ${selectedAddress === "work" ? "text-[#49AD91]" : "text-gray-500"}`}
                >
                  456 Office Park, Suite 300, Springfield, IL, 62704
                </span>
              </label>

              {/* Address 3 */}
              <label
                className={`flex cursor-pointer flex-col gap-2 rounded border p-4 ${selectedAddress === "other" ? "border-[#49AD91] text-[#49AD91]" : ""}`}
              >
                <input
                  type="radio"
                  name="address"
                  value="other"
                  checked={selectedAddress === "other"}
                  onChange={() => setSelectedAddress("other")}
                  className="form-radio absolute h-4 w-4 text-[#49AD91] opacity-0"
                />
                <span
                  className={`text-sm font-semibold ${selectedAddress === "other" ? "text-[#49AD91]" : "text-gray-700"}`}
                >
                  Other
                </span>
                <span
                  className={`text-xs ${selectedAddress === "other" ? "text-[#49AD91]" : "text-gray-500"}`}
                >
                  789 Elm St, Springfield, IL, 62704
                </span>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex mt-4 h-[100vh] flex-col items-center text-center">
            <p className="text-base text-gray-600">
              Please login to see your account
            </p>
            <button
              onClick={() => {
                setIsLoginModalOpen(true);
              }}
              className="mt-4 rounded-md bg-[#49AD91] px-6 py-2 text-white hover:bg-[#49ad91]"
            >
              Login
            </button>
          </div>
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default AccountPage;
