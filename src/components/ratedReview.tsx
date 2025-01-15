import React from "react";

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

export default function RatedReview({ responseData }: { responseData: ResponseData }) {
  const { reviews } = responseData?.data;

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
        className={`h-5 w-5 fill-current ${index < rating ? "text-yellow-400" : "text-white"}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
      </svg>
    ));
  };

  return (
    <div className="px-5 pt-4 md:px-0 mb-20">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h6 className="text-3xl font-bold">Rated {average}</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 fill-current ${average ? "text-yellow-400" : "text-white"}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
            </svg>
          </div>
          <p className="mt-3">{total_count} verified reviews</p>
        </div>
        <div className="btn hover:bg-[#49AD91]-700 flex h-12 justify-center rounded bg-[#49AD91] p-3 pl-5 pr-5 align-middle font-medium text-white">
          ADD A REVIEW
        </div>
      </div>

      {/* Breakdown of star counts */}
      <div className="mt-4">
        <div className="flex items-center">
          {fillStars(5)} {/* Display 5 stars */}
          <div className="ml-3 text-[#A5A1A1]">({five_star_count})</div>
        </div>
        <div className="mt-2 flex items-center">
          {fillStars(4)} {/* Display 4 stars */}
          <div className="ml-3 text-[#A5A1A1]">({four_star_count})</div>
        </div>
        <div className="mt-2 flex items-center">
          {fillStars(3)} {/* Display 3 stars */}
          <div className="ml-3 text-[#A5A1A1]">({three_star_count})</div>
        </div>
        <div className="mt-2 flex items-center">
          {fillStars(2)} {/* Display 2 stars */}
          <div className="ml-3 text-[#A5A1A1]">({two_star_count})</div>
        </div>
        <div className="mt-2 flex items-center">
          {fillStars(1)} {/* Display 1 star */}
          <div className="ml-3 text-[#A5A1A1]">({one_star_count})</div>
        </div>
      </div>
    </div>
  );
}
