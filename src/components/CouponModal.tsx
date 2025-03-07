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
  const [applyingCouponId, setApplyingCouponId] = useState<number | null>(null);
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
            onClose(); // Close the success modal after progress completes
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

  const handleApplyCoupon = async (coupon: Coupon) => {
    if (appliedCoupon && appliedCoupon.code === coupon.code) {
      toast.info("This coupon is already applied.");
      return;
    }
    setApplyingCouponId(coupon.id);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onApplyCoupon(coupon);
      setSelectedCoupon(coupon.code);
      setIsSuccessVisible(true);
      setProgress(0);
      onClose();
    } catch (err) {
      toast.error("Failed to apply coupon. Please try again.");
    } finally {
      setApplyingCouponId(null);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!isOpen && !isSuccessVisible) return null;

  return (
    <>
      {/* Main Coupon Modal */}
      {isOpen && (
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
                      onClick={() => handleApplyCoupon(filteredCoupons.find(c => c.code === selectedCoupon)!)}
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
                          {applyingCouponId === coupon.id ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#49AD91] border-t-transparent"></div>
                          ) : appliedCoupon?.code === coupon.code ? (
                            <span className="cursor-not-allowed text-xs text-gray-400">
                              Applied
                            </span>
                          ) : (
                            <span
                              className="cursor-pointer border-b border-dotted border-gray-400 text-xs text-gray-600 hover:text-gray-900"
                              onClick={() => handleApplyCoupon(coupon)}
                            >
                              Tap to Apply
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          {coupon.short_description}
                        </p>
                        <p
                          className="mt-2 flex cursor-pointer items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
                          onClick={toggleDropdown}
                        >
                          More Info
                          {isDropdownOpen ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
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
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-[220px] w-[400px] rounded-lg bg-white p-6">
            <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-dotted border-white bg-[#49AD91]">
              <span className="text-2xl font-semibold text-white">%</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="mt-5 text-lg font-semibold text-gray-700">
                '{selectedCoupon}' applied
              </span>
              <span className="mt-2 text-2xl font-semibold text-gray-700">
                You have saved{" "}
                {coupons.find((c) => c.code === selectedCoupon)?.percentage}%
              </span>
              <span className="text-gray-700">on this order.</span>
            </div>
            <p className="absolute bottom-0 left-0 right-0 border-t py-3 text-center text-sm font-semibold text-[#49AD91]">
              Yay! Thanks
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-lg bg-green-100">
              <div
                className="h-1.5 rounded-b-lg bg-[#49AD91] transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouponModal;
