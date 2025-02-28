import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BiPurchaseTag } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import utils from "~/utils";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface Coupon {
  id: number;
  code: string;
  short_description: string;
  long_description: string;
  is_countable: number;
  counting: number | null;
  start_date: string;
  end_date: string;
  percentage: string;
}

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyCoupon: (coupon: Coupon) => void;
}

const CouponModal: React.FC<CouponModalProps> = ({
  isOpen,
  onClose,
  onApplyCoupon,
}) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [filteredCoupons, setFilteredCoupons] = useState<Coupon[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const { appliedCoupon } = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (isOpen) {
      fetchCoupons();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isSuccessVisible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsSuccessVisible(false);
            onClose();
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isSuccessVisible]);

  const fetchCoupons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${utils.BASE_URL}/get-coupons`);
      if (!response.ok) {
        throw new Error("Failed to fetch coupons.");
      }
      const data = await response.json();
      if (data.status && data.data) {
        setCoupons(data.data);
        setFilteredCoupons(data.data);
      } else {
        setError("No coupons available.");
      }
    } catch (err) {
      setError("Failed to fetch coupons. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCoupon(value);

    if (value === "") {
      setFilteredCoupons(coupons);
    } else {
      setFilteredCoupons(
        coupons.filter((c) =>
          c.code.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    }
  };

  const handleSelectCoupon = (coupon: Coupon) => {
    setSelectedCoupon(coupon.code);
  };

  const handleApplyCoupon = () => {
    if (appliedCoupon && appliedCoupon.code === selectedCoupon) {
      toast.info("This coupon is already applied.");
      return;
    }
    const coupon = coupons.find((c) => c.code === selectedCoupon);
    if (coupon) {
      onApplyCoupon(coupon);
      setIsSuccessVisible(true);
      setProgress(0);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-[500px] w-[600px] rounded-lg bg-white p-6">
        <X
          className="absolute right-5 top-5 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-lg font-semibold">Offers & Coupons</h2>
        <p className="mb-4 text-sm text-gray-400">
          Below offers you can apply on your cart
        </p>
        {isLoading && <p className="text-center">Loading coupons...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && (
          <>
            <div className="relative mb-4">
              <input
                type="text"
                className="w-full rounded border border-gray-300 p-2 pr-20"
                placeholder="Enter coupon code"
                value={selectedCoupon}
                onChange={handleInputChange}
              />
              {selectedCoupon && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-[#49AD91] px-4 py-1 text-sm text-white"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>
              )}
            </div>
          </>
        )}
        <div className="scrollbar-hide h-[340px] overflow-hidden overflow-y-auto">
          {filteredCoupons.length > 0 ? (
            filteredCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="mb-4 transform overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-r from-[#f9fafb] to-[#f3f4f6] shadow transition-all duration-300 hover:shadow-md"
              >
                <div className="flex">
                  <div className="flex items-center justify-center bg-gradient-to-r from-[#49AD91] to-[#3C8D7D] p-4">
                    <span className="text-sm font-semibold text-white">
                      {coupon.percentage}% Off
                    </span>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-base font-semibold uppercase text-gray-900">
                        <BiPurchaseTag className="text-[#49AD91]" />
                        {coupon.code}
                      </span>
                      <span
                        className="cursor-pointer border-b border-dotted border-gray-400 text-xs text-gray-600 hover:text-gray-900"
                        onClick={() => handleSelectCoupon(coupon)}
                      >
                        Tap to Apply
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {coupon.short_description}
                    </p>
                    <p
                      className="mt-2 flex cursor-pointer items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
                      onClick={toggleDropdown}
                    >
                      More Info
                      {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    {isDropdownOpen && (
                      <div className="ml-4 mt-2 text-xs text-gray-700">
                        {parse(coupon.long_description)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No matching coupons found.
            </p>
          )}
        </div>

        {/* Success Toast */}
        {isSuccessVisible && (
          <div className="animate-fade-in absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 transform rounded-lg border border-green-200 bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Checkmark Icon */}
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#49AD91]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* Success Message */}
                <span className="text-sm font-semibold text-[#49AD91]">
                  Coupon Applied Successfully!
                </span>
              </div>
              {/* Close Button */}
              <button
                className="text-sm text-[#49AD91]"
                onClick={() => setIsSuccessVisible(false)}
              >
                <X size={16} />
              </button>
            </div>
            {/* Progress Bar */}
            <div className="mt-3 h-1.5 w-full rounded-full bg-green-100">
              <div
                className="h-1.5 rounded-full bg-[#49AD91] transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponModal;
