import React from 'react';
import Image from "next/image";

export default function toolkitBar() {
  return (
    <div className='mt-5 border-1 border-r border-l border-t  rounded border-b border-l border-gray-400'>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
  style={{backgroundImage: "url('../../..')"}} 
  title="Woman holding a mug">
 <Image 
                                                        className="w-full h-full object-cover "
                                                        src={"/public/wings.png"}
                                                        alt="Banner Background1"
                                                        width={1200}
                                                        height={500}
                                                       />
  </div>

  <div className="   bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col 
  justify-between leading-normal">
    <div className="mb-8">
     
      <div className="text-gray-900 font-bold text-xl mb-2">Complete Your Decorating Toolkit</div>
      <p className="text-gray-700 text-base">All your DIY essentials More Info</p>
      <button
      className='border-{#0B0A0A} mt-5  border-2  
                                        w-4/5 bg-[#49AD91]-500 pt-3 pb-3 hover:bg-[#0B0A0A]-700 text-[#0B0A0A] font-medium  py-2 px-6 
                                      flex justify-center
                                      rounded'
      >Add - ₹799 </button>
    </div>

  </div>
</div>
    </div>
  )
}
