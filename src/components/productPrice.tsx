import React from 'react'

export default function productPrice() {
  return (
    <div className="mt-4 flex justify-start items-center">
   <div  style={{width:"40%"}} className='border-[#00000]-900 rounded-lg p-4 border-dashed  product-price-wrapper'>
               <div className='bg-[#49AD911A] inline-block pr-3 pl-3 rounded-full '> 
                <span className='text-[#49AD91]'>49% off </span> </div>
               <div className="dimension mt-1">
               53CM x 6M
               </div>
               <div className="price-wrapper flex">
               <div className='real-price text-[#49AD91]'>₹799</div>
               <div className='descount-price  text-{12px}  text-[#BAB8B8] line-through'>₹1630</div>
               </div>
               <div className='product-size'>
               ₹23.5/ft2 
               </div>
    </div>

             <div style={{width:"40%"}}
              className='bg-[#49AD911A]  ml-5 rounded-lg relative border-[#49AD91]-900 p-4 border-dashed  product-price-wrapper'>
               <div className='bg-[#49AD911A] inline-block pr-3 pl-3 rounded-full '> 
                <span className='text-[#49AD91]'>50% off </span> </div>
               <div className="dimension mt-1">
               53CM x 6M
               </div>
               <div className="price-wrapper flex">
               <div className='real-price text-[#49AD91]'>₹799</div>
               <div className='descount-price  text-{12px}  text-[#BAB8B8] line-through'>₹1149</div>
               </div>
               <div className='product-size'>
               ₹23.5/ft2 
               </div>
               <div  className="absolute top-5 right-3">
                <input type="checkbox" id="test1" />
                <label for="test1"></label>
               </div>  
    </div>
    </div>
 
  )
}
