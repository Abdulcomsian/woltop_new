import banner from'../assets/cards/bill.png';
import Shashank_Mishra  from "../assets/cards/Shashank_Mishra.png";
import Jonaed_Hasan  from "../assets/cards/Jonaed_Hasan.png";
import Md_RezaulKarim  from "../assets/cards/Md_RezaulKarim.png";


export default function ourTeam() {
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

                 <div className="container mx-auto">
                 <div className="team-wrapper">
                 <div className="text-center ">
                <h6 className='font-manrope mt-7 text-[34px] block font-bold md:mb-2 lg:mb-5 2xl:mb-7 '>
                  Meet Our Team
                </h6>
                <p className=' max-w-2xl mx-auto'>
                
                Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo maecenas auctor sodales. Libero ut tortor dignissim
                </p>
                 </div>
               
               <div  className='flex w-full mt-12 xl:mt-12 lg:mt-12  flex-col pb-[40px] lg:px-7 xl:px-10 xl:pb-[54px] 3xl:pb-[60px] lg:container lg:m-auto'>
                <div className="
                grid grid-cols-2 md:grid-cols-3  xl:grid-cols-3  lg:grid-cols-3 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10
                lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]
                xl:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] xl:gap-8 xl:gap-y-12 
                2xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] 
                3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]
                ">
                  <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src={Jonaed_Hasan.src} alt="Sunset in the mountains 1"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                  <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src={Md_RezaulKarim.src} alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="../assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                  <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src={Shashank_Mishra.src} alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="../assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                  <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src="../assets/card/Shashank_Mishra.png" alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="../assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                  <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src="../assets/card/Md_RezaulKarim.png" alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="../assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>

                   <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src="../assets/card/Jonaed_Hasan.png" alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="../assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                   <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src="../assets/card/Shashank_Mishra.png" alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                   <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src="assets/card/Md_RezaulKarim.png" alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                   <article className="product-card cart-type-argon h-full transform  rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg" 
                  role="button">
                   
                   <div className="max-w-sm rounded mx-auto  overflow-hidden ">
                    <div className="img-contain-about">
                    <div className="bg-img-contain"></div>
                    <img className=" main-img mx-auto object-contain   h-48 w-46  md:h-148 md:w-196"
                     src="assets/card/Jonaed_Hasan.png" alt="Sunset in the mountains"/>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Shashank Mishra</div>
                      <p className="text-gray-700 text-base">
                      CEO
                      </p>
                    </div>
                    <div className="pt-1 pl-3 pb-2">
                      <span className="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><img src="assets/card/linkedin.svg" alt="" /></span>
                      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <img src="assets/card/twitter.svg" alt="" /></span>
                    </div>
                  </div>
                   </article>
                </div>

                </div>
             
                 </div>
                 </div>
                 <div className="container mx-auto">
                 <div className="elevate-wrapper">
                 <div className="text-center ">
                <h6 className='font-manrope  text-[34px] mb-3 mt-7 block font-bold md:mb-4 lg:mb-5 2xl:mb-7 '>
                Elevate Your Room
                </h6>
                


          
                 </div>
                 </div>
                 </div>

                 
    </div>
  );
}
