import { useGetReviewByProductQuery } from "~/store/api/reviewsApi";

interface ReviewCardProps {
  slug: string;
}

export default function ReviewCard({ slug }: ReviewCardProps) {
  const { data: review, isFetching } = useGetReviewByProductQuery(slug);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const reviews = review?.data || [];
  return (
    <div className="mx-auto grid w-full grid-cols-1 overflow-y-auto">
      {reviews?.map((review: any) => (
        <div
          key={review.id}
          className="mb-5 w-full flex-shrink-0 rounded-lg border-2 border-dashed bg-white p-6 shadow-md"
        >
          {/* Rating */}
          <div className="mb-4 flex gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 fill-current ${
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
          <p className="mb-4 text-gray-600">{review.description}</p>
          {/* User Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img
                  alt={review.user.name}
                  src={
                    review.user.image
                      ? review.user.image
                      : "https://via.placeholder.com/48"
                  }
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="font-poppins text-lg font-semibold text-black">
                  {review.user.name}
                </h4>
                <p className="font-poppins text-xs text-gray-500">
                  {/* {review.designation} */}
                </p>
              </div>
            </div>
            <p className="font-poppins text-xs text-gray-500">
              {review.created_at}
            </p>
          </div>
        </div>
      ))}

      {reviews.length > 0 && (
        <div className="mx-auto flex w-full items-center justify-between lg:w-[40%]">
          <div className="flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700">
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
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.0026 18.1673L14.8359 14.0007L19.0026 9.83398"
                stroke="#49AD91"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="ml-3 text-sm font-medium leading-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#49AD91"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <div className="hidden sm:flex">
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              1
            </p>
            <p className="mr-4 cursor-pointer rounded bg-[#49AD91] p-2 px-2 text-sm font-medium leading-none text-white">
              2
            </p>
            <p className="hover:text-[#49AD91]-700 hover:border-[#49AD91]-400 mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600">
              3
            </p>
          </div>
          <div className="flex cursor-pointer items-center pt-3 text-gray-600 hover:text-indigo-700">
            <p className="mr-3 text-sm font-medium leading-none">
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
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
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
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 14.1673L9.16667 10.0007L5 5.83398"
                stroke="#49AD91"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
