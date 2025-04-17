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
          return prevTime;
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

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  if (hideTopBar) return null;

  return (
    <>
      <div className="w-full bg-gradient-to-r from-pink-700 via-pink-700 h-[50px] md:h-[54px] via-[60%] to-purple-700 flex items-center text-white">
        <div className="w-full flex flex-row items-center justify-between mx-auto max-w-[1075px] px-3">
          <div className="font-rubaik flex justify-items-start text-xs md:text-sm text-left max-w-[335px]">
            FREE Delivery on orders over ₹1099 (T&amp;Cs apply)
          </div>
          <div className="countdown flex items-center w-1/2 justify-end gap-1">
            <span className="w-[26px] h-[26px] bg-white text-black flex items-center justify-center pt-[2px]">
              {formatTime(remainingTime.hours)}
            </span>
            <span className="text-black">:</span>
            <span className="w-[26px] h-[26px] bg-white text-black flex items-center justify-center pt-[2px]">
              {formatTime(remainingTime.minutes)}
            </span>
            <span className="text-black">:</span>
            <span className="w-[26px] h-[26px] bg-white text-black flex items-center justify-center pt-[2px]">
              {formatTime(remainingTime.seconds)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
