"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface TimeProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TopBar({ time }: { time: TimeProps }) {
  const pathname = usePathname();
  const hideTopBar = pathname === "/cart" || pathname === "/thankYou";

  const [remainingTime, setRemainingTime] = useState<TimeProps>(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prevTime; // Stop updating when countdown ends
        }

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }

        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }

        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  if (hideTopBar) return null;

  return (
    <div className="mx-auto">
      <div className="w-full bg-gradient-to-r from-pink-700 via-pink-700 via-[60%] to-purple-700 py-2 text-center text-white">
        <div className="flex flex-row items-center justify-between lg:container lg:m-auto p-1 px-5 lg:px-7 xl:px-10">
          <div className="font-rubaik flex justify-items-start text-sm md:text-[18px] text-left sm:w-80 lg:w-1/2">
            FREE Delivery on orders over ₹1099 (T&amp;Cs apply)
          </div>
          <div className="countdown ml-4 flex items-center w-1/2 justify-end gap-1">
            <span className="w-8 bg-white p-1 text-black">
              {formatTime(remainingTime.hours)}
            </span>
            :
            <span className="w-8 bg-white p-1 text-black">
              {formatTime(remainingTime.minutes)}
            </span>
            :
            <span className="w-8 bg-white p-1 text-black">
              {formatTime(remainingTime.seconds)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
