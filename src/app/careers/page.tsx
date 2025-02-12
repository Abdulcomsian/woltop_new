// app/careers/page.jsx
"use client";

import { useState } from "react";
import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react";

const CareersPage = () => {
  const [jobOpenings, setJobOpenings] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full Time",
      location: "New York, NY",
      salary: "$80,000 - $100,000",
      description:
        "We are looking for a skilled Frontend Developer to join our team and help build amazing user experiences.",
    },
    {
      id: 2,
      title: "Backend Developer",
      type: "Full Time",
      location: "Remote",
      salary: "$90,000 - $110,000",
      description:
        "We are seeking a Backend Developer to design and implement scalable backend systems.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Part Time",
      location: "San Francisco, CA",
      salary: "$50,000 - $70,000",
      description:
        "We need a creative UI/UX Designer to craft beautiful and intuitive designs for our platform.",
    },
  ]);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f7fcfc] py-12 mt-[2px]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Careers</h1>
          <p className="mt-4 text-lg text-gray-600">
            Join our team and help us build the future of eCommerce. Explore our
            current job openings below.
          </p>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="mx-auto max-w-[1075px] px-4 py-12">
        <div className="space-y-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="rounded-lg bg-white p-8 shadow-md transition-transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {job.title}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-[#49AD91]" />
                  <span className="ml-2">{job.type}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#49AD91]" />
                  <span className="ml-2">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-[#49AD91]" />
                  <span className="ml-2">{job.salary}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
              <button
                onClick={() => alert(`Applying for ${job.title}`)}
                className="mt-6 rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#68d7b7]"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Don't See Your Dream Job?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're always looking for talented individuals to join our team. Send
            us your resume, and we'll contact you if a suitable position opens
            up.
          </p>
          <button
            onClick={() => alert("Submit your resume!")}
            className="mt-6 rounded-md bg-[#49AD91] px-6 py-3 text-white hover:bg-[#68d7b7]"
          >
            Submit Your Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default CareersPage;