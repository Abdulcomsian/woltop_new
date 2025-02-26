import { X } from "lucide-react";
import React, { useState } from "react";
import utils from "~/utils";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface ReviewData {
  average: number;
  total_count: number;
  five_star_count: number;
  four_star_count: number;
  three_star_count: number;
  two_star_count: number;
  one_star_count: number;
}

interface ResponseData {
  data: {
    reviews: ReviewData;
  };
}

interface RatedReviewProps {
  responseData: ResponseData;
  slug: string;
}

export default function RatedReview({ responseData, slug }: RatedReviewProps) {
  const { reviews } = responseData?.data;
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  if (!reviews) return null;

  const {
    average,
    total_count,
    five_star_count,
    four_star_count,
    three_star_count,
    two_star_count,
    one_star_count,
  } = reviews;

  const fillStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-[23px] w-[23px] md:h-[36px] md:w-[36px] fill-current ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
      </svg>
    ));
  };

  const handleAddReview = () => {
    if (!isLoggedIn) {
      toast.warning("You need to login first to submit a review.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReviewRating(0);
    setReviewText("");
  };

  const handleSubmitReview = async () => {
    if (!reviewRating || !reviewText) {
      toast.warning("Please provide a rating and review.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("description", reviewText);
      formData.append("product_id", slug);
      formData.append("rating", reviewRating.toString());

      const token = localStorage.getItem("token");

      const response = await fetch(`${utils.BASE_URL}/store-review`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Review submitted successfully:", data);
        toast.success("Thank you for your review!");
        handleCloseModal();
      } else {
        console.error("Failed to submit review:", response.statusText);
        toast.error("Failed to submit your review. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("An error occurred while submitting your review.");
    }
  };

  return (
    <div className="mb-20">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h6 className="text-[18px] md:text-[34px] text-[#000000] font-semibold">Rated {average}</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-[23px] w-[23px] md:h-[36px] md:w-[36px] fill-current ${average ? "text-yellow-400" : "text-gray-300"}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
            </svg>
          </div>
          <p className="mt-3 text-[14px] md:text-[22px]">{total_count} verified reviews</p>
        </div>
        <button
          onClick={handleAddReview}
          className="btn flex h-[32px] md:h-[50px] items-center justify-center rounded bg-[#49AD91] p-[10px] font-medium text-xs md:text-xl md:px-[35px] text-white"
        >
          ADD A REVIEW
        </button>
      </div>

      {/* Breakdown of star counts */}
      <div className="mt-4">
        <div className="flex gap-[5px] md:gap-[7px] items-center">
          {fillStars(5)}
          <div className="ml-3 text-[14px] md:text-[22px] text-[#A5A1A1]">({five_star_count})</div>
        </div>
        <div className="mt-2 flex gap-[5px] md:gap-[7px] items-center">
          {fillStars(4)}
          <div className="ml-3 text-[14px] md:text-[22px] text-[#A5A1A1]">({four_star_count})</div>
        </div>
        <div className="mt-2 flex gap-[5px] md:gap-[7px] items-center">
          {fillStars(3)}
          <div className="ml-3 text-[14px] md:text-[22px] text-[#A5A1A1]">({three_star_count})</div>
        </div>
        <div className="mt-2 flex gap-[5px] md:gap-[7px] items-center">
          {fillStars(2)}
          <div className="ml-3 text-[14px] md:text-[22px] text-[#A5A1A1]">({two_star_count})</div>
        </div>
        <div className="mt-2 flex gap-[5px] md:gap-[7px] items-center">
          {fillStars(1)}
          <div className="ml-3 text-[14px] md:text-[22px] text-[#A5A1A1]">({one_star_count})</div>
        </div>
      </div>

      {/* Add Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">Add a Review</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setReviewRating(index + 1)}
                    className={`h-6 w-6 ${
                      index < reviewRating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Review
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#49AD91] focus:outline-none focus:ring-[#49AD91]"
                placeholder="Write your review..."
              />
            </div>
            <div className="mt-6">
              <button
                onClick={handleSubmitReview}
                className="w-full rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#68d7b7]"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
