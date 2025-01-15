import React, { useState } from "react";

interface ResponseData {
  data?: {
    sale_price?: number;
  };
}

export default function Calculator({ responseData }: { responseData: ResponseData }) {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [isMeter, setIsMeter] = useState(true); // Toggle between feet and meter
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const rollPrice = responseData?.data?.sale_price || 0;

  const handleToggle = () => setIsMeter(!isMeter);

  const calculateRollsAndPrice = () => {
    const conversionFactor = isMeter ? 1 : 3.28084;
    const adjustedWidth = width ? width * conversionFactor : 0;
    const adjustedHeight = height ? height * conversionFactor : 0;
    const rollsNeeded = Math.ceil((adjustedWidth * adjustedHeight) / 15.1);
    const totalPrice = rollsNeeded * rollPrice;
    return { rollsNeeded, totalPrice };
  };

  const { rollsNeeded, totalPrice } = calculateRollsAndPrice();

  return (
    <div>
      <div
        onClick={() => setIsCalculatorVisible(!isCalculatorVisible)}
        style={{ cursor: "pointer" }}
        className="Corsor mt-4 flex w-full justify-between rounded-3xl bg-[#FFF3F6] py-3 align-middle"
      >
        <div className="ml-4 mr-4">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 11.8125C5.5 12.1606 5.3683 12.4944 5.13388 12.7406C4.89946 12.9867 4.58152 13.125 4.25 13.125C3.91848 13.125 3.60054 12.9867 3.36612 12.7406C3.1317 12.4944 3 12.1606 3 11.8125C3 11.4644 3.1317 11.1306 3.36612 10.8844C3.60054 10.6383 3.91848 10.5 4.25 10.5C4.58152 10.5 4.89946 10.6383 5.13388 10.8844C5.3683 11.1306 5.5 11.4644 5.5 11.8125ZM5.5 15.75C5.5 16.0981 5.3683 16.4319 5.13388 16.6781C4.89946 16.9242 4.58152 17.0625 4.25 17.0625C3.91848 17.0625 3.60054 16.9242 3.36612 16.6781C3.1317 16.4319 3 16.0981 3 15.75C3 15.4019 3.1317 15.0681 3.36612 14.8219C3.60054 14.5758 3.91848 14.4375 4.25 14.4375C4.58152 14.4375 4.89946 14.5758 5.13388 14.8219C5.3683 15.0681 5.5 15.4019 5.5 15.75ZM11.75 13.125C12.0815 13.125 12.3995 12.9867 12.6339 12.7406C12.8683 12.4944 13 12.1606 13 11.8125C13 11.4644 12.8683 11.1306 12.6339 10.8844C12.3995 10.6383 12.0815 10.5 11.75 10.5C11.4185 10.5 11.1005 10.6383 10.8661 10.8844C10.6317 11.1306 10.5 11.4644 10.5 11.8125C10.5 12.1606 10.6317 12.4944 10.8661 12.7406C11.1005 12.9867 11.4185 13.125 11.75 13.125ZM13 15.75C13 16.0981 12.8683 16.4319 12.6339 16.6781C12.3995 16.9242 12.0815 17.0625 11.75 17.0625C11.4185 17.0625 11.1005 16.9242 10.8661 16.6781C10.6317 16.4319 10.5 16.0981 10.5 15.75C10.5 15.4019 10.6317 15.0681 10.8661 14.8219C11.1005 14.5758 11.4185 14.4375 11.75 14.4375C12.0815 14.4375 12.3995 14.5758 12.6339 14.8219C12.8683 15.0681 13 15.4019 13 15.75ZM8 13.125C8.33152 13.125 8.64946 12.9867 8.88388 12.7406C9.1183 12.4944 9.25 12.1606 9.25 11.8125C9.25 11.4644 9.1183 11.1306 8.88388 10.8844C8.64946 10.6383 8.33152 10.5 8 10.5C7.66848 10.5 7.35054 10.6383 7.11612 10.8844C6.8817 11.1306 6.75 11.4644 6.75 11.8125C6.75 12.1606 6.8817 12.4944 7.11612 12.7406C7.35054 12.9867 7.66848 13.125 8 13.125ZM9.25 15.75C9.25 16.0981 9.1183 16.4319 8.88388 16.6781C8.64946 16.9242 8.33152 17.0625 8 17.0625C7.66848 17.0625 7.35054 16.9242 7.11612 16.6781C6.8817 16.4319 6.75 16.0981 6.75 15.75C6.75 15.4019 6.8817 15.0681 7.11612 14.8219C7.35054 14.5758 7.66848 14.4375 8 14.4375C8.33152 14.4375 8.64946 14.5758 8.88388 14.8219C9.1183 15.0681 9.25 15.4019 9.25 15.75ZM4.875 2.625C4.37772 2.625 3.90081 2.83242 3.54917 3.20163C3.19754 3.57085 3 4.07161 3 4.59375V5.90625C3 6.42839 3.19754 6.92915 3.54917 7.29837C3.90081 7.66758 4.37772 7.875 4.875 7.875H11.125C11.6223 7.875 12.0992 7.66758 12.4508 7.29837C12.8025 6.92915 13 6.42839 13 5.90625V4.59375C13 4.07161 12.8025 3.57085 12.4508 3.20163C12.0992 2.83242 11.6223 2.625 11.125 2.625H4.875ZM4.25 4.59375C4.25 4.4197 4.31585 4.25278 4.43306 4.12971C4.55027 4.00664 4.70924 3.9375 4.875 3.9375H11.125C11.2908 3.9375 11.4497 4.00664 11.5669 4.12971C11.6842 4.25278 11.75 4.4197 11.75 4.59375V5.90625C11.75 6.0803 11.6842 6.24722 11.5669 6.37029C11.4497 6.49336 11.2908 6.5625 11.125 6.5625H4.875C4.70924 6.5625 4.55027 6.49336 4.43306 6.37029C4.31585 6.24722 4.25 6.0803 4.25 5.90625V4.59375ZM15.5 17.7188C15.5 18.589 15.1708 19.4236 14.5847 20.0389C13.9987 20.6543 13.2038 21 12.375 21H3.625C2.7962 21 2.00134 20.6543 1.41529 20.0389C0.82924 19.4236 0.5 18.589 0.5 17.7188V3.28125C0.5 2.41101 0.82924 1.57641 1.41529 0.961056C2.00134 0.345702 2.7962 0 3.625 0H12.375C13.2038 0 13.9987 0.345702 14.5847 0.961056C15.1708 1.57641 15.5 2.41101 15.5 3.28125V17.7188ZM14.25 3.28125C14.25 2.7591 14.0525 2.25835 13.7008 1.88913C13.3492 1.51992 12.8723 1.3125 12.375 1.3125H3.625C3.12772 1.3125 2.65081 1.51992 2.29917 1.88913C1.94754 2.25835 1.75 2.7591 1.75 3.28125V17.7188C1.75 18.2409 1.94754 18.7417 2.29917 19.1109C2.65081 19.4801 3.12772 19.6875 3.625 19.6875H12.375C12.8723 19.6875 13.3492 19.4801 13.7008 19.1109C14.0525 18.7417 14.25 18.2409 14.25 17.7188V3.28125Z" fill="#655F5F"/>
</svg>

        </div>
        <span>How many rolls do I need? Use our Calculator</span>
        <div style={{ cursor: "pointer" }}>
          {isCalculatorVisible ? (
            <svg
              width="24"
              height="24"
              className="mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              className="mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>

      {isCalculatorVisible && (
        <div className="p-4 border rounded-md mt-4 bg-[#FFF3F6] flex flex-col gap-4">
          <h2 className="text-base font-medium font-poppins text-center">
            How many rolls do I need?
          </h2>
          <div className="flex items-center gap-2 my-2 justify-center">
            <label className="font-poppins text-xs font-normal">Feet</label>

            {/* Headless switch component */}
            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={!isMeter}
                onChange={handleToggle}
                className="peer sr-only"
              />
              <div
                className={`peer relative h-6 w-11 rounded-full ${
                  isMeter ? "bg-gray-200" : "bg-[#49AD91]"
                } after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] ${
                  !isMeter ? "peer-checked:after:translate-x-full peer-checked:after:border-white" : ""
                }`}
              ></div>
            </label>

            <label className="font-poppins text-xs font-normal">Meter</label>
          </div>
          <div className="flex flex-col md:flex-row gap-4 my-2 lg:container lg:mx-auto justify-center">
            <div className="flex flex-col gap-1">
              <label className="uppercase text-xs font-poppins font-normal">
                Width
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="border-white p-2"
                  placeholder="0"
                />
                <span className="absolute top-0 right-2 h-full flex items-center text-gray-500">
                  {isMeter ? "Ft" : "M"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase text-xs font-poppins font-normal">
                Height
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="border-white p-2"
                  placeholder="0"
                />
                <span className="absolute top-0 right-2 h-full flex items-center text-gray-500">
                  {isMeter ? "Ft" : "M"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-4 p-2 border-dashed border-2 border-pink-300 text-center w-1/2 rounded-full bg-white">
            <p>{`${width || 0} x ${height || 0} = ${rollsNeeded} rolls`}</p>
              <p>{`Total Price = ₹${totalPrice}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
