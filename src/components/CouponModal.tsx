import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import utils from "~/utils";

interface Coupon {
  id: number;
  code: string;
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

  useEffect(() => {
    if (isOpen) {
      fetchCoupons();
    }
  }, [isOpen]);

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
    setFilteredCoupons(
      coupons.filter((c) => c.code.toLowerCase().includes(value.toLowerCase())),
    );
  };

  const handleSelectCoupon = (coupon: Coupon) => {
    setSelectedCoupon(coupon.code);
  };

  const handleApplyCoupon = () => {
    const coupon = coupons.find((c) => c.code === selectedCoupon);
    if (coupon) {
      onApplyCoupon(coupon);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-[400px] w-[500px] rounded-lg bg-white p-6">
        <X className="absolute right-5 top-5 cursor-pointer" onClick={onClose} />
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
                className="w-full rounded border border-gray-300 p-2"
                placeholder="Enter coupon code"
                value={selectedCoupon}
                onChange={handleInputChange}
              />
              {filteredCoupons.length > 0 && (
                <ul className="absolute mt-1 max-h-56 w-full overflow-y-auto rounded border border-gray-300 bg-white">
                  {filteredCoupons?.map((coupon) => (
                    <li
                      key={coupon.id}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                      onClick={() => handleSelectCoupon(coupon)}
                    >
                      {coupon.code} ({coupon.percentage}% off)
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="absolute bottom-5 right-5 flex justify-end">
              {/* <button
                className="mr-2 rounded bg-gray-300 px-4 py-2"
                onClick={onClose}
              >
                Cancel
              </button> */}
              <button
                className="rounded bg-[#49AD91] px-4 py-2 text-white"
                onClick={handleApplyCoupon}
                disabled={!selectedCoupon}
              >
                Apply
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CouponModal;
