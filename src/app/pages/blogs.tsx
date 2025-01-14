"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "./shop/banner";
import Swiper from "./shop/swiperItem";
import PopularWallpaper from "./shop/popularWallpaper";
import ReviewCard from "./shop/reviewCard";
import Reeling from "./shop/reeling";
import DetailCard from "./shop/detailCard";
import CategorieCard from "./shop/categorieCard";
import VideoSection from "./shop/videoSection";
import ourTeam from "~/components/ourTeam";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "./shop/stepSection";
import ConsultationSection from "./shop/consultation-background";
import BlogsItems from "~/components/blogsItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function blogs() {
  return (
    <main>
      <Swiper></Swiper>
      <h1>dknfk</h1>
      <BlogsItems></BlogsItems>
    </main>
  );
}
