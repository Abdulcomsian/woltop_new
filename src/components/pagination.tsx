import React from 'react'

export default function pagination() {
  return (
    <div>
          <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
{/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

        <div className="lg:w-3/5 w-full  flex items-center justify-between  ">
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
            
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1667 18.1673L9 14.0007L13.1667 9.83398" stroke="#49AD91" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0026 18.1673L14.8359 14.0007L19.0026 9.83398" stroke="#49AD91" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
         

                    <p className="text-sm ml-3 font-medium leading-none ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#49AD91" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        </p>                    
            </div>
            <div className="sm:flex hidden">
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">1</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">2</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">3</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-white text-white  bg-[#49AD91] p-2 mr-4 px-2">4</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">5</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">6</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">7</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#49AD91]-700 border-t border-transparent hover:border-[#49AD91]-400 pt-3 mr-4 px-2">8</p>
            </div>
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <p className="text-sm font-medium leading-none mr-3">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 19L16.5 14L11.5 9" stroke="#49AD91" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8359 14.1673L15.0026 10.0007L10.8359 5.83398" stroke="#49AD91" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 14.1673L9.16667 10.0007L5 5.83398" stroke="#49AD91" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
            </div>
        </div>
    </div>
    </div>
  )
}
