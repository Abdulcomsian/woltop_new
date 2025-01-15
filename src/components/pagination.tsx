import React, { useState } from "react";

interface ReviewsData {
  meta: {
    current_page: number;
    last_page: number;
  };
}

export default function Pagination({ reviewsData }: { reviewsData: ReviewsData }) {
  const [currentPage, setCurrentPage] = useState(reviewsData?.meta.current_page);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    if (page !== currentPage) {
      console.log(`Changing page to: ${page}`);
      setCurrentPage(page);
      // Optionally, you can trigger an API call here to fetch new reviews for the selected page
      // For example, fetchReviews(page);
    }
  };

  const generatePaginationButtons = () => {
    const totalPages = reviewsData?.meta.last_page || 1;
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <p
          key={i}
          onClick={() => handlePageChange(i)}
          className={`cursor-pointer px-2 pt-3 text-sm font-medium leading-none ${
            currentPage === i
              ? "bg-[#49AD91] text-white"
              : "hover:text-[#49AD91] hover:border-[#49AD91]-400 text-gray-600"
          }`}
        >
          {i}
        </p>
      );
    }
    return buttons;
  };

  return (
    <div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-0">
        <div className="flex w-full items-center justify-between lg:w-3/5">
          {/* Previous Button */}
          <div
            className={`flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1667 18.1673L9 14.0007L13.1667 9.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0026 18.1673L14.8359 14.0007L19.0026 9.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-3 text-sm font-medium leading-none">Previous</p>
          </div>

          {/* Pagination Buttons */}
          <div className="hidden sm:flex">
            {generatePaginationButtons()}
          </div>

          {/* Next Button */}
          <div
            className={`flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p className="mr-3 text-sm font-medium leading-none">Next</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8359 14.1673L15.0026 10.0007L10.8359 5.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 14.1673L9.16667 10.0007L5 5.83398"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
