"use client";
import { useEffect } from "react";
import Home from "./pages/Home";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Home></Home>
    </>
  );
}
