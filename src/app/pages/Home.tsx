import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Navbar from "./shop/navbar";
import TopBar from "./shop/topBar";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import Reeling from "./shop/reeling";
import VideoSection from "./shop/videoSection";


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
            
    </main>
  );
}
