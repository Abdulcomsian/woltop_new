"use client";
import Link from "next/link";
// import topBar from "~/components/topBar";
import Banner from "~/components/banner";
import aboutBanner from "~/components/banner";
import VideoSection from "../pages/shop/videoSection";
import OurTeam from "~/components/ourTeam";
// import aboutBanner from "~/components/aboutBanner";
import bannerAbout from "/public/aboutbanner.jpg";

export default function page() {
  return (
    <main className="">
      <Banner></Banner>
      <OurTeam></OurTeam>
      {/* <ourTeam></ourTeam> */}
    </main>
  );
}
