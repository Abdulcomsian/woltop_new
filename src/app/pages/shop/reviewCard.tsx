import { useState } from "react";
import { useGetReviewByProductQuery } from "~/store/api/reviewsApi";
import { format } from "date-fns";

interface ReviewCardProps {
  slug: string;
}

export default function ReviewCard({ slug }: ReviewCardProps) {
  const { data: review, isFetching } = useGetReviewByProductQuery(slug);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const reviews = review?.data || [];
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginatedReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mx-auto grid w-full grid-cols-1 overflow-y-auto">
      {paginatedReviews.map((review: any) => (
        <div
          key={review.id}
          className="mb-5 w-full flex-shrink-0 rounded-lg border-2 border-dashed bg-white p-6 shadow-md"
        >
          {/* Rating */}
          <div className="mb-3 flex gap-[6px]">
            <div className="flex gap-[6px] text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-[30px] w-[30px] fill-current ${
                    index < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
                </svg>
              ))}
            </div>
          </div>
          {/* Description */}
          <p className="mb-4 text-xs text-[#000000] md:text-base">
            {review.description}
          </p>
          {/* User Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img
                  alt={review.user.name}
                  src={
                    review.user.image
                      ? review.user.image
                      : `https://ui-avatars.com/api/?name=${review.user.name}&background=random`
                  }
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="font-poppins text-[14px] font-semibold text-[#0B0B0B]">
                  {review.user.name}
                </h4>
              </div>
            </div>
            <p className="font-poppins text-xs text-[#A5A1A1] md:text-base">
              {review.created_at
                ? format(new Date(review.created_at), "MMMM EEE dd, yyyy")
                : "Invalid Date"}
            </p>
          </div>
        </div>
      ))}

      {/* Pagination */}
      {reviews.length > reviewsPerPage && (
        <div className="mx-auto flex w-full items-center justify-between lg:w-[40%]">
          {/* Previous Button */}
          <div
            className={`flex cursor-pointer items-center pt-3 text-gray-600 ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:text-indigo-700"
            }`}
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
            </svg>
            <p className="ml-3 text-sm font-medium leading-none">Previous</p>
          </div>

          {/* Page Numbers */}
          <div className="hidden sm:flex">
            {Array.from({ length: totalPages }, (_, index) => (
              <p
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mr-4 cursor-pointer p-1 px-2 text-sm font-medium leading-none ${
                  currentPage === index + 1
                    ? "rounded bg-[#49AD91] text-white"
                    : "border-t border-transparent text-gray-600 hover:text-[#49AD91]"
                }`}
              >
                {index + 1}
              </p>
            ))}
          </div>

          {/* Next Button */}
          <div
            className={`flex cursor-pointer items-center pt-3 text-gray-600 ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:text-indigo-700"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p className="mr-3 text-sm font-medium leading-none">Next</p>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 19L16.5 14L11.5 9"
                stroke="#49AD91"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
