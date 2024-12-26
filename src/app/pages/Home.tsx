import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Navbar from "./shop/navbar";
import TopBar from "./shop/topBar";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import Reeling from "./shop/reeling";
import VideoSection from "./shop/videoSection";
import Footer from "./shop/footer";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";

export default function Home() {
  return (
    <main className="">
        <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Banner></Banner>

        <PopularWallpaper></PopularWallpaper>
        <Reeling></Reeling>
        <VideoSection></VideoSection>
        {/* <Card> </Card> */}
      

       <ConsultationSection></ConsultationSection>

       <SectionBlock
        title="Effortless Wallpaper Ordering"
        subtitle="Simplify Your Wallpaper Shopping Experience"
        className="lg:container lg:m-auto pt-14"
        position="center"
       >
       <StepSection />

       </SectionBlock>

<SectionBlock
        title="Elevate You Room"
        subtitle=""
        className="lg:container lg:m-auto pt-14"
        position="center"
       >
      <Swiper></Swiper>

       </SectionBlock>
        <Footer></Footer>
            
    </main>
  );
}
