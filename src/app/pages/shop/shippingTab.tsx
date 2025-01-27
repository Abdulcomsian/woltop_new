import React from "react";

interface ShippingTabProps {
  setActiveTab: (tab: string) => void;
}

const ShippingTab: React.FC<ShippingTabProps> = ({ setActiveTab }) => {
  return (
    <>
      <div className="m-auto w-full md:w-3/6 bg-white">
        <h5 className="text-center text-xs md:text-[18px] font-semibold text-gray-800">
          ADD ADDRESS
        </h5>
        <hr className="my-4 border-t-2 border-gray-200" />

        <h5 className="mb-4 text-xs md:text-[18px] font-semibold">Contact Details</h5>

        <div className="mb-4">
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Name *"
          />
        </div>

        <div className="react-tel-input mb-4">
          <div className="special-label text-gray-700">Phone</div>
          <input
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="1 (702) 123-4567"
            disabled
            type="tel"
            value="+1"
          />
        </div>

        <h5 className="mb-4 text-xs md:text-[17px] font-semibold text-gray-800">
          Address
        </h5>

        <div className="mb-4">
          <input
            id="pincode"
            name="pincode"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Pincode *"
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <input
              id="mobile1"
              name="mobile1"
              type="number"
              className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Mobile Number *"
            />
          </div>
          <div className="flex-1">
            <input
              id="mobile2"
              name="mobile2"
              type="number"
              className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Mobile Number *"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            id="address"
            name="address"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Address *"
          />
        </div>

        <div className="mb-4">
          <input
            id="locality"
            name="locality"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Locality *"
          />
        </div>

        <div className="mb-4">
          <input
            id="landmark"
            name="landmark"
            type="text"
            className="w-full rounded-md border border-gray-300 px-6 py-[17px] text-[15px] text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Landmark (optional)"
          />
        </div>

        <h5 className="mb-4 text-xs md:text-[18px] font-medium text-gray-800">
          Delivery Preference
        </h5>

        <div className="mx-auto mb-5 w-full">
          <fieldset className="space-y-6">
            <div className="flex gap-[15px]">
              <div className="flex-1">
                <label
                  htmlFor="plan-business"
                  className="relative flex cursor-pointer flex-col rounded-lg bg-white px-[13px] py-[13px] md:px-[21px] md:py-[14px] shadow-md"
                >
                  <h4 className="font-medium text-[18px] text-gray-800">Home</h4>
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
                    className="absolute inset-0 hidden rounded-lg border-2 border-[#49AD91] bg-[#49AD910D] bg-opacity-50"
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
                </label>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="plan-enterprise"
                  className="relative flex cursor-pointer flex-col rounded-lg bg-white px-[13px] py-[13px] md:px-[21px] md:py-[14px] shadow-md"
                >
                  <h4 className="font-medium text-[18px] text-gray-800">Work</h4>
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
                    className="absolute inset-0 hidden rounded-lg border-2 border-[#49AD91] bg-green-200 bg-opacity-10"
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
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <button
          onClick={() => setActiveTab("payment")}
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
      </div>
    </>
  );
};

export default ShippingTab;
