"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f7fcfc] py-12 mt-[2px]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Reach out to us for any questions or concerns.
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="mx-auto max-w-[1075px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#68d7b7]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#49AD91]" />
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">
                  S.F.NO. 315, Angels Garden, Nagamanaickenpalayam, Pattanam, 
                  </p>
                  <p className="text-gray-600">Coimbatore, Tamil Nadu, 641016</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#49AD91]" />
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">info@wolpin.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#49AD91]" />
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 1234 678 1011</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036926!2d-73.9877316845941!3d40.74844097932676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903c1c7a8a5%3A0x6b8b1b1b1b1b1b1b!2s123%20Ecommerce%20Street%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1633020400000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;