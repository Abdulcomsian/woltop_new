interface ReviewCardProps {
  stars: number;
  review: string;
  name: string;
  role: string;
  avatar: string;
}

function ReviewCard({ stars, review, name, role, avatar }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 rounded-lg border-2 border-dashed bg-white p-6 shadow-md md:w-auto">
      <div className="mb-4 flex gap-1">
        <div className="flex text-yellow-400">
          {Array.from({ length: stars }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
            </svg>
          ))}
        </div>
      </div>
      <p className="mb-4 text-gray-600">{review}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <img
              alt={name}
              src={avatar}
              loading="lazy"
              width="48"
              height="48"
              decoding="async"
            />
          </div>
          <div>
            <h4 className="font-poppins text-lg font-semibold text-black">
              {name}
            </h4>
            <p className="font-poppins text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <svg
          width="31"
          height="24"
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.02075 9.41664C6.67696 9.41664 6.34704 9.46906 6.01867 9.51685C6.12504 9.15918..."
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default function HomePageReviewCards() {
  const reviews = [
    {
      stars: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      name: "Kim Jhone",
      role: "CEO of joyhome",
      avatar: "https://ui-avatars.com/api/?name=Kim+Jhone&background=random",
    },
    {
      stars: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      name: "Kim Jhone",
      role: "CEO of joyhome",
      avatar: "https://ui-avatars.com/api/?name=Kim+Jhone&background=random",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
}
