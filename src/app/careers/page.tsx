"use client";
import SearchIcon from "../../assets/img/search-outline.svg";
import ClearIcon from "../../assets/img/ci_arrow-reload-02.svg";
import { useState } from "react";
import Image from "next/image";
import { useGetCareersQuery } from "~/store/api/careersApi";
import { Select } from "antd";

const { Option } = Select;

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const CareersPage = () => {
  const { data, isLoading } = useGetCareersQuery([]);
  const careers = data?.data || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    level: "",
  });

  const filteredCareers = careers.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.jobType ? job.job_type === filters.jobType : true) &&
      (filters.location ? job.location === filters.location : true) &&
      (filters.level ? job.level === filters.level : true),
  );

  return (
    <div className="mx-auto max-w-[1075px] px-3">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-4 py-6 text-center md:py-12">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-[48px]">
          Join Our Team
        </h1>
      </div>

      <div className="rounded-[10px] bg-[#edf8f4] px-[25px] py-[21px]">
        <div className="relative mb-5 max-w-[458px] md:mb-[38px]">
          <input
            type="text"
            placeholder="Find Job"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-[70px] border border-[#DBDBDB] py-2 pl-4 pr-12 text-base placeholder:text-[#828282] focus:outline-none md:py-[14px] md:text-[20px]"
          />
          <div className="absolute inset-y-0 right-0 flex w-[76px] cursor-pointer items-center justify-center rounded-r-[70px] bg-[#49AD91] focus:outline-none">
            <Image src={SearchIcon} alt="Search" />
          </div>
        </div>

        <div className="filters flex items-center justify-between gap-3 overflow-x-auto">
          <div className="dropdowns flex space-x-4 md:space-x-8">
            <Select
              className="w-40" // Adjust width as needed
              placeholder="Job Type"
              value={filters.jobType || undefined}
              onChange={(value) => setFilters({ ...filters, jobType: value })}
            >
              <Option value="">Job Type</Option>
              <Option value="full_time">Full Time</Option>
              <Option value="part_time">Part Time</Option>
            </Select>

            <Select
              className="w-40" // Adjust width as needed
              placeholder="Location"
              value={filters.location || undefined}
              onChange={(value) => setFilters({ ...filters, location: value })}
            >
              <Option value="">Location</Option>
              <Option value="USA">USA</Option>
              <Option value="UK">UK</Option>
              <Option value="Finland">Finland</Option>
              <Option value="Austria">Austria</Option>
            </Select>

            <Select
              className="w-40" // Adjust width as needed
              placeholder="Experience"
              value={filters.level || undefined}
              onChange={(value) => setFilters({ ...filters, level: value })}
            >
              <Option value="">Experience</Option>
              <Option value="junior">Junior</Option>
              <Option value="mid">Mid</Option>
              <Option value="senior">Senior</Option>
            </Select>
          </div>

          <div
            className="clearbtn flex cursor-pointer items-center gap-2 md:gap-[15px]"
            onClick={() => setFilters({ jobType: "", location: "", level: "" })}
          >
            <Image src={ClearIcon} alt="Clear Filters" />
            <button className="min-w-[96px] text-sm text-[#7A7474] focus:outline-none md:text-lg">
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="mx-auto max-w-[1075px] py-12">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        ) : filteredCareers.length > 0 ? (
          filteredCareers.map((job) => (
            <div
              key={job.id}
              className="flex flex-col items-center justify-between gap-5 border-t-[1px] border-[#DBDBDB] px-4 py-4 transition-transform md:flex-row md:gap-0 md:px-0 md:py-8"
            >
              <div className="flex flex-col items-center gap-4 md:items-start">
                <h2 className="text-lg font-semibold text-[#0B0A0A] md:text-2xl">
                  {job.title}
                </h2>
                {/* <p className="text-sm text-[#505050]">{job.description}</p> */}
                <div className="flex items-center gap-2">
                  <span className="rounded-[45px] bg-[#D9D9D94D] px-5 py-[6px] text-sm text-[#505050]">
                    {job.job_type.replace("_", " ")}
                  </span>
                  <span className="rounded-[45px] bg-[#D9D9D94D] px-5 py-[6px] text-sm text-[#505050]">
                    {job.location}
                  </span>
                  <span className="rounded-[45px] bg-[#D9D9D94D] px-5 py-[6px] text-sm text-[#505050]">
                    {job.level}
                  </span>
                </div>
              </div>
              <a
                href={job.job_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[45px] items-center justify-center rounded-[6px] bg-[#49AD91] px-[51px] text-base text-white hover:bg-[#68d7b7]"
              >
                Apply
              </a>
            </div>
          ))
        ) : (
          <p className="text-center">No job openings found.</p>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
