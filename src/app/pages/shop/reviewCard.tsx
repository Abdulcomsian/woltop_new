import Pagination from "~/components/pagination";
import { useGetReviewByProductQuery } from "~/store/api/reviewsApi";

interface ReviewCardProps {
  slug: string;
}

export default function ReviewCard({ slug }: ReviewCardProps) {
  const { data: review } = useGetReviewByProductQuery(slug);
  const reviewsData = review ? { data: review, status: true } : null;
  // console.log("Reviws Details", reviewsData);

  return (
    <div className="overflow-y-auto grid grid-cols-1 w-full mx-auto">
      {reviewsData?.data?.data?.map((review: any) => (
        <div
          key={review.id}
          className="w-full flex-shrink-0 rounded-lg border-2 border-dashed bg-white p-6 mb-5 shadow-md"
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
            {/* <svg
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.02075 9.41664C6.67696 9.41664 6.34704 9.46906 6.01867 9.51685C6.12504 9.15918 6.2345 8.79535 6.41025 8.46852C6.586 7.99368 6.86042 7.58206 7.13329 7.16735C7.36146 6.71872 7.76383 6.41502 8.05984 6.03114C8.36971 5.65806 8.79213 5.40985 9.12667 5.09997C9.45504 4.77622 9.88517 4.61435 10.2274 4.38618C10.5851 4.18114 10.8965 3.95452 11.2295 3.8466L12.0605 3.50435L12.7912 3.20064L12.0435 0.212891L11.1231 0.43489C10.8287 0.50889 10.4695 0.595223 10.0609 0.698515C9.64313 0.775598 9.19759 0.986807 8.70117 1.17952C8.21092 1.39843 7.64359 1.54643 7.11634 1.89793C6.586 2.23402 5.97396 2.5146 5.43438 2.96477C4.91175 3.42881 4.28121 3.83118 3.81563 4.42164C3.30688 4.97356 2.80429 5.55322 2.41425 6.21306C1.96254 6.84206 1.65575 7.53272 1.332 8.21568C1.03909 8.89864 0.80321 9.59702 0.610502 10.2753C0.245127 11.6351 0.0817104 12.927 0.018502 14.0324C-0.0339146 15.1393 -0.00308129 16.0597 0.0616687 16.7257C0.0847937 17.0402 0.127961 17.3454 0.158794 17.5566L0.197335 17.8156L0.237419 17.8064C0.511621 19.0873 1.14285 20.2643 2.05807 21.2014C2.9733 22.1385 4.13512 22.7974 5.40915 23.1017C6.68318 23.4061 8.01736 23.3436 9.25733 22.9214C10.4973 22.4992 11.5924 21.7346 12.416 20.716C13.2395 19.6974 13.7579 18.4664 13.9111 17.1655C14.0643 15.8646 13.8461 14.5469 13.2817 13.3649C12.7173 12.1828 11.8297 11.1847 10.7218 10.486C9.61378 9.78731 8.33064 9.41655 7.02075 9.41664ZM23.9791 9.41664C23.6353 9.41664 23.3054 9.46906 22.977 9.51685C23.0834 9.15918 23.1928 8.79535 23.3686 8.46852C23.5443 7.99368 23.8188 7.58206 24.0916 7.16735C24.3198 6.71872 24.7222 6.41502 25.0182 6.03114C25.328 5.65806 25.7505 5.40985 26.085 5.09997C26.4134 4.77622 26.8435 4.61435 27.1858 4.38618C27.5434 4.18114 27.8548 3.95452 28.1878 3.8466L29.0188 3.50435L29.7495 3.20064L29.0018 0.212891L28.0815 0.43489C27.787 0.50889 27.4278 0.595223 27.0193 0.698515C26.6015 0.775598 26.1559 0.986807 25.6595 1.17952C25.1708 1.39997 24.6019 1.54643 24.0747 1.89947C23.5443 2.23556 22.9323 2.51614 22.3927 2.96631C21.8701 3.43035 21.2395 3.83272 20.774 4.42164C20.2652 4.97356 19.7626 5.55322 19.3726 6.21306C18.9209 6.84206 18.6141 7.53272 18.2903 8.21568C17.9974 8.89864 17.7615 9.59702 17.5688 10.2753C17.2035 11.6351 17.04 12.927 16.9768 14.0324C16.9244 15.1393 16.9553 16.0597 17.02 16.7257C17.0431 17.0402 17.0863 17.3454 17.1171 17.5566L17.1557 17.8156L17.1958 17.8064C17.47 19.0873 18.1012 20.2643 19.0164 21.2014C19.9316 22.1385 21.0935 22.7974 22.3675 23.1017C23.6415 23.4061 24.9757 23.3436 26.2157 22.9214C27.4557 22.4992 28.5507 21.7346 29.3743 20.716C30.1979 19.6974 30.7162 18.4664 30.8694 17.1655C31.0226 15.8646 30.8044 14.5469 30.24 13.3649C29.6756 12.1828 28.788 11.1847 27.6801 10.486C26.5721 9.78731 25.289 9.41655 23.9791 9.41664Z"
                fill="black"
              ></path>
            </svg> */}
          </div>
        </div>
      ))}
        <Pagination reviewsData={reviewsData?.data}></Pagination>
    </div>

  );
}
