import React from "react";

const ShippingTab = ({ setActiveTab }) => {
  return (
    <section>
      <div className="m-auto w-2/3 bg-white p-3 max-[568px]:w-full md:p-4">
        <h5 className="text-center text-[18px] font-semibold text-gray-800">
          ADD ADDRESS
        </h5>
        <hr className="my-4 border-t-2 border-gray-200" />

        <h5 className="mb-4 text-[18px] font-semibold">Contact Details</h5>

        <div className="mb-4">
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Name *"
          />
        </div>

        <div className="react-tel-input mb-4">
          <div className="special-label text-gray-700">Phone</div>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="1 (702) 123-4567"
            disabled
            type="tel"
            value="+1"
          />
        </div>

        <h5 className="mb-4 text-[18px] font-semibold text-gray-800">
          Address
        </h5>

        <div className="mb-4">
          <input
            id="pincode"
            name="pincode"
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Pincode *"
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <input
              id="mobile1"
              name="mobile1"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Mobile Number *"
            />
          </div>
          <div className="flex-1">
            <input
              id="mobile2"
              name="mobile2"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Mobile Number *"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            id="address"
            name="address"
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Address *"
          />
        </div>

        <div className="mb-4">
          <input
            id="locality"
            name="locality"
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Locality *"
          />
        </div>

        <div className="mb-4">
          <input
            id="landmark"
            name="landmark"
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Landmark (optional)"
          />
        </div>

        <h5 className="mb-4 text-[18px] font-semibold text-gray-800">
          Delivery Preference
        </h5>

        <div className="mx-auto mb-5 w-full">
          <fieldset className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="plan-business"
                  className="relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md"
                >
                  <h4 className="font-semibold text-gray-800">Home</h4>
                  <p className="text-[12px] text-[#7A7474]">
                    9 AM to 9 PM Delivery
                  </p>
                  <input
                    type="radio"
                    name="plan"
                    id="plan-business"
                    value="business"
                    className="absolute h-0 w-0 appearance-none"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10"
                  >
                    <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="plan-enterprise"
                  className="relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md"
                >
                  <h4 className="font-semibold text-gray-800">Work</h4>
                  <p className="text-[12px] text-[#7A7474]">9 AM to 5 PM</p>
                  <input
                    type="radio"
                    name="plan"
                    id="plan-enterprise"
                    value="enterprise"
                    className="absolute h-0 w-0 appearance-none"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10"
                  >
                    <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <button
          onClick={() => setActiveTab("payment")}
          className="hover:bg-accent-hover focus:ring-accent-700 inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-[#49AD91] px-5 py-2 font-semibold text-white focus:ring-2"
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
      </div>
    </section>
  );
};

export default ShippingTab;
