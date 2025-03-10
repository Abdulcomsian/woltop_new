"use client";
import { useEffect } from "react";
import { useGetFaviconQuery } from "~/store/api/faviconApi";

export default function FaviconAndTitle() {
  const { data: faviconData } = useGetFaviconQuery({});
  const faviconUrl = faviconData?.data?.icon || "/favicon.svg";

  useEffect(() => {
    if (faviconUrl) {
      const link = document.querySelector("link[rel='icon']") || document.createElement("link");
      link.rel = "icon";
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, [faviconUrl]);

  return null;
}
