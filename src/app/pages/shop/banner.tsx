import banner from'../../../assets/banner/banner.png';

export default function Banner() {
  return (
    <div className="container mx-auto">

<div className="relative py-24 px-4">
  <div className="z-20 relative text-white container text-center mx-auto">
  <h1 className="text-3xl md:text-4xl font-normal tracking-tight font-lovelace text-white
      lg:text-7xl xl:text-7xl">Luxe Designs</h1>
    <button data-variant="outline" 
    className="inline-flex items-center mt-5 justify-center shrink-0 font-semibold leading-none
     rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow
      focus:ring-1 focus:ring-accent-700 border border-border-400 bg-transparent text-body 
      hover:text-light hover:bg-accent hover:border-accent px-5 py-0 h-12 text-white w-36 h-8 
      md:h-10 lg:h-12 lg:px-7" >
        Shop Now
        </button>
  </div>
  {/* <div className="absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5
   text-center md:px-20 lg:space-y-10">
    
    <h1 className="text-3xl md:text-4xl font-normal tracking-tight font-lovelace text-white
      lg:text-7xl xl:text-7xl">Luxe Designs</h1>


      <div className="w-full max-w-3xl">
        <button data-variant="outline" className="inline-flex items-center justify-center
         shrink-0 font-semibold leading-none rounded outline-none transition duration-300 
         ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 border
          border-border-400 bg-transparent text-body hover:text-light hover:bg-accent 
          hover:border-accent px-5 py-0 h-12 text-white w-36 h-8 md:h-10 lg:h-12 lg:px-7" >
          Shop Now
          </button>
          </div>
          </div> */}
  <div className="absolute inset-0  z-10">


    <img
    style={{position:"absolute",height:"100%", width:"100%", left:"0", top:"0",right:"0",bottom:"0", color:"transparent" }}
    src="http://localhost:3003/_next/image?url=http%3A%2F%2F127.0.0.1%3A8000%2Fstorage%2F2479%2F641_5-1.png&w=1920&q=75"       
      className="h-full w-full object-fit-cover" />
  </div>
</div>
    </div>
  );
}
