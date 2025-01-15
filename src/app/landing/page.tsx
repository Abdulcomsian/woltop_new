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
import BlogsItems from "~/components/blogsItems";

export default function page() {
  return (
    <main className="">
      <Banner></Banner>
      <h1>Home Consultation for Wallpapers </h1>
    </main>
  );
}
