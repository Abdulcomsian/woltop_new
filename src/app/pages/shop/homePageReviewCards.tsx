interface ReviewCardProps {
  stars: number;
  review: string;
  name: string;
  role: string;
  avatar: string;
}

function ReviewCard({ stars, review, name, role, avatar }: ReviewCardProps) {
  return (
    <div className="min-w-[333px] mt-[56px] md:mt-[63px] rounded-lg border-2 border-dashed bg-white p-6 shadow-md md:w-auto md:flex-shrink-0">
      <div className="mb-4 hidden md:flex gap-1">
        <div className="flex text-yellow-400 gap-[6px]">
          {Array.from({ length: stars }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-[30px] w-[30px] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z"></path>
            </svg>
          ))}
        </div>
      </div>
      <p className="mb-4 text-xs text-[#0B0B0B] md:text-base leading-[24px] md:leading-[30px]">{review}</p>
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
            <p className="font-poppins text-xs text-[#0B0B0B]">{role}</p>
          </div>
        </div>
        <svg
          width="27"
          height="21"
          viewBox="0 0 27 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.13669 8.69773C5.83653 8.69773 5.54849 8.74381 5.2618 8.78583C5.35467 8.47137 5.45023 8.1515 5.60368 7.86415C5.75712 7.44669 5.99671 7.08479 6.23495 6.72019C6.43416 6.32577 6.78546 6.05875 7.04389 5.72126C7.31444 5.39325 7.68324 5.17503 7.97532 4.90259C8.26202 4.61796 8.63755 4.47564 8.93636 4.27504C9.24863 4.09477 9.52052 3.89552 9.81125 3.80065L10.5367 3.49975L11.1747 3.23273L10.5219 0.605957L9.71838 0.801135C9.4613 0.866194 9.14768 0.942097 8.79099 1.03291C8.42623 1.10068 8.03723 1.28637 7.60382 1.4558C7.1758 1.64826 6.68047 1.77838 6.22014 2.08741C5.75712 2.38289 5.22276 2.62958 4.75166 3.02535C4.29537 3.43333 3.74486 3.78709 3.33837 4.30621C2.89419 4.79145 2.4554 5.30108 2.11486 5.88119C1.72049 6.4342 1.45263 7.04142 1.16997 7.64186C0.914236 8.24231 0.708299 8.85631 0.540049 9.45269C0.221049 10.6482 0.0783735 11.784 0.0231878 12.7558C-0.022576 13.729 0.00434386 14.5382 0.0608756 15.1237C0.0810655 15.4002 0.118753 15.6686 0.145673 15.8543L0.179323 16.082L0.214319 16.0738C0.453719 17.2 1.00483 18.2348 1.80389 19.0587C2.60295 19.8826 3.61732 20.4618 4.72964 20.7294C5.84197 20.997 7.0068 20.942 8.0894 20.5708C9.17199 20.1997 10.1281 19.5274 10.8471 18.6319C11.5662 17.7363 12.0187 16.6541 12.1525 15.5104C12.2863 14.3667 12.0957 13.2082 11.6029 12.1689C11.1102 11.1297 10.3353 10.2522 9.36795 9.6379C8.40061 9.02361 7.28032 8.69765 6.13669 8.69773ZM20.9426 8.69773C20.6425 8.69773 20.3544 8.74381 20.0677 8.78583C20.1606 8.47137 20.2562 8.1515 20.4096 7.86415C20.5631 7.44669 20.8026 7.08479 21.0409 6.72019C21.2401 6.32577 21.5914 6.05875 21.8498 5.72126C22.1204 5.39325 22.4892 5.17503 22.7812 4.90259C23.0679 4.61796 23.4435 4.47564 23.7423 4.27504C24.0546 4.09477 24.3264 3.89552 24.6172 3.80065L25.3427 3.49975L25.9807 3.23273L25.3279 0.605957L24.5243 0.801135C24.2672 0.866194 23.9536 0.942097 23.5969 1.03291C23.2322 1.10068 22.8432 1.28637 22.4098 1.4558C21.9831 1.64962 21.4864 1.77838 21.0261 2.08877C20.5631 2.38425 20.0287 2.63093 19.5576 3.02671C19.1013 3.43469 18.5508 3.78845 18.1443 4.30621C17.7001 4.79145 17.2613 5.30108 16.9208 5.88119C16.5264 6.4342 16.2586 7.04142 15.9759 7.64186C15.7202 8.24231 15.5142 8.85631 15.346 9.45269C15.027 10.6482 14.8843 11.784 14.8291 12.7558C14.7834 13.729 14.8103 14.5382 14.8668 15.1237C14.887 15.4002 14.9247 15.6686 14.9516 15.8543L14.9853 16.082L15.0202 16.0738C15.2596 17.2 15.8108 18.2348 16.6098 19.0587C17.4089 19.8826 18.4232 20.4618 19.5356 20.7294C20.6479 20.997 21.8127 20.942 22.8953 20.5708C23.9779 20.1997 24.934 19.5274 25.6531 18.6319C26.3721 17.7363 26.8247 16.6541 26.9584 15.5104C27.0922 14.3667 26.9017 13.2082 26.4089 12.1689C25.9161 11.1297 25.1412 10.2522 24.1739 9.6379C23.2065 9.02361 22.0863 8.69765 20.9426 8.69773Z"
            fill="black"
          />
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
    <div className="mt-10 flex gap-6 scrollbar-hide overflow-x-auto md:grid md:grid-cols-2 md:overflow-hidden">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
}
