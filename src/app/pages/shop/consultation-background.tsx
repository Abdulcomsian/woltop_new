import Image from 'next/image';

import consultantgirl  from "../../../assets/img/consultation-girl.png";
import logoSrc  from "../../../assets/img/consultation-bg.png";

const ConsultationSection = () => {
//   const logoSrc = '../../../assets/img/consultation-bg.png';
//   const consultantgirl = '../../../assets/img/consultation-girl.png';

  return (
    <div
      className="relative bg-cover bg-center p-8 rounded-lg flex items-center justify-end h-[481px] mt-8"
      style={{ backgroundImage: `url(${logoSrc.src})` }}
    >
      {/* Girl Image - Positioned Absolute */}
      <div className="absolute left-0 bottom-0 transform -translate-x-1/3 sm:translate-x-0 sm:left-5 sm:bottom-5 -top-11">
        {/* <img
          src={consultantgirl}
          alt="Girl with thumbs up"
          width={400}
          height={500}
          className="object-contain"
        /> */}
      </div>
        
           <img src={consultantgirl.src}  
            className="object-contain absolute left-20 bottom-0 hidden lg:block  block"
           width={470}
          height={550} alt="" />
      {/* Right Side - Content */}
      <div className="relative md:pl-40 pl-0 w-full sm:w-1/2 p-6 text-center sm:text-left z-10">
        <h2 className="text-3xl font-bold mb-4 text-black">
          In-Home Consultation
        </h2>
        <p className="text-gray-600 mb-4">
          Tailored Wallpaper Consultation Brought to Your Doorstep
        </p>
        <ul className="list-disc pl-5 text-left mb-6 text-gray-600">
          <li>Design Consultation</li>
          <li>Material Exploration</li>
          <li>Measurement</li>
        </ul>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ConsultationSection;
