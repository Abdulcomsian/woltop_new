import React, { useState } from 'react'



export default function moreInformation() {

const [isVisible, setIsVisible] = useState(false); // State to manage visibility

const toggleVisibility = () => {
  setIsVisible(!isVisible); // Toggle the visibility on click
};

  return (
    
        <div className="">
          {/* Header Section */}
          <div
            className="flex py-2 justify-between rounded-3xl w-full align-middle mt-4 border-b cursor-pointer"
            onClick={toggleVisibility}
          >
            <h1 className="font-semibold text-xl">Additional Information</h1>
            <div className="pr-4 pt-1 mt-1">
              <svg
                width="11"
                height="11"
                className=""
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.44 6.46H6.18V10.78H4.48V6.46H0.24V4.92H4.48V0.579999H6.18V4.92H10.44V6.46Z"
                  fill="#655F5F"
                />
              </svg>
            </div>
          </div>
    
          {/* Additional Information Section (conditionally rendered) */}
          {isVisible && (
            <div className="w-full mx-auto bg-white p-4 border-2 border-dashed border-gray-300 rounded-md">
              <p className="p-2 text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nesciunt repellendus officia exercitationem aspernatur sapiente architecto
                expedita aliquid, corrupti suscipit obcaecati nostrum fugit nihil. Similique voluptate error voluptatum debitis delectus?
              </p>
    
              <h6>Product Code: 5043</h6>
    
              <table className="min-w-full table-auto border-1 mt-4 border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Item</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-4 py-2 text-sm text-gray-600">Item 1</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Description of Item 1</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-4 py-2 text-sm text-gray-600">Item 2</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Description of Item 2</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-4 py-2 text-sm text-gray-600">Item 3</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Description of Item 3</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-4 py-2 text-sm text-gray-600">Item 4</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Description of Item 4</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2 text-sm text-gray-600">Item 5</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Description of Item 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
   
    
  )
}
