import Link from "next/link";

import TopBar from "~/components/topBar";
// import topBar from "~/components/topBar";
import Navbar from "../pages/shop/navbar";
import Footer from "../pages/shop/footer";
import Banner from "../pages/shop/banner";
import aboutBanner from "~/components/aboutBanner"; 
import VideoSection from "../pages/shop/videoSection";
import OurTeam from "~/components/ourTeam";

export default function page() {
  return (
    <main className="">
                <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
                {/* <Navbar></Navbar> */}
          

                <div>
                <div className="relative bg-gray-800 text-white">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover opacity-50"
      src="https://via.placeholder.com/1920x600"
      alt="Banner Background"
    />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
      Lorem ipsum dolor sit amet
      </h1>
      <p className="mt-4 text-lg sm:mt-6 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur. Penatibus leo ac iaculis ornare justo
       maecenas auctor sodales. Libero ut tortor dignissim ac vitae erat ut est metus.
        Consectetur tincidunt pretium nunc dolor
      </p>
      <div className="mt-6">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>
   
                </div>

                <OurTeam></OurTeam>
                {/* <ourTeam></ourTeam> */}
                <Footer></Footer>
    </main>
  );
}
