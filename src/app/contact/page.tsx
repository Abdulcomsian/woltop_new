"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useGetContactInfoQuery } from "~/store/api/contactInfoApi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import utils from "~/utils";
import { toast } from "react-toastify";

const ContactPage = () => {
  const { data: contactInfoResponse } = useGetContactInfoQuery({});

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      const response = await fetch(`${utils.BASE_URL}/contact`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      toast.success("Thank you for contacting us! We'll get back to you soon.");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="mt-[2px] bg-[#f7fcfc] py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Reach out to us for any questions or concerns.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1075px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-lg md:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-6">
                    {/* <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label> */}
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div className="mb-6">
                    {/* <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label> */}
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <div className="mb-6">
                    {/* <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label> */}
                    <Field
                      type="text"
                      name="phone"
                      className="mt-1 w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div className="mb-6">
                    {/* <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label> */}
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#68d7b7]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="rounded-lg bg-white h-fit p-4 shadow-lg md:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-12 w-12 text-[#49AD91]" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">
                    {contactInfoResponse?.data?.address || "Default Address"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[#49AD91]" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">
                    {contactInfoResponse?.data?.email || "info@example.com"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-[#49AD91]" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">
                    {contactInfoResponse?.data?.contact_number ||
                      "+1 234 567 890"}
                  </p>
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
