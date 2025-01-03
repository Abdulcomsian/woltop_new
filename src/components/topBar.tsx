import banner from'../../../assets/banner/banner.png';

export default function topBar() {
  return (
    
    <div className="mb-4 mx-auto">
<div className="w-full bg-gradient-to-r from-pink-700 via-pink-700 via-[60%]
 to-purple-700 text-white text-center py-2">
    <div className="lg:container lg:m-auto flex flex-row justify-between items-center
     px-5 lg:px-6 xl:px-8">
        <div className="flex justify-items-start  text-left  
      lg:w-1/2  sm:w-80 p-1">FREE Delivery on orders over ₹1099 (T&amp;Cs apply)</div>
      <div className="countdown w-1/2 ml-4 flex justify-end gap-1 p-1">
      <span className="bg-white text-black p-1 w-8 ">00</span> :
       <span className="bg-white text-black p-1 w-8">07</span> : 
       <span className="bg-white text-black p-1 w-8">27</span></div></div></div>
    </div>
  );
}
