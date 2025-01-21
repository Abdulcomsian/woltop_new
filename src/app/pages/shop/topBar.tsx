import banner from "../../../assets/banner/banner.png";

interface TimeProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function topBar({ time }: { time: TimeProps }) {
  return (
    <div className="mx-auto">
      <div className="w-full bg-gradient-to-r from-pink-700 via-pink-700 via-[60%] to-purple-700 py-2 text-center text-white">
        <div className="flex flex-row items-center justify-between lg:container lg:m-auto px-5 lg:px-7 xl:px-10">
          <div className="font-rubaik flex justify-items-start p-1 text-left sm:w-80 lg:w-1/2">
            FREE Delivery on orders over ₹1099 (T&amp;Cs apply)
          </div>
          <div className="countdown ml-4 flex w-1/2 justify-end gap-1 p-1">
            <span className="w-8 bg-white p-1 text-black">00</span> :
            <span className="w-8 bg-white p-1 text-black">07</span> :
            <span className="w-8 bg-white p-1 text-black">27</span>
          </div>
        </div>
      </div>
    </div>
  );
}
