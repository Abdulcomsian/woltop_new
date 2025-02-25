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

const CouponModal: React.FC<CouponModalProps> = ({ isOpen, onClose, onApplyCoupon }) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch coupons when the modal is opened
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
      } else {
        setError("No coupons available.");
      }
    } catch (err) {
      setError("Failed to fetch coupons. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Apply Coupon</h2>
        {isLoading && <p className="text-center">Loading coupons...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && (
          <>
            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedCoupon}
                onChange={(e) => setSelectedCoupon(e.target.value)}
              >
                <option value="">Select a coupon</option>
                {coupons.map((coupon) => (
                  <option key={coupon.id} value={coupon.code}>
                    {coupon.code} ({coupon.percentage}% off)
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
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