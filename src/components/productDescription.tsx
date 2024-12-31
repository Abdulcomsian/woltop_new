import React from 'react';
import Image from "next/image";

export default function productDescription() {
  return (
    <div className=''>
    <div className='flex justify-around  bg-white p-4 mb-2'>
        <div className=''>
        <h1>Product Description</h1>
                <ul>
                    <li className='text-[#49AD91]'>Elegant golden leaf design for glamourous ambiance</li>
                    <li className='text-[#49AD91]'>Texture finish with lusture & sparkle</li>
                    <li className='text-[#49AD91]'>High-Quality Non-Woven material</li>
                    <li className='text-[#49AD91]'>Roll Size: 53CM x 9.5M</li>
                    <li className='text-[#49AD91]' >Easy to install using standard wallpaper glue</li>
                </ul>
     
        </div>
        <div className=''>
            <Image 
                                                                  className="w-full h-full object-cover "
                                                                  src={"/public/moderen.png"}
                                                                  alt="Banner Background2"
                                                                  width={100}
                                                                  height={100}
                                                                 />
        </div>
    </div>

              <div className="div bg-white border-1 p-3">
                <h6 className='text-[#000000]'>HOW TO CARE</h6>
                <p className='text-[#49AD91]'>
                Use a damp cloth to clean the wallpaper. Avoid pasting the wallpaper on a cracked, textured or wall surface with moisture.
                </p>
              </div>
    </div>
  )
}
