"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Navbar from "./shop/navbar";
import TopBar from "./shop/topBar";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import ReviewCard from "./shop/reviewCard";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import Footer from "./shop/footer";
import ourTeam from "~/components/ourTeam";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import { Tabs,TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function cart() {
  return (
    <main>
         <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <ourTeam></ourTeam>
                <Footer></Footer>
    </main>
  );
}
