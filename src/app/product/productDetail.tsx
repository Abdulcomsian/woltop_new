"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "../pages/shop/banner";
import Navbar from "../pages/shop/navbar";
import TopBar from "../pages/shop/topBar";
import Swiper from "../pages/shop/swiperItem";
import PopularWallpaper from "../pages/shop/popularWallpaper";
import ReviewCard from "../pages/shop/reviewCard";
import Reeling from "../pages/shop/reeling";
import DetailCard from "../pages/shop/detailCard";
import CategorieCard from "../pages/shop/categorieCard";
import VideoSection from "../pages/shop/videoSection";
import Footer from "../pages/shop/footer";
import ourTeam from "~/components/ourTeam";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "../pages/shop/stepSection";
import ConsultationSection from "../pages/shop/consultation-background";
import { Tabs,TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function productDetail() {
  return (
    <main>
         <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
                <Navbar></Navbar>
               
                <Footer></Footer>
    </main>
  );
}
