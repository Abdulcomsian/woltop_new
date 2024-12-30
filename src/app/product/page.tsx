"use client";

import Link from "next/link";
import Banner from "../pages/shop/banner";
import Navbar from "../pages/shop/navbar";
import TopBar from "../pages/shop/topBar";
import Footer from "../pages/shop/footer";


export default function page() {
  return (
    <main>
                <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
                <Navbar></Navbar>
                       <h1>PRoduct Details </h1>



     
                <Footer></Footer>
    </main>
  );
}
