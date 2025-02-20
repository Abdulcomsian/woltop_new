import { useGetTeamQuery } from "~/store/api/teamApi";

export default function OurTeam({ bannerData }) {
  const { data: team, isLoading } = useGetTeamQuery({});

  const skeletonCount = 6;

  return (
    <div className="container mx-auto">
      <div className="py-10 text-center md:py-[62px]">
        <h6 className="text-[22px] font-semibold text-black md:text-[34px]">
          {bannerData?.team_title || "Meet Our Team"}
        </h6>
        <p className="mx-auto max-w-2xl text-xs text-[#4E4949] md:text-lg">
          {bannerData?.team_description ||
            "Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo maecenas auctor sodales. Libero ut tortor dignissim"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <div
                key={index}
                className="h-full transform animate-pulse rounded transition-all duration-200 hover:-translate-y-1 hover:shadow"
              >
                <div className="mx-auto rounded">
                  <div className="relative h-[168.62px] bg-[#F7F7F7] md:h-[336px]">
                    <div className="absolute bottom-0 left-0 right-0 mx-auto h-full w-full bg-gray-300"></div>
                  </div>
                  <div className="space-y-2 py-4">
                    <div className="mx-auto h-4 w-3/4 rounded-md bg-gray-300"></div>
                    <div className="mx-auto h-4 w-1/2 rounded-md bg-gray-300"></div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            ))
          : team?.data?.map((member) => (
              <article
                key={member.id}
                className="product-card h-full transform rounded transition-all duration-200 hover:-translate-y-1 hover:shadow"
              >
                <div className="mx-auto rounded">
                  <div className="relative h-[168.62px] bg-[#F7F7F7] md:h-[336px]">
                    <img
                      className="absolute bottom-0 left-0 right-0 mx-auto h-full object-cover"
                      src={member.image || "/default-profile.png"}
                      alt={`${member.name}'s profile`}
                    />
                  </div>
                  <div className="py-4">
                    <div className="text-base font-medium text-black md:text-2xl">
                      {member.name}
                    </div>
                    <p className="text-xs tracking-[2%] text-[#0B0A0A] md:text-[18px]">
                      {member.designation}
                    </p>
                  </div>
                  <div className="mb-10 flex gap-4">
                    {member.x_profile && (
                      <a
                        href={member.x_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 2.18579C3.70435 2.18579 2.94129 2.50186 2.37868 3.06447C1.81607 3.62708 1.5 4.39014 1.5 5.18579V20.1858C1.5 20.9814 1.81607 21.7445 2.37868 22.3071C2.94129 22.8697 3.70435 23.1858 4.5 23.1858H19.5C20.2956 23.1858 21.0587 22.8697 21.6213 22.3071C22.1839 21.7445 22.5 20.9814 22.5 20.1858V5.18579C22.5 4.39014 22.1839 3.62708 21.6213 3.06447C21.0587 2.50186 20.2956 2.18579 19.5 2.18579H4.5ZM6.153 8.63129C6.6284 8.63129 7.08433 8.44244 7.42049 8.10628C7.75665 7.77012 7.9455 7.31419 7.9455 6.83879C7.9455 6.36339 7.75665 5.90746 7.42049 5.5713C7.08433 5.23514 6.6284 5.04629 6.153 5.04629C5.6776 5.04629 5.22167 5.23514 4.88551 5.5713C4.54935 5.90746 4.3605 6.36339 4.3605 6.83879C4.3605 7.31419 4.54935 7.77012 4.88551 8.10628C5.22167 8.44244 5.6776 8.63129 6.153 8.63129ZM7.653 19.9053V10.0368H4.653V19.9053H7.653ZM9.645 10.0368H12.645V11.3583C13.0875 10.6653 14.0595 9.73229 15.867 9.73229C18.024 9.73229 19.1955 11.1618 19.1955 13.8813C19.1955 14.0118 19.2075 14.6073 19.2075 14.6073V19.9038H16.2075V14.6088C16.2075 13.8813 16.0545 12.4518 14.4375 12.4518C12.819 12.4518 12.6825 14.2488 12.645 15.4248V19.9038H9.645V10.0368Z"
                            fill="#908B8B"
                          />
                        </svg>
                      </a>
                    )}
                    {member.linkedIn_profile && (
                      <a
                        href={member.linkedIn_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 21.6858L10.548 14.1378M10.548 14.1378L3 3.68579H8L13.452 11.2338M10.548 14.1378L16 21.6858H21L13.452 11.2338M21 3.68579L13.452 11.2338"
                            stroke="#908B8B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
      </div>
    </div>
  );
}
