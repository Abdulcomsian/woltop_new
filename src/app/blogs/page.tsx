"use client";
import Link from "next/link";
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
      <BlogsItems></BlogsItems>
    </main>
  );
}
