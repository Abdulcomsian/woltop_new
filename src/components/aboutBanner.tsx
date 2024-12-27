import banner from'../../../assets/banner/banner.png';


export default function aboutBanner() {
  return (
    
    <div className="container mx-auto">
      <div className='container mx-auto banner-wrapper'>
                 <div className="relative h-screen max-h-[240px] w-full lg:max-h-[400px]">
               <div className="absolute flex flex-col inset-0 items-center justify-center lg:space-y-10 md:px-20 p-5 text-center w-full">
               <h1 className="text-brand-dark text-center text-xl font-bold md:text-2xl lg:text-3xl 2xl:text-[40px]">
                <div className="banner-img-container text-center mx-auto">
                  <img className='wings-img p-3 mt-12' src="assets/card/wings.png" alt="" />
                  <img className='mt-5 mb-3 md:mt-5 lg:mt-5 2xl:mt-3 ' src="assets/card/heading.png" alt="" />
                </div>
               
                <span className="font-manrope leading-snug   mt-4 block text-[22px] md:text-[50px] 
                font-bold md:mb-0 lg:mb-0 2xl:mb-0 ">
                  Lorem ipsum dolor sit amet</span></h1>
              
                <div className="flex leading-6 md:leading-loose lg:leading-loose text-center items-center border-red-200 max-w-2xl md:max-w-96 lg:min-max-w-96">
                       <p>Lorem ipsum dolor sit amet consectetur. Penatibus leo
                         ac iaculis ornare justo maecenas auctor sodales. Libero ut tortor dignissim ac vitae erat ut est metus. Consectetur tincidunt pretium nunc dolor</p>
                 </div>
              
                 </div>
                 </div>
                 </div>

             

                 
    </div>
  );
}
