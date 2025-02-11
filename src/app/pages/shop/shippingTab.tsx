import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetDeliveryPreferenceQuery } from "~/store/api/deliveryPreference";

interface ShippingTabProps {
  setActiveTab: (tab: string) => void;
}

const ShippingTab: React.FC<ShippingTabProps> = ({ setActiveTab }) => {
  const { data: delivery_preferences } = useGetDeliveryPreferenceQuery({});
  const [loading, setLoading] = useState(false);

  console.log(delivery_preferences, "delivery_preferences");

  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumber: "",
      pincode: "",
      city: "",
      state: "",
      address: "",
      locality: "",
      landmark: "",
      deliveryPreference: "home",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      mobileNumber: Yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9]{10}$/, "Invalid mobile number"),
      pincode: Yup.string()
        .required("Pincode is required")
        .matches(/^[0-9]{6}$/, "Invalid pincode"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      address: Yup.string().required("Address is required"),
      locality: Yup.string().required("Locality is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      setActiveTab("payment");
    },
  });

  const handlePincodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const pincode = e.target.value;
    formik.setFieldValue("pincode", pincode);

    if (pincode.length === 6) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pincode}`,
        );
        const data = await response.json();

        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          formik.setFieldValue("city", postOffice.District);
          formik.setFieldValue("state", postOffice.State);
        } else {
          formik.setFieldValue("city", "");
          formik.setFieldValue("state", "");
          formik.setFieldError("pincode", "Invalid pincode");
        }
      } catch (error) {
        console.error("Error fetching pincode details:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="m-auto w-full max-w-[631px] bg-white">
      <h5 className="text-center text-xs font-semibold text-gray-800 md:text-[18px]">
        ADD ADDRESS
      </h5>
      <hr className="my-4 border-t-2 border-gray-200" />

      <h5 className="mb-4 text-xs font-semibold md:text-[18px]">
        Contact Details
      </h5>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Name *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-sm text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="react-tel-input mb-4">
          <input
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Mobile Number *"
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNumber}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
            <div className="text-sm text-red-500">
              {formik.errors.mobileNumber}
            </div>
          ) : null}
        </div>

        <h5 className="mb-4 text-xs font-semibold text-gray-800 md:text-[17px]">
          Address
        </h5>

        <div className="mb-4">
          <input
            id="pincode"
            name="pincode"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Pincode *"
            onChange={handlePincodeChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode}
          />
          {formik.touched.pincode && formik.errors.pincode ? (
            <div className="text-sm text-red-500">{formik.errors.pincode}</div>
          ) : null}
        </div>

        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <input
              id="city"
              name="city"
              type="text"
              className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="City / Town *"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              disabled={loading}
              readOnly
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-sm text-red-500">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="flex-1">
            <input
              id="state"
              name="state"
              type="text"
              className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="State *"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              disabled={loading}
              readOnly
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="text-sm text-red-500">{formik.errors.state}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-4">
          <input
            id="address"
            name="address"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Address *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-sm text-red-500">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <input
            id="locality"
            name="locality"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Locality *"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.locality}
          />
          {formik.touched.locality && formik.errors.locality ? (
            <div className="text-sm text-red-500">{formik.errors.locality}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <input
            id="landmark"
            name="landmark"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Landmark (optional)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.landmark}
          />
        </div>

        <h5 className="mb-4 text-xs font-medium text-gray-800 md:text-[18px]">
          Delivery Preference
        </h5>

        <div className="mx-auto mb-5 w-full">
          <fieldset className="space-y-6">
            <div className="flex gap-[15px]">
              {delivery_preferences?.data?.map((item) => (
                <div key={item.id} className="flex-1">
                  <label
                    htmlFor={`deliveryPreference-${item.name.toLowerCase()}`}
                    className={`relative flex cursor-pointer flex-col rounded-lg bg-white px-[13px] py-[13px] shadow-md md:px-[21px] md:py-[14px] ${
                      formik.values.deliveryPreference ===
                      item.name.toLowerCase()
                        ? "border-2 border-[#49AD91] bg-[#49AD910D]"
                        : ""
                    }`}
                  >
                    <h4 className="text-[18px] font-medium text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-[12px] text-[#7A7474]">{item.time}</p>
                    <input
                      type="radio"
                      name="deliveryPreference"
                      id={`deliveryPreference-${item.name.toLowerCase()}`}
                      value={item.name.toLowerCase()}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={
                        formik.values.deliveryPreference ===
                        item.name.toLowerCase()
                      }
                      className="absolute h-0 w-0 appearance-none"
                    />
                    {formik.values.deliveryPreference ===
                      item.name.toLowerCase() && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-lg border-2 border-[#49AD91] bg-[#49AD910D] bg-opacity-50"
                      >
                        <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#49AD91]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-white"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          className="hover:bg-accent-hover focus:ring-accent-700 inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-[#49AD91] px-5 py-[18px] font-semibold text-white focus:ring-2"
        >
          ADD ADDRESS
        </button>

        <a
          href="#"
          onClick={() => setActiveTab("cart")}
          className="font-regular hover:text-accent-hover mt-4 block text-center text-[#49AD91] transition-colors duration-200"
        >
          Cancel to go back
        </a>
      </form>
    </div>
  );
};

export default ShippingTab;
