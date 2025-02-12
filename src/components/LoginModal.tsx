"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import utils from "~/utils";
import { useDispatch } from "react-redux";
import { login, register } from "~/store/slices/userSlice";

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const registerValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: isLoginForm
      ? { email: "", password: "" }
      : { name: "", email: "", password: "" },
    validationSchema: isLoginForm
      ? loginValidationSchema
      : registerValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const formData = new FormData();

      if (isLoginForm) {
        formData.append("email", values.email);
        formData.append("password", values.password);
      } else {
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
      }

      const endpoint = isLoginForm ? "/login" : "/register";

      try {
        const response = await fetch(`${utils.BASE_URL}${endpoint}`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("API Response:", result);
        if (isLoginForm) {
          localStorage.setItem("token", result.token);

          dispatch(
            login({
              user: result.user,
              token: result.token,
            })
          );

          alert("Login successful!");
        } else {
          dispatch(
            register({
              user: result.user,
            })
          );

          alert("Registration successful!");
        }
        onClose();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative w-full max-w-md rounded-lg bg-white px-6 py-12 m-2 shadow-lg">
        <button
          className="absolute right-3 top-3"
          onClick={onClose}
          type="button"
        >
          <X />
        </button>
        <h2 className="mb-4 text-center text-xl font-semibold">
          {isLoginForm ? "Login to continue" : "Create an account"}
        </h2>
        <form className="mx-auto max-w-[300px]" onSubmit={formik.handleSubmit}>
          {isLoginForm ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500`}
                  placeholder="Enter your email"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500`}
                  placeholder="Enter your password"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.errors.name && formik.touched.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500`}
                  placeholder="Enter your full name"
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500`}
                  placeholder="Enter your email"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500`}
                  placeholder="Enter your password"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </>
          )}
          <div className="w-full">
            <button
              type="submit"
              className="w-full rounded-md bg-[#49AD91] px-4 py-2 text-white hover:bg-[#68d7b7]"
            >
              {isLoginForm ? "Login" : "Register"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLoginForm(!isLoginForm)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {isLoginForm
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
