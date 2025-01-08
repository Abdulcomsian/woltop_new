"use client";
import Link from "next/link";

import TopBar from "~/components/topBar";
// import topBar from "~/components/topBar";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "~/components/banner";
import aboutBanner from "~/components/banner";
import VideoSection from "../pages/shop/videoSection";
import OurTeam from "~/components/ourTeam";
// import aboutBanner from "~/components/aboutBanner";
import bannerAbout from "/public/aboutbanner.jpg";

export default function page() {
  return (
    <main className="">
      <TopBar time={{ hours: 0, minutes: 7, seconds: 27 }}></TopBar>
      <Navbar></Navbar>
      <Banner></Banner>
       <h1>kdnkdnfknd</h1>
      <Footer></Footer>
    </main>
  );
}
