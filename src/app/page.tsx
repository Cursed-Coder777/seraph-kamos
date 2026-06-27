"use client";

import { useEffect, useRef } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/components/HeroSection";
import CenterSection from "@/components/CenterSection";
import ColumnSection from "@/components/ColumnSection";
import LinesSection from "@/components/LinesSection";
import SidesSection from "@/components/SidesSection";
import CenterTallSection from "@/components/CenterTallSection";
import GridSection from "@/components/GridSection";
import OutroSection from "@/components/OutroSection";
import ScrollAnimations from "@/components/ScrollAnimations";
import ScrollDownButton from "@/components/ScrollDownButton";
import { preloadImages } from "@/lib/utils";

export default function Home() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    document.documentElement.classList.remove("no-js");
    preloadImages(".one").then(() => {
      document.body.classList.remove("loading");
    });
  }, []);

  return (
    <>
      <SmoothScroll />
      <ScrollDownButton />
      <main>
        <HeroSection />
        <CenterSection />
        <ColumnSection />
        <LinesSection />
        <SidesSection />
        <CenterTallSection />
        <GridSection />
        <OutroSection />
      </main>
      <ScrollAnimations />
    </>
  );
}
