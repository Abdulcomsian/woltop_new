import React from 'react'
import step1 from "../../public/step1.png"; 
import step2 from "../../public/step2.png"; 
import step3 from "../../public/step3.png"; 
import step4 from "../../public/step4.png"; 





export default function easySteps() {
  return (
    <div>

    
    <div className='text-center flex justify-center'>
      <div className="btn border-{#0B0A0A} mt-2  border-2   
        w-40 bg-[#AA4A00] rounded pt-3 pb-3 hover:bg-[#0B0A0A]-700 text-white
          font-medium  py-2 px-6    flex justify-center   rounded">
      How To Install
      </div>
      </div>
    <div className="flex justify-between mt-5 grid grid-flow-col md:gap-4
     auto-cols-[minmax(145px,1fr)] overflow-x-auto 
       scrollbar-hide auto-cols-[minmax(145px,1fr)]">
        
<div className=" grid justify-items-center content-center">
    <div className="relative  overflow-hidden rounded  mx-4">
      
        <div className="">
          <img src={step1.src} alt="" className="h-full w-full object-cover" />
        </div>
   
      <div className="relative p-4 h-auto">
       
        <div className="text-2xl mb-2 leading-7 text-center">      
          <h6 className="text-[#AA4A00] font-bold hover:text-[#AA4A00]-900 hover:underline hover:underline-offset-4 ">
            Step 1
          </h6>
          <p  className="text-[#AA4A00]-800 hover:text-[#656567]-900 pt-4 hover:underline text-base hover:underline-offset-4 ">
          Measure and cut the wallpaper to the required length 
          </p>
        </div>
        
      </div>
    </div>
</div> 


<div className=" grid justify-items-center content-center">
    <div className="relative  overflow-hidden rounded  mx-4">
      
        <div className="">
          <img src={step1.src} alt="" className="h-full w-full object-cover" />
        </div>
   
      <div className="relative p-4 h-auto">
       
        <div className="text-2xl mb-2 leading-7 text-center">      
          <h6 className="text-[#AA4A00] font-bold hover:text-[#AA4A00]-900 hover:underline hover:underline-offset-4 ">
            Step 2
          </h6>
          <p  className="text-[#AA4A00]-800 hover:text-[#656567]-900 pt-4 hover:underline text-base hover:underline-offset-4 ">
          Measure and cut the wallpaper to the required length 
          </p>
        </div>
        
      </div>
    </div>
</div> 


<div className=" grid justify-items-center content-center">
    <div className="relative  overflow-hidden rounded  mx-4">
      
        <div className="">
          <img src={step1.src} alt="" className="h-full w-full object-cover" />
        </div>
   
      <div className="relative p-4 h-auto">
       
        <div className="text-2xl mb-2 leading-7 text-center">      
          <h6 className="text-[#AA4A00] font-bold hover:text-[#AA4A00]-900 hover:underline hover:underline-offset-4 ">
            Step 3
          </h6>
          <p  className="text-[#AA4A00]-800 hover:text-[#656567]-900 pt-4 hover:underline text-base hover:underline-offset-4 ">
          Measure and cut the wallpaper to the required length 
          </p>
        </div>
        
      </div>
    </div>
</div> 


<div className=" grid justify-items-center content-center">
    <div className="relative  overflow-hidden rounded  mx-4">
      
        <div className="">
          <img src={step1.src} alt="" className="h-full w-full object-cover" />
        </div>
   
      <div className="relative p-4 h-auto">
       
        <div className="text-2xl mb-2 leading-7 text-center">      
          <h6 className="text-[#AA4A00] font-bold hover:text-[#AA4A00]-900 hover:underline hover:underline-offset-4 ">
            Step 4
          </h6>
          <p  className="text-[#AA4A00]-800 hover:text-[#656567]-900 pt-4 hover:underline text-base hover:underline-offset-4 ">
          Measure and cut the wallpaper to the required length 
          </p>
        </div>
        
      </div>
    </div>
</div> 



    </div>


    <div className="flex flex-col md:flex-row  justify-between  ">
    <div className="m-2">
        <div className="md:w-90 w-full    mx-auto bg-white p-4  border-2 border-dashed border-gray-300 rounded-md">
              <h6 className='p-2 font-bold text-xl text-[#AA4A00]'>Other Dos & Don’ts</h6>
                  

                 <ul className='list-disc pl-5 pr-4'>
                  <li className='text-[#AA4A00] pt-3'>Clean the wall surface before installation.</li>
                  <li className='text-[#AA4A00] '>Don’t apply on uneven & textured walls.</li>
                  <li className='text-[#AA4A00] '>Don’t Expose the excessive moisture.</li>
                 </ul>

        </div>
        </div>
        <div className="m-2">
        <div className="md:w-90 w-full  mx-auto bg-white p-4  border-2 border-dashed border-gray-300 
        rounded-md">
              <h6 className='p-2 font-bold text-xl text-[#AA4A00]'>Design & Apllication Details</h6>
                  

                  <table>
                    <tbody>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Room Type</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Suitable for all: Living room, bedroom, office arid more. </td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Pattern Repeat</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>64 cm</td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Pattern Match</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Offset Match</td>
                      </tr>
                      <tr>
                        <td className='p-4 mx-2 text-[#AA4A00]'>Application Guide</td>
                        <td className='p-4 my-2 mx-2 text-[#000000]'>Can be hanged using standard wallpaper glue adhesive.</td>
                      </tr>
                    </tbody>
                  </table>

        </div>
        </div>
    </div>
    </div>
  )
}
