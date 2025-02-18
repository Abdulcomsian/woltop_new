// app/careers/page.jsx
"use client";
import SearchIcon from "../../assets/img/search-outline.svg";
import ClearIcon from "../../assets/img/ci_arrow-reload-02.svg";
import { useState } from "react";
import Image from "next/image";

const CareersPage = () => {
  const [jobOpenings, setJobOpenings] = useState([
    {
      id: 1,
      title: "Business Analyst",
      type: "Full Time",
      location: "USA",
      description: "Mid Level",
    },
    {
      id: 2,
      title: "Front End Developer (Flutter)",
      type: "Full Time",
      location: "USA",
      description: "Mid Level",
    },
    {
      id: 3,
      title: "Back End Developer (Node JS)",
      type: "Full Time",
      location: "USA",
      description: "Mid Level",
    },
    {
      id: 4,
      title: "Marketing Analyst",
      type: "Full Time",
      location: "USA",
      description: "Mid Level",
    },
    {
      id: 5,
      title: "Machine Learning",
      type: "Full Time",
      location: "USA",
      description: "Mid Level",
    },
    {
      id: 6,
      title: "Deep Learning Engineer",
      type: "Full Time",
      location: "USA",
      description: "Mid Level",
    },
  ]);

  return (
    <div className="mx-auto max-w-[1075px]">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-[48px]">
          Join Our Team
        </h1>
      </div>

      <div className="rounded-[10px] bg-[#f7fcfc] px-[25px] py-[21px]">
        <div className="relative mb-5 max-w-[458px] md:mb-[38px]">
          <input
            type="text"
            placeholder="Find Job"
            className="w-full rounded-[70px] border border-[#DBDBDB] py-2 pl-4 pr-12 text-base placeholder:text-[#828282] focus:outline-none md:py-[14px] md:text-[20px]"
          />
          <div className="absolute inset-y-0 right-0 flex w-[76px] cursor-pointer items-center justify-center rounded-r-[70px] bg-[#49AD91] focus:outline-none">
            <Image src={SearchIcon} alt="" />
          </div>
        </div>

        <div className="filters flex items-center justify-between gap-3 overflow-x-auto">
          <div className="dropdowns flex space-x-4 md:space-x-8">
            <select className="bg-transparent text-sm text-[#0B0A0A] focus:outline-none md:text-lg">
              <option value="">Job Type</option>
              <option value="1">Option 1.1</option>
              <option value="2">Option 1.2</option>
            </select>

            <select className="bg-transparent text-sm text-[#0B0A0A] focus:outline-none md:text-lg">
              <option value="">Location</option>
              <option value="1">Option 2.1</option>
              <option value="2">Option 2.2</option>
            </select>

            <select className="bg-transparent text-sm text-[#0B0A0A] focus:outline-none md:text-lg">
              <option value="">Experience</option>
              <option value="1">Option 3.1</option>
              <option value="2">Option 3.2</option>
            </select>

            <select className="bg-transparent text-sm text-[#0B0A0A] focus:outline-none md:text-lg">
              <option value="">Job function</option>
              <option value="1">Option 4.1</option>
              <option value="2">Option 4.2</option>
            </select>
          </div>
          <div className="clearbtn flex items-center cursor-pointer gap-2 md:gap-[15px]">
            <Image src={ClearIcon} alt="" />
            <button className="min-w-[96px] text-sm text-[#7A7474] focus:outline-none md:text-lg">
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="mx-auto max-w-[1075px] py-12">
        <div className="flex items-center justify-end mb-5 md:mb-[27px]">
          <span className="text-[#0B0A0A] text-sm md:text-base px-2">6 Results |</span>
          <span className="text-[#828282] text-sm md:text-base">Sort By:</span>
          <select className="bg-transparent text-sm text-[#828282] focus:outline-none md:text-base">
              <option value="">Sort By:</option>
              <option value="1">Latest</option>
              <option value="2">Oldest</option>
            </select>
        </div>
        {jobOpenings?.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-center justify-between gap-5 border-t-[1px] border-[#DBDBDB] px-4 md:px-0 py-4 md:py-8 transition-transform md:flex-row md:gap-0"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-[#0B0A0A] md:text-2xl">
                {job.title}
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-[45px] bg-[#D9D9D94D]">
                  <span className="px-5 py-[6px] text-sm text-[#505050]">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center rounded-[45px] bg-[#D9D9D94D]">
                  <span className="px-5 py-[6px] text-sm text-[#505050]">
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center rounded-[45px] bg-[#D9D9D94D]">
                  <span className="px-5 py-[6px] text-sm text-[#505050]">
                    {job.description}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => alert(`Applying for ${job.title}`)}
              className="h-[40] rounded-[6px] bg-[#49AD91] px-[51px] text-base text-white hover:bg-[#68d7b7]"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
