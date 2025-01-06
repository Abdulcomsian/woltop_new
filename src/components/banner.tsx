import Image from "next/image";
import bannerImage from "../../public/aboutbanner.jpg"

export default function banner() {
  return (
    
    <div>
    <div className="relative container mx-auto  mt-10 text-black">
            <div className="absolute inset-0">
               <Image 
                className="w-full h-full object-cover "
                src={"/public/aboutbanner.jpg"} 
                alt="Banner Background"
                width={1200}
                height={500}
               />
                
              
               
            </div>
            <div className="relative max-w-7xl mx-auto  md:px-4 sm:px-4 px-0  md:py-20 py-4  lg:px-8">
                <div className="text-center md:w-4/5   w-96 md:pr-5 md:pl-5  pr-5 pl-5  mx-auto">
                <div className="banner-img-container align-middle  text-center mx-auto">
              
                    <img className="mb-3  w-20 ml-auto mr-auto  "
                     src={"/wings.png"} alt="" />
                           <img className="wings-img p-3 mt-2 w-60 ml-auto mr-auto" 
                     src={"/heading.png"} alt="" />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold sm:text-5xl lg:text-6xl">
                Lorem ipsum dolor sit amet
                </h1>
                <p className="mt-4 text-lg sm:mt-6 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo
                maecenas auctor sodales. Libero ut tortor dignissim ac vitae erat ut est metus.
                    Consectetur tincidunt pretium nunc dolor
                </p>
             
                </div>
            </div>
            </div>

    </div>
  );
}
